import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const API_KEY = process.env.OPENWEATHER_API_KEY || "YOUR_OPENWEATHER_API_KEY_PLACEHOLDER";

// health check
app.get("/", (req, res) => {
  res.send("Weather webhook is alive.");
});

app.post("/webhook", async (req, res) => {
  try {
    // Dialogflow v2 webhook structure
    const params = req.body?.queryResult?.parameters;
    // Dialogflow sometimes returns city as array or string depending on config
    let city = "";
    if (!params) {
      return res.json({ fulfillmentText: "I didn't get the location. Which city?" });
    }

    if (Array.isArray(params.city)) {
      city = params.city[0];
    } else if (typeof params.city === "string") {
      city = params.city;
    } else {
      // some setups put it under geo-city
      if (Array.isArray(params["geo-city"])) city = params["geo-city"][0];
      else if (typeof params["geo-city"] === "string") city = params["geo-city"];
    }

    if (!city) {
      return res.json({ fulfillmentText: "Which city do you want the weather for?" });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`;

    const weatherResp = await axios.get(url);
    const data = weatherResp.data;

    if (!data || data.cod && data.cod !== 200) {
      return res.json({ fulfillmentText: `I couldn't find weather info for ${city}.` });
    }

    const temp = data.main.temp;
    const feels = data.main.feels_like;
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind?.speed;

    const reply = `Weather in ${city}: ${temp}°C (${desc}). Feels like ${feels}°C. Humidity ${humidity}%${wind ? `, wind ${wind} m/s.` : "."}`;

    return res.json({
      fulfillmentText: reply
    });
  } catch (err) {
    console.error("Webhook error:", err?.response?.data || err.message || err);
    return res.json({
      fulfillmentText: "Sorry, I had trouble fetching the weather. Try again in a moment."
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

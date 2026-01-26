<div align="center">
  <h1><b>Weather.ai</b></h1>
  <p><i>A Minimalist Weather Assistant Android App</i></p>
</div>

---

**Developed by:** Mahi  
**Platform:** Android  
**Language:** Java  
**Backend:** Node.js (Webhook)  
**API:** OpenWeather API  

---

## 📱 Project Overview

Weather.ai is a lightweight Android application that provides real-time weather information for any city entered by the user. The app focuses on simplicity, elegance, and responsiveness, delivering accurate weather data through a clean and visually refined interface.

This project demonstrates end-to-end mobile application development, including Android UI design, backend integration, API communication, and deployment.

---

## ✨ Features

- Real-time weather updates by city name  
- Displays:
  - Temperature (°C)
  - Weather condition (description)
  - Feels-like temperature
  - Humidity
  - Wind speed  

- Elegant UI featuring:
  - Glassmorphic input design
  - Gold and blue aesthetic theme
  - Animated twinkling stars background
  - Smooth fade-in animation for weather results  

- Custom app icon  
- “About / Copyright” dialog integrated into the UI  
- Asynchronous network communication with robust timeout handling  

---

## 🛠️ Tech Stack

### Frontend (Android)
- Java  
- Android SDK  
- ConstraintLayout  
- Custom XML drawables  
- XML-based animations  

### Networking
- OkHttp  
- JSON parsing using `org.json`  

### Backend
- Node.js  
- Express.js  
- Axios  

### External API
- OpenWeather API  

---

## 🔗 Architecture Overview

1. **User Input**  
   - User enters a city name in the Android app.

2. **Android App**  
   - Sends a POST request to a backend webhook using OkHttp.  
   - Handles asynchronous responses safely on the UI thread.

3. **Backend Webhook**  
   - Receives the request.  
   - Extracts the city parameter.  
   - Fetches real-time weather data from the OpenWeather API.  
   - Sends a formatted response back to the app.

4. **UI Update**  
   - Weather data is displayed with a smooth fade-in animation for improved user experience.

---

## 🎨 UI & UX Design

- **Theme:** Night-sky inspired blue with gold accents  
- **Input:** Minimal, non-box styled glassmorphic city input  
- **Button:** Custom gold-glow styled action button  
- **Result Display:** Oval glass-effect container displayed only when data is available  
- **Background:** Animated twinkling stars for visual depth  
- **Typography:** Elegant serif and cursive fonts for a premium feel  

---

## 🔒 Error Handling

- Network timeouts handled through OkHttp configuration  
- Graceful error messages for:
  - Network failures  
  - Invalid city names  
  - Backend errors  

- UI remains stable even during failed requests  

---

## 🚀 Deployment

- Backend deployed using Render  
- Android app tested on:
  - Emulator (API 35)  
  - Physical Android device  

- App icon and branding finalized for real-device use  

---

## 📈 Learning Outcomes

This project demonstrates:
- Android app lifecycle management  
- REST API integration  
- Backend webhook creation and deployment  
- Asynchronous networking  
- UI/UX design principles  
- Debugging real-world integration issues  
- End-to-end application ownership  

---

## 📌 Future Enhancements

- Location-based weather using GPS  
- 7-day weather forecast  
- Light/Dark mode toggle  
- Offline caching  
- Multi-language support  

---

## © Copyright

© 2025 Mahi.  
All rights reserved.


<div align="center">
 <b><h1>Weather.ai</h1></b>
</div>

> *"A Minimalist Weather Assistant Android App"

**Developed by:** *Mahi*
**Platform:** *Android*
**Language:** *Java*
**Backend:** *Node.js (Webhook)*
**API:** *OpenWeather API*

---
##📱 Project Overview

Weather.ai is a lightweight Android application that provides real-time weather information for any city entered by the user. The app focuses on simplicity, elegance, and responsiveness, delivering accurate weather data through a clean and visually refined interface.

The project demonstrates end-to-end mobile development, including Android UI design, API integration, backend communication, and deployment.

---
##✨ Features

•Real-time weather updates by city name

•Displays:
(i)Temperature (°C)
(ii)Weather condition (description)
(iii)Feels-like temperature
(iv)Humidity
(v)Wind speed

•Elegant UI with:
(i)Glassmorphic input design
(ii)Gold and blue aesthetic theme
(iii)Animated twinkling stars background
(iv)Smooth fade-in weather result animation

•Custom app icon

•“About / Copyright” dialog integrated into the UI

•Asynchronous network communication with robust timeout handling and retry-friendly design.

---
##🛠️ Tech Stack

**Frontend (Android)**
•Java
•Android SDK
•ConstraintLayout
•Custom XML drawables
•Animations (XML-based)

**Networking**
•OkHttp (for HTTP requests)
•JSON handling with org.json

**Backend**
•Node.js
•Express.js
•Axios

**External API**
•OpenWeather API

---
##🔗 Architecture Overview

**1.User Input**
 •User enters a city name in the Android app.

**2.Android App**
 •Sends a POST request to a backend webhook using OkHttp.
 •Handles asynchronous responses safely on the UI thread.

**3.Backend Webhook**
 •Receives the request.
 •Extracts the city parameter.
 •Fetches real-time weather data from OpenWeather API.
 •Sends a formatted response back to the app.

**4.UI Update**
 •Weather data is displayed with a fade-in animation for better user experience.
 
---
##🎨 UI & UX Design

**•Theme:** Night sky inspired blue with gold accents
**•Input:** Minimal, non-box styled glassmorphic city input
**•Button:** Custom gold glow styling
**•Result Display:** Oval glass-effect container that appears only when data is available
**•Background:** Animated twinkling stars for visual depth
**•Typography:** Elegant serif and cursive fonts for a premium feel

---
##🔒 Error Handling

•Network timeouts handled via OkHttp configuration

•Graceful error messages for:
(i)Network failures
(ii)Invalid city names
(iii)Backend errors

•UI remains stable even during failed requests

---
##🚀 Deployment

•Backend deployed using Render

•Android app tested on:
(i)Emulator (API 35)
(ii)Physical Android device

•App icon and branding finalized for real-device use

---
##📈 Learning Outcomes
This project demonstrates:
•Android app lifecycle management
•REST API integration
•Backend webhook creation and deployment
•Asynchronous networking
•UI/UX design principles
•Debugging real-world integration issues
•End-to-end application ownership

---
##📌 Future Enhancements
•Location-based weather (GPS)
•7-day forecast view
•Light/Dark mode toggle
•Offline caching
•Multi-language support

---
##© Copyright
© 2025 Mahi.
All rights reserved.

---

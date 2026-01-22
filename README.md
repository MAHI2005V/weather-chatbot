Weather.ai

A Minimalist Weather Assistant Android App

Developed by: Mahi
Platform: Android
Language: Java
Backend: Node.js (Webhook)
API: OpenWeather API

📱 Project Overview

Weather.ai is a lightweight Android application that provides real-time weather information for any city entered by the user. The app focuses on simplicity, elegance, and responsiveness, delivering accurate weather data through a clean and visually refined interface.

The project demonstrates end-to-end mobile development, including Android UI design, API integration, backend communication, and deployment.

✨ Features

Real-time weather updates by city name

Displays:

Temperature (°C)

Weather condition (description)

Feels-like temperature

Humidity

Wind speed

Elegant UI with:

Glassmorphic input design

Gold and blue aesthetic theme

Animated twinkling stars background

Smooth fade-in weather result animation

Custom app icon

“About / Copyright” dialog integrated into the UI

Fast and responsive network handling

🛠️ Tech Stack
Frontend (Android)

Java

Android SDK

ConstraintLayout

Custom XML drawables

Animations (XML-based)

Networking

OkHttp (for HTTP requests)

JSON handling with org.json

Backend

Node.js

Express.js

Axios

External API

OpenWeather API

🔗 Architecture Overview

User Input

User enters a city name in the Android app.

Android App

Sends a POST request to a backend webhook using OkHttp.

Handles asynchronous responses safely on the UI thread.

Backend Webhook

Receives the request.

Extracts the city parameter.

Fetches real-time weather data from OpenWeather API.

Sends a formatted response back to the app.

UI Update

Weather data is displayed with a fade-in animation for better user experience.

🎨 UI & UX Design

Theme: Night sky inspired blue with gold accents

Input: Minimal, non-box styled glassmorphic city input

Button: Custom gold glow styling

Result Display: Oval glass-effect container that appears only when data is available

Background: Animated twinkling stars for visual depth

Typography: Elegant serif and cursive fonts for a premium feel

🔒 Error Handling

Network timeouts handled via OkHttp configuration

Graceful error messages for:

Network failures

Invalid city names

Backend errors

UI remains stable even during failed requests

🚀 Deployment

Backend deployed using Render

Android app tested on:

Emulator (API 35)

Physical Android device

App icon and branding finalized for real-device use

📈 Learning Outcomes

This project demonstrates:

Android app lifecycle management

REST API integration

Backend webhook creation and deployment

Asynchronous networking

UI/UX design principles

Debugging real-world integration issues

End-to-end application ownership

📌 Future Enhancements

Location-based weather (GPS)

7-day forecast view

Light/Dark mode toggle

Offline caching

Multi-language support

© Copyright

© 2025 Mahi.
All rights reserved.

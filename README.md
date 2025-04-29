# 🌤️ Weather Web App

A responsive weather application built with React that allows users to get real-time weather information for their current location or any searched city.

## 🔗 Live Demo

[View on Vercel](https://weather-app-sarthakkhetarpal.vercel.app/)

## 🚀 Features

- 🌍 Get weather data based on your current location
- 🔍 Search weather by city name
- 🌡️ Displays temperature, humidity, wind speed, and cloudiness
- 🧭 Uses OpenWeatherMap API
- 🔄 Loader while fetching data
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Routing**: React Router
- **Icons**: React Icons
- **API**: [OpenWeatherMap](https://openweathermap.org/api)

## 🧩 Folder Structure
📦src
┣ 📂assets
┣ 📂components
┃ ┣ 📜Navbar.jsx
┃ ┣ 📜Weather.jsx
┃ ┣ 📜Search.jsx
┃ ┣ 📜Loader.jsx
┣ 📂Context
┃ ┗ 📜AppContext.jsx
┣ 📜App.jsx
┣ 📜main.jsx

## Install dependencies:

npm install

## Add environment variables:

Create a .env file in the root with the following:
VITE_WEATHER_API_KEY=your_openweathermap_api_key

## 🚀 Deployment

The app is deployed on Vercel. Environment variables must be manually added in the Vercel Dashboard > Settings > Environment Variables.
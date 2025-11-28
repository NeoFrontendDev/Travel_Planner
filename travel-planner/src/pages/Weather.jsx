import React, { useState } from "react";

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState("");
    
    const API_KEY = "5c482896325becf724a7a78e77397cd3";

    const fetchWeather = async () => {
        if (!city) return;

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );

            if (!res.ok) {
                setError("City not found. Try again.");
                setWeather(null);
                setForecast(null);
                return;
            }

            const data = await res.json();
            setError("");
            setWeather(data);

            const res2 = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
            )
        } catch (err){
            setError("Something went wrong.");
        }
    };
    return (
        <div className="page">
            <h1>Weather</h1>
            <p className="subtitle">Find the forecast for any city.</p>
            <div className="trip-form">
                <input type="text" placeholder="Enter city name..." value={city} onChange={(e) => setCity(e.target.value)} />
                <button onClick={fetchWeather}>Search</button>
            </div>

            {error && <p className="error">{error}</p>}

            {weather && (
                <div className="weather-box">
                    <h2>{weather.name}</h2>
                    <p className="temp">{weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default Weather;

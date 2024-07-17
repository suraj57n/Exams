import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherMap() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const city = "Hyderabad";
  const key = "8f0fff35941cc0ccc137048fbed59b19";
  const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(link);
        setWeather(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [link]);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p>Error loading weather: {error.message}</p>;
  }

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherMap;

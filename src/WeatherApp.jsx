import { useState } from "react";
import Search from "./Search";
import Show from "./Show.jsx";
import './WeatherApp.css';
const Api_key = import.meta.env.VITE_WEATHER_API_KEY


export default function WeatherApp() {
    const [info, setInfo] = useState(null);

    const fetchWeather = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`;
            const response = await fetch(url);
            const JsonResponse = await response.json();

            if (JsonResponse.cod === 200) {
                const result = {
                    city: JsonResponse.name,
                    temp: JsonResponse.main.temp,
                    feels_like: JsonResponse.main.feels_like,
                    humidity: JsonResponse.main.humidity,
                    temp_max: JsonResponse.main.temp_max,
                    temp_min: JsonResponse.main.temp_min,
                    weather: JsonResponse.weather[0].main, // Use main for broader categories
                };
                setInfo(result);
            } else {
                setInfo({ error: JsonResponse.message });
            }
        } catch (error) {
            setInfo({ error: "Failed to fetch weather data." });
        }
    };

    const getWeatherBackgroundClass = () => {
        if (!info || info.error) return 'bg-default';
        const weather = info.weather.toLowerCase();
        if (weather.includes('clear')) return 'bg-clear';
        if (weather.includes('clouds')) return 'bg-clouds';
        if (weather.includes('rain') || weather.includes('drizzle')) return 'bg-rain';
        if (weather.includes('thunderstorm')) return 'bg-thunderstorm';
        if (weather.includes('snow')) return 'bg-snow';
        if (weather.includes('mist') || weather.includes('fog') || weather.includes('haze')) return 'bg-mist';
        return 'bg-default';
    };

    return (
        <div className={`weather-app ${getWeatherBackgroundClass()}`}>
            <h1 className="app-title">Modern Weather App</h1>
            <p className="app-subtitle">Get the latest weather forecast </p>
            <Search fetchWeather={fetchWeather} />
            {info && <Show Info={info} />}
        </div>
    );
}
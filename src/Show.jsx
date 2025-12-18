import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Show.css';
import { getWeatherImage } from "./image.js";

export default function Show({ Info }) {
    if (Info.error) {
        return (
            <Card className="weather-card">
                <CardContent>
                    <Typography variant="h5" color="error" align="center">
                        {Info.error}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    if (!Info.city) {
        return null; // Don't render anything if there's no city info
    }

    const bgImage = getWeatherImage(Info.weather);

    return (
        <Card className="weather-card">
            <CardMedia
                className="weather-image"
                image={bgImage}
                title={Info.weather}
            />
            <CardContent>
                <h2 className="city-name">{Info.city}</h2>
                <div className="weather-info-grid">
                    <div className="info-box">
                        <h3>Temperature</h3>
                        <p>{Info.temp}&deg;C</p>
                    </div>
                    <div className="info-box">
                        <h3>Feels Like</h3>
                        <p>{Info.feels_like}&deg;C</p>
                    </div>
                    <div className="info-box">
                        <h3>Humidity</h3>
                        <p>{Info.humidity}%</p>
                    </div>
                    <div className="info-box">
                        <h3>Weather</h3>
                        <p>{Info.weather}</p>
                    </div>
                    <div className="info-box">
                        <h3>Temp Min</h3>
                        <p>{Info.temp_min}&deg;C</p>
                    </div>
                    <div className="info-box">
                        <h3>Temp Max</h3>
                        <p>{Info.temp_max}&deg;C</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
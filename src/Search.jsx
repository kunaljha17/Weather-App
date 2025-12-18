import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css'
import { useState } from 'react';

export default function Search({ fetchWeather }) {
    const [city, setCity] = useState("");

    const handleInput = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
        }
        setCity("");
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <TextField
                    className="city-input"
                    id="city-name"
                    label="Enter City Name"
                    variant="outlined"
                    onChange={handleInput}
                    value={city}
                    fullWidth
                />
                <Button className="search-button" variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}
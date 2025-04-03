import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDetails from './Components/WeatherDetails';
import DayButton from './Components/DayButton';


const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedDay, setSelectedDay] = useState(0);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://api.weatherapi.com/v1/forecast.json?q=Tashkent&days=3&key=ea6329817e554d2ebc860547250204'
                );
                setWeather(response.data);
            } catch (error) {
                console.log('Error fetching weather:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <WeatherDetails
                        location={weather?.location}
                        current={weather?.forecast?.forecastday[selectedDay]?.day}
                    />
                </>
            )}

<div className="flex space-x-2">
    {weather?.forecast?.forecastday?.map((day, index) => (
        <DayButton
            key={day.date_epoch}
            day={day}
            index={index}  // ✅ Pass index
            selectedDay={selectedDay}  // ✅ Pass selectedDay
            setSelectedDay={setSelectedDay}  // ✅ Pass function directly
        />
    ))}
</div>

        </div>
    );
};

export default WeatherApp;

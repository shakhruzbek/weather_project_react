import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDetails from './Components/WeatherDetails';
import DayButton from './Components/DayButton';
import HourlyWeather from './Components/HourlyWeather';


const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedDay, setSelectedDay] = useState(0);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://api.weatherapi.com/v1/forecast.json?q=&days=3&key=ea6329817e554d2ebc860547250204'
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
                        index={index}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                    />
                ))};
            </div>
            <div className="w-full max-w-md overflow-x-auto whitespace-nowrap flex space-x-2 p-2 border rounded-lg">
                {weather?.forecast?.forecastday?.[selectedDay]?.hour?.map((hour, index) => (
                    <HourlyWeather
                        key={hour.time_epoch}
                        hour={hour}
                        index={index}
                        selectedHour={selectedHour}
                        setSelectedHour={setSelectedHour}
                    />
                ))}
            </div>

        </div>
    );
};

export default WeatherApp;

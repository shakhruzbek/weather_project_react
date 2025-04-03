import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherDetails from './Components/WeatherDetails'
import "./WeatherApp.css"
import DayButton from './Components/DayButton'


const WeatherApp = () => {
    const [weather, setWeather] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchWeather = async () => {
            setLoading(true)
            try {
                const response = await axios.get(
                    'https://api.weatherapi.com/v1/forecast.json?q=Ottawa&days=3&key=ea6329817e554d2ebc860547250204'
                )
                setWeather(response.data)
            } catch (error) {
                console.log('Error fetching weather:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchWeather()
    }, [])

    return (
        <div className='container'>
            {isLoading && <h1 className='load'>Loading...</h1>}
            {(weather && !isLoading) && (
                <>
                    <WeatherDetails
                        location={weather?.location}
                        current={weather?.forecast.forecastday[0].day}
                    />
                    {weather.forecast.forecastday.map((day) => {
                        return <DayButton />
                    })}
                </>
            )}
        </div>
    );
}

export default WeatherApp
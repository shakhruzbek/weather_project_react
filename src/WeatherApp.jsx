import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherDetails from './Components/WeatherDetails'

function WeatherApp() {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios.get('https://api.weatherapi.com/v1/forecast.json?q=Tashkent&days=3&key=e0c4fcc2ca0449578ae35836241312')
            .then(response => {
                setWeather(response.data);
            })
    })
    return (
        <div>
            <WeatherDetails location={weather?.location}
                current={weather?.forecast?.forecastday?.[0].day}
            />

        </div>
    )
}

export default WeatherApp
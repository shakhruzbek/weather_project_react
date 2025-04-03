import React from 'react'

function WeatherDetails( {location ,current}) {
  return (
    <div className='weatherDetail'>
      <p>{location?.name}</p>
      <p>{location?.country}</p>
      <p>{current?.avgtemp_c} °C</p>
      <img src={current?.condition.icon} alt="icon" />
      <p>{current?.condition.text}</p>
    </div>
  )
}

export default WeatherDetails
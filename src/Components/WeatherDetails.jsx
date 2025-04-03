
import React from 'react'

const WeatherDetails = ({ location, current }) => {
  return (
    <div className={`h-60 w-80 border rounded-xl p-3 ${current?.is_day
      ? 'bg-gradient-to-r from-gray-700 to-gray-900'
      : 'bg-gradient-to-r from-blue-400 to-blue-600'
      } text-white`}>
      <div className='flex justify-between'>
        <p>{location?.name}
        </p>

        <p>{location?.country}</p>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <img className='w-16' src={current?.condition.icon} alt={current?.condition.text} />
        <p>{current?.maxtemp_c}°C</p>
        <p>{current?.condition.text}</p>
      </div>
    </div>
  )
}

export default WeatherDetails
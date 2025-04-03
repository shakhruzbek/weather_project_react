import React from 'react';

const HourlyWeather = ({ hour, index, selectedHour, setSelectedHour }) => {
  const formattedTime = hour.time.split(' ')[1];
  return (
    <div>
      <button
        className={`dailyBtn min-w-[80px] px-4 py-2 ${hour.time === selectedHour ? "activeBtn" : ""}`}
        onClick={() => setSelectedHour(hour.time)}
      >
        {formattedTime}
      </button>
    </div>
  );
};

export default HourlyWeather;

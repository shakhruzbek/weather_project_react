import React from 'react';
import "./DayButton.css"

const DayButton = ({ day, index, selectedDay, setSelectedDay }) => {
    console.log(day);
    
    const weekDay = new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
    });
    return (
        <div className='flex mt-5'>
            <button
                className={`dailyBtn ${index === selectedDay ? "activeBtn" : ""}`}
                onClick={() => setSelectedDay(index)}  
            >
                {weekDay}
            </button>
        </div>
    );
};

export default DayButton;
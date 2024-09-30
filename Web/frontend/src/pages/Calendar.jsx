import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const generateDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  
  return days;
};

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = generateDaysInMonth(currentYear, currentMonth);

  const startDay = new Date(currentYear, currentMonth, 1).getDay(); // First day of the month

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <button onClick={handlePrevMonth}>
          <AiOutlineLeft className="text-gray-600 hover:text-gray-900" />
        </button>
        <div className="text-lg font-semibold text-gray-700">
          {today.toLocaleString('default', { month: 'long' })} {currentYear}
        </div>
        <button onClick={handleNextMonth}>
          <AiOutlineRight className="text-gray-600 hover:text-gray-900" />
        </button>
      </div>

      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-2 text-center mb-4">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="text-sm font-semibold text-gray-700">
            {day}
          </div>
        ))}
      </div>

      {/* Days of the month */}
      <div className="grid grid-cols-7 gap-2">
        {/* Empty cells for the days before the 1st of the month */}
        {Array.from({ length: startDay }).map((_, idx) => (
          <div key={idx}></div>
        ))}
        {/* Actual days */}
        {daysInMonth.map((date, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-full text-center cursor-pointer ${
              date.toDateString() === today.toDateString() ? 'bg-purple-600 text-white' : 'text-gray-700'
            }`}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

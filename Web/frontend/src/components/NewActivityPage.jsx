import React, { useState } from 'react';
import { AiFillBell } from 'react-icons/ai'; // Notification icon from react-icons

export const NewActivityPage = () => {
  const [activityName, setActivityName] = useState('');
  const [time, setTime] = useState('12:00');
  const [date, setDate] = useState('');
  const [activityType, setActivityType] = useState('Medication'); // Default value is Medication

  const handleSave = () => {
    // Handle save logic
    console.log({
      activityName,
      time,
      date,
      activityType,
    });
  };

  const handleDelete = () => {
    // Handle delete logic
    console.log('Activity Deleted');
  };

  return (
    <div className="min-h-screen bg-[#f7f3ff] flex w-full">
      {/* Main Content */}
      <div className="flex-1 relative flex flex-col items-center">
        {/* Notification Icon */}
        <div className="absolute top-8 right-8 bg-purple-100 p-3 rounded-full">
          <AiFillBell className="h-6 w-6 text-purple-600" />
        </div>

        <div className="w-4/6 bg-[#fff7d4] mt-8 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            Add New Activity
          </h2>

          {/* Activity Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Activity Name</label>
            <input
              type="text"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Activity Name"
            />
          </div>

          {/* Time Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Date Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Activity Type Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Activity Type</label>
            <select
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Medication">Medication</option>
              <option value="Appointment">Appointment</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

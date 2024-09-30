import React, { useState } from 'react';
import { AiFillBell } from 'react-icons/ai'; // Notification icon from react-icons

export const NewActivityPage = () => {
  const [eventName, setEventName] = useState('');
  const [durationStart, setDurationStart] = useState('12:00 AM');
  const [durationEnd, setDurationEnd] = useState('12:00 PM');
  const [repeat, setRepeat] = useState('Does not repeat');
  const [reminder, setReminder] = useState('30 minutes before');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    // Handle save logic
    console.log({
      eventName,
      durationStart,
      durationEnd,
      repeat,
      reminder,
      description,
    });
  };

  const handleDelete = () => {
    // Handle delete logic
    console.log('Event Deleted');
  };

  return (
    <div className="min-h-screen bg-[#f7f3ff] flex mt-16">
      {/* Main Content */}
      <div className="flex-1 relative flex flex-col items-center">
        {/* Notification Icon */}
        <div className="absolute top-8 right-8 bg-purple-100 p-3 rounded-full">
          <AiFillBell className="h-6 w-6 text-purple-600" />
        </div>

        <div className="w-4/6 bg-[#fff7d4] mt-8 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Activity</h2>

          {/* Event Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Take Medicine"
            />
          </div>

          {/* Duration Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                value={durationStart}
                onChange={(e) => setDurationStart(e.target.value)}
                className="block w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span className="self-center text-gray-500">:</span>
              <input
                type="time"
                value={durationEnd}
                onChange={(e) => setDurationEnd(e.target.value)}
                className="block w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Repeat Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">To Repeat</label>
            <select
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Does not repeat">Does not repeat</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          {/* Reminder Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Reminder</label>
            <select
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="30 minutes before">30 minutes before</option>
              <option value="1 hour before">1 hour before</option>
              <option value="1 day before">1 day before</option>
            </select>
          </div>

          {/* Add Description Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Add Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add description"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
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


import React from 'react';
import { Sidebar } from './Sidebar';
import { useNavigate } from 'react-router-dom';

// Main Layout Component
const ActivityPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen bg-gray-100 w-full">
      

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Activity</h1>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" onClick={()=>navigate('/contents/new-activity')}>
            Add event +
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Activity Cards */}
          <ActivityCard color="bg-yellow-100" />
          <ActivityCard color="bg-orange-100" />
          <ActivityCard color="bg-blue-100" />
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
<Sidebar/>

// Sidebar >Item Component


// Activity Card Component
const ActivityCard = ({ color }) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${color}`}>
      <h3 className="text-lg font-semibold mb-2">Take Medicine</h3>
      <p className="text-gray-600">Time to be taken</p>
      <p className="font-semibold mb-4">12:10 PM</p>
      <button className="bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center">
        <span className="mr-2">Edit</span>
        {/* Placeholder for edit icon */}
        ✎
      </button>
    </div>
  );
};

export default ActivityPage;

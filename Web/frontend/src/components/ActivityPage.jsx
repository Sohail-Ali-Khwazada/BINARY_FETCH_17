import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { useNavigate } from 'react-router-dom';

// Main Layout Component
const ActivityPage = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const colors = ["bg-yellow-100", "bg-orange-100", "bg-blue-100", "bg-green-100", "bg-red-100"]; // List of colors

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch('https://6nddmv2g-5000.inc1.devtunnels.ms/api/activities/get-activities');
        const data = await res.json();
        console.log(data);

        // Sort activities by date and time
        const sortedActivities = data.sort((a, b) => {
          const dateA = new Date(`${a.date} ${a.time}`);
          const dateB = new Date(`${b.date} ${b.time}`);
          return dateA - dateB;
        });

        setActivities(sortedActivities);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 w-full">
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Activity</h1>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate('/contents/new-activity')}>
            New Reminder +
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Activity Cards */}
          {activities.map((activity, index) => (
            <ActivityCard key={activity._id} color={colors[index % colors.length]} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Activity Card Component
const ActivityCard = ({ color, activity }) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${color}`}>
      <h3 className="text-lg font-semibold mb-2">{activity.activityName}</h3>
      <p className="text-gray-600">{activity.time}</p>
      <p className="font-semibold mb-4">{new Date(activity.date).toLocaleDateString()}</p>
      <button className="bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center">
        <span className="mr-2">Edit</span>
        ✎
      </button>
    </div>
  );
};

export default ActivityPage;

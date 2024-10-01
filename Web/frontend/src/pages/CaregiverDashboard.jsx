import React from "react";
import { AiFillBell } from "react-icons/ai"; // Importing the bell icon from react-icons
import Calendar from "./Calendar";
import profile from './../assets/Images/profile.jpg'; 

// Elder Information
const elder = {
  name: "Kamalesh J",
  age: 42,
  gender: "Male",
  photo: "https://via.placeholder.com/150",
  emergencyContact: "+91-9123456789",
  address: "123 Elderly Care Lane, Hyderabad",
  conditions: ["Diabetes", "Hypertension"],
  allergies: ["Penicillin"],
  medications: [
    { name: "Metformin", dosage: "500mg", time: "8:00 AM" },
    { name: "Amlodipine", dosage: "10mg", time: "9:00 AM" },
  ],
  vitals: {
    heartRate: 75,
    bloodPressure: "120/80",
    stepsCount: 3500,
    sleep: 7.5,
  },
  reminders: [
    { task: "Take Metformin", time: "8:00 AM" },
    { task: "Take Amlodipine", time: "9:00 AM" },
  ],
};

export const CaregiverDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ff] flex w-full">
      {/* Main Content */}
      <div className="flex-1 relative p-6">
        {/* Notification Icon */}
        <div className="absolute top-8 right-8 bg-purple-100 p-3 rounded-full">
          <AiFillBell className="h-6 w-6 text-purple-600" />
        </div>

        <div className="flex">
          {/* Elder's Vital Information */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <div className="text-lg font-semibold text-gray-700 mb-4">
              Vital Information
            </div>
            <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0 lg:space-x-8">
              {/* Profile Picture and Basic Info */}
              <div className="flex flex-col items-center">
                <img
                  src={profile}
                  alt="Elder's Profile"
                  className="w-32 h-32 rounded-full mb-4"
                />
                <div className="text-lg font-semibold">{elder.name}</div>
                <div className="text-sm text-gray-500">
                  {elder.age} years old, {elder.gender}
                </div>
                {/* <div className="text-sm text-gray-500 mt-2">{elder.address}</div> */}
              </div>

              {/* Vital Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-500">Heart Rate</div>
                  <div className="text-lg font-semibold">
                    {elder.vitals.heartRate} bpm
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Blood Pressure</div>
                  <div className="text-lg font-semibold">
                    {elder.vitals.bloodPressure}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Steps</div>
                  <div className="text-lg font-semibold">
                    {elder.vitals.stepsCount} steps
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Sleep</div>
                  <div className="text-lg font-semibold">
                    {elder.vitals.sleep} hours
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-4">
                <div className="text-sm text-gray-500">Emergency Contact</div>
                <div className="text-lg font-semibold">
                  {elder.emergencyContact}
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="flex ">
        {/* Reminder Box */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-1/2">
          <div className="text-lg font-semibold text-gray-700">Reminders</div>
          {elder.reminders.map((reminder, idx) => (
            <div key={idx} className="mt-4 flex justify-between items-center">
              <div>
                <div className="text-lg font-semibold">{reminder.task}{` (Medication)`}</div>
                <div className="text-sm font-semibold">27/02/2024</div>
              </div>
              <div className="bg-yellow-400 text-sm text-white px-4 py-1 rounded-full">
                {reminder.time}
              </div>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="mt-8 bg-black text-white rounded-lg p-6 shadow-md w-[40%] mx-auto">
          <div className="flex justify-between items-center">
            <div>Aug 2023</div>
            <div>...</div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-7 gap-4 text-center">
              <span className="text-gray-500">Su</span>
              <span className="text-gray-500">Mo</span>
              <span className="text-gray-500">Tu</span>
              <span className="text-gray-500">We</span>
              <span className="text-gray-500">Th</span>
              <span className="text-gray-500">Fr</span>
              <span className="text-gray-500">Sa</span>
            </div>
            <Calendar />
          </div>
        </div>
        </div>

        {/* Today's Tasks */}
        <div className="mt-8">
          <div className="text-lg font-semibold text-gray-700 mb-4">
            Today's Tasks
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Task Cards */}
            <div className="bg-[#fff7d4] p-4 rounded-lg shadow-md">
              <div className="text-lg font-semibold text-gray-700">
                Take Medicine
              </div>
              <div className="text-sm text-gray-500 mt-1">Time to taken</div>
              <div className="font-semibold text-lg">12:10 PM</div>
              <div className="mt-4 text-center bg-purple-500 text-white text-sm py-1 rounded-full">
                Pending
              </div>
            </div>
            <div className="bg-[#e2f7f1] p-4 rounded-lg shadow-md">
              <div className="text-lg font-semibold text-gray-700">
                Take Medicine
              </div>
              <div className="text-sm text-gray-500 mt-1">Time to taken</div>
              <div className="font-semibold text-lg">12:10 PM</div>
              <div className="mt-4 text-center bg-purple-500 text-white text-sm py-1 rounded-full">
                Pending
              </div>
            </div>
            <div className="bg-[#ffe7e7] p-4 rounded-lg shadow-md">
              <div className="text-lg font-semibold text-gray-700">
                Take Medicine
              </div>
              <div className="text-sm text-gray-500 mt-1">Time to taken</div>
              <div className="font-semibold text-lg">12:10 PM</div>
              <div className="mt-4 text-center bg-purple-500 text-white text-sm py-1 rounded-full">
                Pending
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

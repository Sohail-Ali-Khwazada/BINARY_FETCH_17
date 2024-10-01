import React, { useState } from 'react';

const Settings = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'KAMALESH J',
    email: 'example@gmail.com',
    age: '',
    phoneNumber: '',
    gender: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const resetForm = () => {
    setUserInfo({
      name: 'KAMALESH J',
      email: 'example@gmail.com',
      age: '',
      phoneNumber: '',
      gender: '',
      address: '',
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <ul className="space-y-4">
          <li className="text-gray-600 cursor-pointer">Dashboard</li>
          <li className="text-gray-600 cursor-pointer">Invitations</li>
          <li className="text-gray-600 cursor-pointer">Your Activity</li>
          <li className="text-gray-600 cursor-pointer">Chats</li>
          <li className="font-bold text-purple-600 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Settings Form */}
      <div className="w-3/4 bg-gray-50 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-4">
            <button className="border-dashed border-2 border-gray-300 w-full py-10 text-gray-500">
              Upload your photo
            </button>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full p-3 border rounded-lg ${editMode ? 'border-gray-300' : 'bg-gray-100'}`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full p-3 border rounded-lg ${editMode ? 'border-gray-300' : 'bg-gray-100'}`}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={userInfo.age}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full p-3 border rounded-lg ${editMode ? 'border-gray-300' : 'bg-gray-100'}`}
                placeholder="Please enter your Age"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone number</label>
              <input
                type="text"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full p-3 border rounded-lg ${editMode ? 'border-gray-300' : 'bg-gray-100'}`}
                placeholder="+91"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Gender</label>
              <select
                name="gender"
                value={userInfo.gender}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full p-3 border rounded-lg ${editMode ? 'border-gray-300' : 'bg-gray-100'}`}
              >
                <option value="">Select your Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                disabled={!editMode}
                className={`w-full p-3 border rounded-lg ${editMode ? 'border-gray-300' : 'bg-gray-100'}`}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-between">
            {editMode ? (
              <>
                <button
                  onClick={toggleEditMode}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                >
                  Reset
                </button>
              </>
            ) : (
              <button
                onClick={toggleEditMode}
                className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

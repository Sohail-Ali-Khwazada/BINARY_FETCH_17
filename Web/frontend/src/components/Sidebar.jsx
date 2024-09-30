import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ label, isActive, onClick }) => {
  return (
    <li
      className={`py-2 px-4 rounded-lg cursor-pointer ${
        isActive
          ? "bg-purple-100 text-purple-600"
          : "text-gray-600 hover:bg-purple-50"
      }`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState("your-activity");
  const navigate = useNavigate();
  return (
    <div className="w-96 bg-white shadow-lg p-4 pt-20">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-lg font-semibold">≡</span>
        </div>
        <h2 className="text-xl font-semibold">Vansh</h2>
      </div>
      <ul className="mt-6">
        <SidebarItem
          label="Dashboard"
          isActive={currentTab === "dashboard"}
          onClick={() => {
            setCurrentTab("dashboard");
            navigate("/contents/dashboard");
          }} // Sets the current tab to dashboard
        />

        <SidebarItem
          label="Activity"
          isActive={currentTab === "activity"}
          onClick={() => {
            setCurrentTab("activity");
            navigate("/contents/Activity");
          }} // Sets the current tab to your activity
        />
        <SidebarItem
          label="Chats"
          isActive={currentTab === "chats"}
          onClick={() => {
            setCurrentTab("chats");
            navigate("/contents/chats");
          }} // Sets the current tab to chats
        />
        <SidebarItem
          label="Market Place"
          isActive={currentTab === "marketplace"}
          onClick={() => {
            setCurrentTab("marketplace");
            navigate("/contents/marketplace");
          }} // Sets the current tab to chats
        />
        <SidebarItem
          label="Settings"
          isActive={currentTab === "settings"}
          onClick={() => {
            setCurrentTab("settings");
            navigate("/contents/settings");
          }} // Sets the current tab to settings
        />
      </ul>
      {/* User Section */}
      {/* <div className="absolute bottom-1 w-64 p-4 ">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Placeholder avatar
            alt="Avatar"
            className="rounded-full w-10 h-10"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">Kamalesh J</p>
            <p className="text-xs text-gray-500">kamal452jk@google.com</p>
          </div>
          <button className="text-purple-500">
            <span>🔓</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function Contents() {
  return (
    <div className="w-full border-2 border-red-800 flex">
      <Sidebar />
      <div className="min-h-screen bg-[#f7f3ff] flex mt-16 w-full">
        <Outlet />
      </div>
    </div>
  );
}

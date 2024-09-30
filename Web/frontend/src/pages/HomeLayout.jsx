import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Sidebar } from "../components/Sidebar";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex border-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

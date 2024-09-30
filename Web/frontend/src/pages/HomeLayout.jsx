import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
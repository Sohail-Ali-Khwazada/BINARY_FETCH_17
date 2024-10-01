import React from "react";
import logo from "../assets/icons/logo.png";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
export const Navbar = () => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex px-[5rem] h-[5rem] items-center fixed gap-8 justify-between w-full backdrop-blur-3xl z-50">
        <section className="logo flex gap-1 items-center">
          <img src={logo} alt="Logo" className="h-14" />
        </section>
        <section className="nav-links flex gap-5 ">
          {authUser ? (
            <div className="w-52 flex justify-between">
              <NavLink to={"/contents/marketplace"} className="nav-link ">
                Market Place
              </NavLink>
              <NavLink to={"/login"} className="nav-link text-red-600" onClick={()=>{
                localStorage.clear();
              }}>
                Log Out
              </NavLink>
            </div>
          ) : (
            <div className="w-32 flex justify-between">
              <NavLink to={"/login"} className="nav-link">
                Login
              </NavLink>
              <NavLink to={"/signup"} className="nav-link">
                Signup
              </NavLink>
            </div>
          )}
        </section>
      </nav>
    </>
  );
};

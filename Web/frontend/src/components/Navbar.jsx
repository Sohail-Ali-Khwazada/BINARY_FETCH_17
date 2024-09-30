import React from 'react'
import logo from '../assets/icons/logo.png'
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="flex px-[5rem] h-[4rem] items-center fixed gap-8 justify-between w-full text-white z-10 backdrop-blur-md">
        <section className="logo flex gap-1 items-center">
          <img src={logo} alt="Logo" className="h-14" />
        </section>
        <section className="nav-links flex gap-5">
          <NavLink to={"/login"} className="nav-link">
            Login
          </NavLink>
          <NavLink to={"/signup"} className="nav-link">
            Signup
          </NavLink>
          <NavLink to={"/"} className="nav-link">
            Market Place
          </NavLink>
        </section>
      </nav>
    </>

  )
}


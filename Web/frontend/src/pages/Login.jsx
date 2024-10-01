// src/components/LoginPage.js
import React, { useState } from "react";
import loginImage from './../assets/Images/login.png';
import facebook from './../assets/Images/facebook.png';
import google from './../assets/Images/google.png';
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useAuthContext } from "../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const {authUser} = useAuthContext()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    console.log(authUser)
    if(authUser.role === "doctor") navigate("/doctor");
    else navigate("/contents/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      {/* Navbar */}

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 w-full">
        {/* Left: Image Section */}
        <div className="flex-1 hidden md:block">
          <img src={loginImage} alt="Login Visual" className="w-[60%] h-auto mx-auto" />
        </div>

        {/* Right: Login Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className={`w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-gray-600">or Sign in with</span>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="flex items-center justify-center bg-gray-200 p-3 rounded-full">
                <img src={google} alt="Google Sign In" className="w-6 h-6" />
              </button>
              <button className="flex items-center justify-center bg-gray-200 p-3 rounded-full">
                <img src={facebook} alt="Facebook Sign In" className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-600">Don’t have an account?</span>
            <a href="signup" className="text-purple-600 ml-1 hover:underline">Create one</a>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup"; // Custom signup hook
import login from "./../assets/Images/login.png"; // Replace with your actual image
import facebook from "./../assets/Images/facebook.png"; // Replace with your actual image
import google from "./../assets/Images/google.png"; // Replace with your actual image
import { useAuthContext } from "../context/AuthContext";

export const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Role state
  const { loading, signup } = useSignup();
  const { authUser, setAuthUser } = useAuthContext(); // Assuming you have setAuthUser in context to update user
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Role before signup:", role); // Ensure role is logged correctly

    // Trigger signup action
    const success = await signup({ fullName, email, password, role });

    if (success) {
      console.log("Signup successful:", success);
      // Assuming the signup function sets authUser in context
      console.log("authUser after signup:", authUser);

      // Navigate based on role
      if (authUser?.role === "doctor") {
        navigate("/doctor");
      } else {
        navigate("/contents/dashboard");
      }
    } else {
      console.error("Signup failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Left: Image Section */}
        <div className="flex-1 hidden md:block">
          <img
            src={login}
            alt="Signup Visual"
            className="w-[60%] h-auto mx-auto"
          />
        </div>

        {/* Right: Sign Up Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            SignUp
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">
                Email ID
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="example@gmail.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Role Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="doctor">Doctor</option>
                <option value="careGiver">Care Giver</option>
                <option value="familyMember">Family Member</option>
              </select>
            </div>

            <button
              type="submit"
              className={`w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-gray-600">or Sign up with</span>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="flex items-center justify-center bg-gray-200 p-3 rounded-full">
                <img src={google} alt="Google Sign In" className="w-6 h-6" />
              </button>
              <button className="flex items-center justify-center bg-gray-200 p-3 rounded-full">
                <img
                  src={facebook}
                  alt="Facebook Sign In"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-600">Already have an account?</span>
            <Link to="/login" className="text-purple-600 ml-1 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";




function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser,setAuthToken } = useAuthContext();


  const signup = async ({ fullName, password, email, role }) => {
    const success = handleInputErrors({ fullName, password, email, role });

    if (!success) return false;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, password, email, role }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      const { token, ...userdata } = data;
      localStorage.setItem("loggedin_user", JSON.stringify(userdata));
      localStorage.setItem("travelapp-jwt", JSON.stringify(token));
      setAuthUser(userdata);
      setAuthToken(token);
      return true;

    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { loading, signup };

}

export default useSignup

function handleInputErrors({ fullName, password, email, role }) {
  if (!fullName || !password || !email || !role) {
    toast.error("Please fill in all the fields")
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");



    alert("Logged out successfully!");
    console.log("🔒 User logged out");

    setTimeout(() => {
      navigate("/login");
    }, 500);
  }, [navigate]);

  return null;
};

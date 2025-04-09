
import { toast } from "react-toastify";

const API_URL = "http://localhost:5000/api";
export const signUp = async (email, password) => {
  if (!email || !password) {
    toast.error("Please provide both email and password!");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Signup failed");
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("userEmail", data.user.email);
    toast.success("🎉 Signup successful!");
    console.log("✅ User signed up:", data.user.email);
  } catch (error) {
    console.error("Signup Error:", error.message);
    toast.error(`Signup failed: ${error.message}`);
  }
};

export const login = async (email, password) => {
  if (!email || !password) {
    toast.error("Please enter both email and password!");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("userEmail", data.user.email);
    toast.success(`Welcome back, ${data.user.email}! 🚀`);
    console.log("✅ User logged in:", data.user.email);
  } catch (error) {
    console.error("Login Error:", error.message);
    toast.error(`Login failed: ${error.message}`);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  toast.info("Logged out successfully!");
};

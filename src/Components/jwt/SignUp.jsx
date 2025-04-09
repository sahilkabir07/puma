import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        email,
        password,
      });
      localStorage.setItem("userEmail", email);
      alert("🎉 Signup successful! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
      alert("Signup failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 mb-4"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 mb-4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded-md hover:bg-red-400 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

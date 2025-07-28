import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://password-reset-flow-la4y.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/services"); // Redirect after successful login
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://rare-gallery.com/mocahbig/467751-nature-landscape-mountains-water-reflection-rocks.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-black/30 backdrop-blur-md rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-yellow-300 mb-6 font-serif">
          🌟 Welcome Back to GrandVista 🌟
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-yellow-400 rounded-xl shadow-sm bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-yellow-400 rounded-xl shadow-sm bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition transform hover:scale-105 shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          <Link to="/forgot-password" className="text-yellow-300 font-semibold hover:underline">
            Forgot Password?
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-300 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

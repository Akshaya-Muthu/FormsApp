import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { id, token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/reset-password/${id}/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Password reset successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Invalid or expired token.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/026/182/088/small_2x/twillight-sky-and-beach-blurred-background-ai-generateand-mountain-d-photo.jpg')",
        backgroundColor: "#000",
      }}
    >
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-purple-100 mb-6">
          Reset Your Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-3 border border-white/50 rounded-lg shadow-sm bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-white/50 rounded-lg shadow-sm bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-300 hover:bg-purple-400 text-purple-900 font-bold py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            Reset Password
          </button>
        </form>
        {message && (
          <p className="mt-4 text-green-300 font-medium text-center">{message}</p>
        )}
        {error && (
          <p className="mt-4 text-red-300 font-medium text-center">{error}</p>
        )}
      </div>
    </div>
  );
}

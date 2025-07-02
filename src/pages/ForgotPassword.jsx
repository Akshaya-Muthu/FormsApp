import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Reset link sent! Check your email.");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send reset link. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('http://s1.picswalls.com/wallpapers/2016/03/29/beautiful-nature-high-definition_042323787_304.jpg')",
        backgroundColor: "#000",
      }}>
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-green-200 mb-6">
          Forgot Your Password?
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-white/50 rounded-lg shadow-sm bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-300 hover:bg-green-400 text-green-900 font-bold py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-4 text-green-300 font-medium text-center">{message}</p>}
        {error && <p className="mt-4 text-red-300 font-medium text-center">{error}</p>}
      </div>
    </div>
  );
}

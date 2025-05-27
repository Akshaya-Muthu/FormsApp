import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-indigo-500 to-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          <Link to="/forgot-password" className="text-indigo-700 font-semibold">
            Forgot Password?
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

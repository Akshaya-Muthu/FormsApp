export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-400">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-center text-cyan-700 mb-6">
          Forgot Your Password?
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

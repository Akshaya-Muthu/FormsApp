import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center relative"
      style={{
        backgroundImage: "url('https://vistapointe.net/images/hotel-9.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Medium size curved welcome box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl p-8 text-center"
      >
        <h1 className="text-4xl font-serif font-extrabold text-yellow-300 mb-4 drop-shadow-lg">
          🏨 Grand Royale
        </h1>
        <p className="text-white text-lg mb-5">
          ✨ Luxury and comfort in every stay. Book now!
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-3 rounded-lg font-bold shadow-lg transition"
            onClick={() => navigate("/register")}
          >
            🚀 Register
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-white hover:bg-gray-100 text-black px-5 py-3 rounded-lg font-bold shadow-lg transition"
            onClick={() => navigate("/login")}
          >
            🔑 Login
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Booking() {
  const { serviceId } = useParams();
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/booking/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ service: serviceId, date }),
      });
      const data = await res.json();

      if (res.ok) {
        alert("🎉 Booking successful!");
      } else {
        alert(data.message || "❌ Booking failed.");
      }
    } catch (error) {
      alert("⚠️ Error: " + error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-lg rounded-[2rem] p-10 shadow-2xl animate-pulse hover:animate-none transition-all"
      >
        <h1 className="text-4xl font-extrabold text-yellow-300 mb-4 text-center">
          📅 Book Your Appointment
        </h1>
        <p className="mb-4 text-center text-lg">Service ID: <span className="font-bold">{serviceId}</span> 🏨</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition"
        >
          🚀 Confirm Booking
        </button>
      </form>
    </div>
  );
}

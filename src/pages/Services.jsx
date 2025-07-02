import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Luxury Suite 🏨",
      price: 5000,
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Royal Spa 💆‍♀️",
      price: 3000,
      img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/21170129/restaurants-in-hyderabad-1-1.jpeg",
    },
    {
      id: 3,
      name: "Fine Dining 🍽️",
      price: 1500,
      img: "https://tse4.mm.bing.net/th/id/OIP.JCHA40gUO5gnyccJMhrKfQHaE8?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      name: "Sky Lounge 🍸",
      price: 2500,
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Private Cinema 🎬",
      price: 4000,
      img: "https://tse2.mm.bing.net/th/id/OIP.IYHoqbT5BlhTqB6BE_siCgHaE7?pid=Api&P=0&h=180",
    },
    {
      id: 6,
      name: "Infinity Pool 🏊‍♂️",
      price: 3500,
      img: "https://static2.bigstockphoto.com/9/1/7/large2/71901061.jpg",
    },
    {
      id: 7,
      name: "Fitness Club 🏋️",
      price: 2000,
      img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?fit=crop&w=600&q=80",
    },
    {
      id: 8,
      name: "Conference Hall 🏢",
      price: 4500,
      img: "https://tse4.mm.bing.net/th/id/OIP.6nic5NFGvequ2Eyh2bEsxgHaEK?pid=Api&P=0&h=180",
    },
    {
      id: 9,
      name: "Garden Terrace 🌸",
      price: 1800,
      img: "https://tse4.mm.bing.net/th/id/OIP.flcFFTud2nHJxWYpppI8jwHaFj?pid=Api&P=0&h=180",
    },
  ];

  const handleBook = (serviceId) => {
    navigate(`/booking/${serviceId}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url('https://png.pngtree.com/background/20231030/original/pngtree-3d-rendering-of-a-lavish-five-star-hotel-lobby-interior-picture-image_5799248.jpg')`,
      }}
    >
      <div className="w-full max-w-7xl bg-black/50 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-300 font-serif">
          🌟 Our Premium Services 🌟
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:scale-105 transition"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h2 className="text-xl font-bold mb-1 text-white">
                {service.name}
              </h2>
              <p className="mb-3 text-yellow-200">Price: ₹{service.price}</p>
              <button
                onClick={() => handleBook(service.id)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg shadow-md"
              >
                Book Now ✨
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

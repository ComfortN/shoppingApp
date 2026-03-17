import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
     style={{ backgroundImage: "url('https://i.pinimg.com/736x/1f/7d/f9/1f7df98a2047c3f243d428e6322e5341.jpg')" }}>

      <h1 className="text-5xl font-bold mb-4">GreenLeaf Co.</h1>

      <p className="max-w-xl text-center mb-6">
        Premium houseplants to bring life into your home.
      </p>

      <Link to="/products">
        <button className="bg-green-600 px-6 py-3 rounded hover:bg-green-700">
          Get Started
        </button>
      </Link>
    </div>
  );
}

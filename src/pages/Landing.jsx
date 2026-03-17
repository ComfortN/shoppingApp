import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
     style={{ backgroundImage: "url('/img/bg.jpg')" }}>

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
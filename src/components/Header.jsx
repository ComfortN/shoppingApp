import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const items = useSelector((state) => state.cart.items);

  const total = Object.values(items).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-green-700 text-white shadow">
        <h1 className="text-xl font-bold">GreenLeaf Co.</h1>

        <nav className="flex gap-6 items-center">
            <Link to="/products" className="hover:underline">Shop</Link>
            <Link to="/cart" className="bg-white text-green-700 px-3 py-1 rounded">
            🛒 {total}
            </Link>
        </nav>
    </header>
  );
}
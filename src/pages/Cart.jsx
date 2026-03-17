import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../feature/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const list = Object.values(items);

  const totalItems = list.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = list.reduce(
    (sum, i) => sum + i.quantity * i.plant.price,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="mb-4">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost}</p>
      </div>

      {list.map(({ plant, quantity }) => (
        <div key={plant.id} className="flex items-center gap-4 border p-4 mb-4 rounded">
          <img src={plant.img} className="w-20 h-20 object-cover" />

          <div className="flex-1">
            <h3 className="font-bold">{plant.name}</h3>
            <p>${plant.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => dispatch(decrease(plant.id))}
                    className="px-2 bg-gray-200">-</button>

            <span>{quantity}</span>

            <button onClick={() => dispatch(increase(plant.id))}
                    className="px-2 bg-gray-200">+</button>
          </div>

          <button
            onClick={() => dispatch(remove(plant.id))}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => alert("Coming Soon")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Checkout
        </button>

        <Link to="/products">
          <button className="border px-4 py-2 rounded">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}
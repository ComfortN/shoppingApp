import { plants } from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div className="p-6">
      {categories.map(cat => (
        <div key={cat} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{cat}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plants
              .filter(p => p.category === cat)
              .map(plant => {
                const added = items[plant.id];

                return (
                  <div key={plant.id} className="border rounded-lg p-4 shadow">
                    <img src={plant.img} className="h-40 w-full object-cover mb-3" />

                    <h3 className="text-lg font-bold">{plant.name}</h3>
                    <p className="text-green-700 font-semibold">R{plant.price}</p>

                    <button
                      disabled={!!added}
                      className={`mt-3 w-full py-2 rounded ${
                        added
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {added ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
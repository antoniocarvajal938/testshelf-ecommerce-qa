import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition"
        >
          Browse books
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
      {/* LEFT - PRODUCTS */}
      <div className="md:col-span-2 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Your Cart</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-4 bg-white p-4 rounded-xl border shadow-sm 
             transition-all duration-300 
             hover:shadow-lg hover:bg-orange-600/10 hover:-translate-y-1"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-28 object-contain bg-gray-50 p-2 rounded 
           transition duration-300 group-hover:scale-105"
            />

            {/* INFO */}
            <div className="flex-1">
              <h3 className="font-medium transition group-hover:text-orange-600">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.author}</p>
              <p className="mt-1 font-semibold">{item.price} €</p>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-2">
              {/* MINUS */}
              <button
                onClick={() => removeFromCart(item.id)}
                className={`w-8 h-8 flex items-center justify-center border rounded transition
    ${
      item.quantity === 1
        ? "hover:bg-orange-500 hover:text-white"
        : "hover:bg-gray-100"
    }`}
              >
                {item.quantity === 1 ? "🗑️" : "-"}
              </button>

              <span className="w-6 text-center font-medium">
                {item.quantity}
              </span>

              {/* PLUS */}
              <button
                onClick={() => addToCart(item)}
                className="w-8 h-8 flex items-center justify-center border rounded transition 
                           hover:bg-orange-600 hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>{total} €</span>
        </div>

        <div className="flex justify-between text-sm mb-4">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        <div className="flex justify-between font-semibold text-lg mb-6">
          <span>Total</span>
          <span>{total} €</span>
        </div>

        <Link
          to="/checkout"
          className="block text-center bg-orange-600 text-white py-3 rounded-md 
                     hover:bg-orange-500 transition transform hover:scale-[1.02] active:scale-95"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

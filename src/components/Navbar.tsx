import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-xl text-black font-bold tracking-tight">
          📚 TestShelf
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center text-black gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-600 transition">Home</Link>
          <Link to="/products" className="hover:text-gray-600 transition">Products</Link>
          <Link to="/contact" className="text-orange-600 hover:text-orange-600 transition font-medium">
            Contact
          </Link>
          <Link to="/cart" className="relative hover:text-gray-600 transition">
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-4 -right-5 bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800 transition transform hover:scale-105 active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 p-4 mr-1"
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* MOBILE MENU — fuera del div max-w-7xl para que ocupe el 100% del nav */}
      {open && (
        <div className="md:hidden bg-white border-t flex flex-col text-sm font-medium">
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className="px-6 py-4 hover:bg-gray-50 transition"
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/products"
            className="px-6 py-4 hover:bg-gray-50 transition"
          >
            Products
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="px-6 py-4 text-orange-600 hover:bg-gray-50 transition"
          >
            Contact
          </Link>

          {/* Cart: badge contenido dentro del flujo, sin posicionamiento absoluto */}
          <Link
            onClick={() => setOpen(false)}
            to="/cart"
            className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="bg-orange-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Login: padding horizontal para que no toque los bordes */}
          <div className="px-6 py-4">
            <Link
              onClick={() => setOpen(false)}
              to="/login"
              className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
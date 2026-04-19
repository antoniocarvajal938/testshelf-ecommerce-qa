import { books } from "../data/books";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/src/assets/hero.png"
          alt="Books background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Discover stories that
            <span className="text-orange-500"> stay with you</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            From epic fantasy to mind-bending thrillers — find your next
            obsession.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/products"
              className="bg-orange-600 text-white px-8 py-3 rounded-md font-medium 
                   hover:bg-orange-500 transition transform hover:scale-105 active:scale-95"
            >
              Explore Books
            </Link>

            <Link
              to="/contact"
              className="border border-white px-8 py-3 rounded-md font-medium 
                   hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl text-black font-semibold mb-6">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 group">
          {" "}
          {books.slice(0, 8).map((book) => (
            <ProductCard key={book.id} product={book} onAdd={addToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}

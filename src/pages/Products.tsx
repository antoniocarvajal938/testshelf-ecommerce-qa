import { books } from "../data/books";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold mb-6">All Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 group">
        {" "}
        {books.map((book) => (
          <ProductCard key={book.id} product={book} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}

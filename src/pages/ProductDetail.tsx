import { useParams, Link } from 'react-router-dom'
import { books } from '../data/books'
import { useCart } from '../hooks/useCart'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = books.find(b => b.id === Number(id))

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p>Product not found</p>
        <Link to="/" className="text-blue-500">Go back</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Link to="/products" className="text-sm text-gray-500 hover:underline">
        ← Back to products
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Imagen */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-500">
            {product.author}
          </p>

          <p className="text-2xl font-bold">
            {product.price} €
          </p>

          <p className="text-gray-600">
            A captivating book that will immerse you in a unique world full of stories and unforgettable characters.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition transform hover:scale-105 active:scale-95"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
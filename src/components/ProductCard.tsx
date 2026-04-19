import { Link } from 'react-router-dom'

type Product = {
  id: number
  title: string
  price: number
  image: string
  author: string
}

type Props = {
  product: Product
  onAdd: (product: Product) => void
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="group bg-white text-black rounded-2xl overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Imagen */}
      <div className="relative flex items-center justify-center bg-gray-50 h-54">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Botón */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button
            onClick={() => onAdd(product)}
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-orange-600 hover:text-white transition transform hover:scale-105 active:scale-95"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-base leading-tight">
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          {product.author}
        </p>

        <p className="mt-3 font-semibold text-lg">
          {product.price} €
        </p>
      </div>
    </div>
  )
}
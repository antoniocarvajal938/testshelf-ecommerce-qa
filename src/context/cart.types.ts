export type CartItem = {
  id: number
  title: string
  price: number
  image: string
  author: string
  quantity: number
}

export type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number) => void
}
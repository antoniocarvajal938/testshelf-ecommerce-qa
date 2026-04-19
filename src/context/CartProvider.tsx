import { useState, useEffect } from 'react'
import { CartContext } from './cart.context'
import type { CartItem, CartContextType } from './cart.types'

export function CartProvider({ children }: { children: React.ReactNode }) {
  
  // 🧠 Persistencia
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  // 💾 Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // ➕ Añadir producto
  const addToCart: CartContextType['addToCart'] = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // ➖ Reducir cantidad (o eliminar)
  const removeFromCart: CartContextType['removeFromCart'] = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
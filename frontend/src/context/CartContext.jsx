import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (book) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === book.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { ...book, quantity: 1 }]
    })
  }

  const removeFromCart = (bookId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== bookId),
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const increaseQuantity = (bookId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQuantity = (bookId) => {
    setCartItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== bookId) {
          return item
        }

        if (item.quantity <= 1) {
          return []
        }

        return { ...item, quantity: item.quantity - 1 }
      }),
    )
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider.')
  }

  return context
}

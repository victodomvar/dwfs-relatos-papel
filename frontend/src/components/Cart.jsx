import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <section className="cart-panel">
        <div className="cart-summary">
          <div>
            <p className="card-kicker">Carrito vacio</p>
            <h2>Tu seleccion aparecera aqui.</h2>
            <p>
              Todavia no hay libros anadidos. La carga desde detalle se hara en
              el siguiente paso.
            </p>
          </div>
          <Link className="button button-secondary" to="/books">
            Ir al catalogo
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="cart-panel">
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <aside className="cart-summary">
        <div>
          <p className="card-kicker">Resumen</p>
          <h2>{totalItems} item(s) en tu carrito</h2>
          <p>Total estimado: {totalPrice.toFixed(2)} EUR</p>
        </div>

        <div className="cart-summary-actions">
          <Link className="button button-primary" to="/checkout">
            Ir al checkout
          </Link>
          <button type="button" className="button button-secondary" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      </aside>
    </section>
  )
}

export default Cart

import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CheckoutPage() {
  const navigate = useNavigate()
  const { cartItems, totalPrice, clearCart } = useCart()

  const handleConfirmOrder = () => {
    window.alert('Pedido realizado correctamente')
    clearCart()
    navigate('/books')
  }

  if (cartItems.length === 0) {
    return (
      <section className="page page-checkout">
        <span className="eyebrow">Compra</span>
        <h1>CheckoutPage</h1>
        <p className="lead">
          Tu carrito esta vacio. Necesitas anadir al menos un libro antes de
          confirmar un pedido.
        </p>
        <div className="detail-panel">
          <Link className="button button-secondary" to="/books">
            Volver al catalogo
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page page-checkout">
      <span className="eyebrow">Compra</span>
      <h1>CheckoutPage</h1>
      <p className="lead">
        Resumen final del pedido antes de cerrar la compra simulada de Relatos
        de Papel.
      </p>

      <div className="checkout-layout">
        <div className="checkout-list">
          {cartItems.map((item) => {
            const subtotal = item.price * item.quantity

            return (
              <article key={item.id} className="checkout-item">
                <div className="checkout-item-copy">
                  <p className="card-kicker">{item.category || 'Libro'}</p>
                  <h2>{item.title}</h2>
                  <p>Precio: {item.price.toFixed(2)} EUR</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <p className="checkout-subtotal">
                  Subtotal: {subtotal.toFixed(2)} EUR
                </p>
              </article>
            )
          })}
        </div>

        <aside className="checkout-summary">
          <div>
            <p className="card-kicker">Resumen final</p>
            <h2>Total del pedido</h2>
            <p className="checkout-total">{totalPrice.toFixed(2)} EUR</p>
          </div>

          <div className="checkout-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={handleConfirmOrder}
            >
              Confirmar pedido
            </button>
            <Link className="button button-secondary" to="/books">
              Seguir comprando
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default CheckoutPage

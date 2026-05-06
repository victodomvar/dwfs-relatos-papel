import Cart from '../components/Cart'

function CheckoutPage() {
  return (
    <section className="page">
      <span className="eyebrow">Compra</span>
      <h1>CheckoutPage</h1>
      <p className="lead">
        Vista protegida para revisar el carrito antes de conectar el flujo real
        de compra y pago.
      </p>

      <Cart />
    </section>
  )
}

export default CheckoutPage

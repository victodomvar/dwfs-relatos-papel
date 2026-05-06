function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const subtotal = (item.price * item.quantity).toFixed(2)

  return (
    <article className="cart-item">
      <div className="cart-item-copy">
        <p className="card-kicker">{item.author || item.category || 'Libro'}</p>
        <h2>{item.title}</h2>
        <p>{item.price.toFixed(2)} EUR por unidad</p>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-controls" aria-label={`Cantidad de ${item.title}`}>
          <button
            type="button"
            className="quantity-button"
            onClick={() => onDecrease(item.id)}
          >
            -
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button
            type="button"
            className="quantity-button"
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
        </div>

        <p className="cart-subtotal">{subtotal} EUR</p>

        <button
          type="button"
          className="button button-secondary"
          onClick={() => onRemove(item.id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  )
}

export default CartItem

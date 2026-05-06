function OrderList({ orders }) {
  if (orders.length === 0) {
    return (
      <div className="empty-state">
        <p className="card-kicker">Sin pedidos</p>
        <h2>Todavia no hay compras registradas para este usuario.</h2>
        <p>Cuando existan pedidos, apareceran aqui con su detalle.</p>
      </div>
    )
  }

  return (
    <div className="order-list">
      {orders.map((order) => (
        <article key={order.id} className="order-card">
          <div className="order-card-header">
            <div>
              <p className="card-kicker">{order.status}</p>
              <h2>{order.id}</h2>
            </div>
            <div className="order-meta">
              <p>Fecha: {order.date}</p>
              <p>Total: {order.total.toFixed(2)} EUR</p>
            </div>
          </div>

          <div className="order-items">
            {order.items.map((item) => (
              <div key={`${order.id}-${item.bookId}`} className="order-item-row">
                <p className="order-item-title">{item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: {item.price.toFixed(2)} EUR</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default OrderList

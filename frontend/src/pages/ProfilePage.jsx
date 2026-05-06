import { Link } from 'react-router-dom'
import OrderList from '../components/OrderList'
import { useAuth } from '../context/AuthContext'
import { orders } from '../mocks/orders'

function ProfilePage() {
  const { user } = useAuth()
  const recentOrders = orders
    .filter((order) => order.userId === user.id)
    .slice(0, 5)

  return (
    <section className="page page-profile">
      <span className="eyebrow">Cuenta</span>
      <h1>Mi perfil</h1>
      <p className="lead">
        Datos del usuario autenticado y resumen de sus ultimos pedidos en
        Relatos de Papel.
      </p>

      <div className="profile-layout">
        <aside className="profile-card">
          {user.avatarUrl ? (
            <img
              className="profile-avatar"
              src={user.avatarUrl}
              alt={`Avatar de ${user.name}`}
            />
          ) : null}

          <div className="profile-copy">
            <p className="card-kicker">Usuario autenticado</p>
            <h2>
              {user.name} {user.surname}
            </h2>
            <p>
              <strong>Nombre:</strong> {user.name}
            </p>
            <p>
              <strong>Apellidos:</strong> {user.surname}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Direccion:</strong> {user.address}
            </p>
          </div>
        </aside>

        <div className="profile-orders">
          <div className="profile-orders-header">
            <div>
              <p className="card-kicker">Ultimos 5 pedidos</p>
              <h2>Historial reciente</h2>
            </div>
            <Link className="button button-secondary" to="/books">
              Volver al catalogo
            </Link>
          </div>

          <OrderList orders={recentOrders} />
        </div>
      </div>
    </section>
  )
}

export default ProfilePage

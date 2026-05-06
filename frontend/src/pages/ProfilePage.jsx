import { useAuth } from '../context/AuthContext'

function ProfilePage() {
  const { user } = useAuth()

  return (
    <section className="page">
      <span className="eyebrow">Cuenta</span>
      <h1>ProfilePage</h1>
      <p className="lead">
        Espacio preparado para datos del usuario, pedidos y preferencias cuando
        exista autenticacion.
      </p>

      <div className="detail-panel">
        <p>
          <strong>Nombre:</strong> {user.name} {user.surname}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Direccion:</strong> {user.address}
        </p>
      </div>
    </section>
  )
}

export default ProfilePage

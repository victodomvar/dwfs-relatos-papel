import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page page-not-found">
      <span className="eyebrow">404</span>
      <h1>NotFoundPage</h1>
      <p className="lead">
        La ruta solicitada no existe dentro de la aplicacion actual.
      </p>
      <Link className="button button-primary" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage

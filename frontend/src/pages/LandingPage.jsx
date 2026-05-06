import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <section className="page page-hero page-landing">
      <span className="eyebrow">SPA base</span>
      <h1>Historias que merecen quedarse en tu estanteria.</h1>
      <p className="lead">
        Esta landing presenta la propuesta de Relatos de Papel y sirve como
        punto de entrada a catalogo, perfil y checkout.
      </p>
      <div className="actions">
        <Link className="button button-primary" to="/books">
          Ver catalogo
        </Link>
        <Link className="button button-secondary" to="/login">
          Iniciar sesion
        </Link>
      </div>
    </section>
  )
}

export default LandingPage

import { Link } from 'react-router-dom'

const navigationLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/books', label: 'Catalogo' },
  { to: '/checkout', label: 'Checkout' },
  { to: '/profile', label: 'Perfil' },
  { to: '/login', label: 'Acceder' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="brand-block">
        <Link className="brand-mark" to="/">
          Relatos de Papel
        </Link>
        <p className="brand-copy">
          Libreria digital para descubrir historias con una experiencia simple.
        </p>
      </div>

      <nav className="site-nav" aria-label="Principal">
        {navigationLinks.map((link) => (
          <Link key={link.to} className="nav-link" to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header

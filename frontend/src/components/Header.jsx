import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const navigationLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/books', label: 'Catalogo' },
  { to: '/checkout', label: 'Checkout' },
]

function Header() {
  const { user, isAuthenticated, logout } = useAuth()
  const { totalItems } = useCart()

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
            {link.to === '/checkout' ? `${link.label} (${totalItems})` : link.label}
          </Link>
        ))}

        {isAuthenticated ? (
          <>
            <Link className="nav-link" to="/profile">
              {user.name}
            </Link>
            <button type="button" className="nav-button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header

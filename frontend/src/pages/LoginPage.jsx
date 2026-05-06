import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { mockUser } from '../mocks/user'

function LoginPage() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState(mockUser.email)
  const [password, setPassword] = useState(mockUser.password)
  const [errorMessage, setErrorMessage] = useState('')

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrorMessage('')

    try {
      login(email, password)
      const redirectTarget = location.state?.from?.pathname || '/profile'
      navigate(redirectTarget, { replace: true })
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <section className="page">
      <span className="eyebrow">Acceso</span>
      <h1>LoginPage</h1>
      <p className="lead">
        Inicia sesion con el usuario de prueba para acceder a perfil y checkout
        protegidos por el router.
      </p>

      <div className="auth-layout">
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="tu@email.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
              autoComplete="current-password"
              required
            />
          </label>

          {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

          <button type="submit" className="button button-primary">
            Entrar en mi perfil
          </button>
        </form>

        <aside className="detail-panel auth-help">
          <p className="card-kicker">Credenciales de prueba</p>
          <p>
            <strong>Email:</strong> {mockUser.email}
          </p>
          <p>
            <strong>Password:</strong> {mockUser.password}
          </p>
        </aside>
      </div>
    </section>
  )
}

export default LoginPage

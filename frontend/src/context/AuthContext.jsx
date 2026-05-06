import { createContext, useContext, useState } from 'react'
import { mockUser } from '../mocks/user'

const AuthContext = createContext(null)

function sanitizeUser(user) {
  const { password, ...safeUser } = user
  return safeUser
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase()

    if (
      normalizedEmail === mockUser.email.toLowerCase() &&
      password === mockUser.password
    ) {
      const safeUser = sanitizeUser(mockUser)
      setUser(safeUser)
      return safeUser
    }

    throw new Error('Credenciales incorrectas. Revisa el email y la contrasena.')
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider.')
  }

  return context
}

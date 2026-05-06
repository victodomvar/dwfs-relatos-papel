import { useEffect, useState } from 'react'

function readStoredValue(key, initialValue) {
  if (typeof window === 'undefined') {
    return initialValue
  }

  const storedValue = window.localStorage.getItem(key)

  if (storedValue === null) {
    return initialValue
  }

  try {
    return JSON.parse(storedValue)
  } catch {
    return initialValue
  }
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readStoredValue(key, initialValue))

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (value === null) {
      window.localStorage.removeItem(key)
      return
    }

    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage

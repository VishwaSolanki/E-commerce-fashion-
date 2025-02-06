'use client'

import { useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const signUp = (name: string, email: string, password: string) => {
    // In a real app, you would make an API call to create the user
    const newUser = { id: Date.now().toString(), name, email }
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)
  }

  const signIn = (email: string, password: string) => {
    // In a real app, you would make an API call to authenticate the user
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user.email === email) {
        setUser(user)
        return true
      }
    }
    return false
  }

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return { user, signUp, signIn, signOut }
}


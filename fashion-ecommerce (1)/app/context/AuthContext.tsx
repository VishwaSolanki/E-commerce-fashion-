'use client'

import React, { createContext, useContext } from 'react'
import { useAuth } from '../hooks/useAuth'

interface AuthContextType {
  user: { id: string; name: string; email: string } | null
  signUp: (name: string, email: string, password: string) => void
  signIn: (email: string, password: string) => boolean
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}


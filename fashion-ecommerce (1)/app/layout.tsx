"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}


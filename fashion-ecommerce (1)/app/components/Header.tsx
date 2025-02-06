"use client"

import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"
import { useCart } from "../context/CartContext"
import { useAuth } from "../hooks/useAuth"

const Header = () => {
  const { cartItems } = useCart()
  const { user } = useAuth()

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          FashionStore
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-300 transition duration-300">
                Products
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="hover:text-yellow-300 transition duration-300 relative">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-300 text-purple-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <span className="hover:text-yellow-300 transition duration-300">Hi, {user.name}</span>
          ) : (
            <Link href="/signin" className="hover:text-yellow-300 transition duration-300">
              <User size={24} />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header


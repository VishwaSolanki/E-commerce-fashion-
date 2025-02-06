"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import { useCart } from "../context/CartContext"
import { useAuth } from "../hooks/useAuth"
import Link from "next/link"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (!user) {
      router.push("/signin")
      return
    }
    setIsCheckingOut(true)
  }

  const handlePayment = () => {
    alert("Payment processed successfully!")
    clearCart()
    setIsCheckingOut(false)
    router.push("/thank-you")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">Your Cart</h1>
          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Your cart is empty.</p>
              <Link
                href="/products"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-200 py-4"
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold text-purple-700">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <p className="text-gray-500 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 text-gray-800 px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-700 font-semibold mb-2">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-purple-800">Total: ${totalPrice.toFixed(2)}</h3>
                {isCheckingOut ? (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Shipping Information</h4>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        handlePayment()
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
                      >
                        Process Payment
                      </button>
                    </form>
                  </div>
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
                  >
                    Proceed to Checkout
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}


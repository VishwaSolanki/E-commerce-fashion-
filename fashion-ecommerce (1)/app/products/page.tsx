"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import { useCart, type CartItem } from "../context/CartContext"
import AddToCartModal from "../components/AddToCartModal"
import { useRouter } from "next/navigation"

const products = [
  {
    id: 1,
    name: "Summer Dress",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A light and breezy summer dress perfect for warm days.",
  },
  {
    id: 2,
    name: "Casual Shirt",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A comfortable and stylish casual shirt for everyday wear.",
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "Classic denim jeans that never go out of style.",
  },
  {
    id: 4,
    name: "Sneakers",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "Comfortable and stylish sneakers for all-day wear.",
  },
  {
    id: 5,
    name: "Leather Bag",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A high-quality leather bag to complement any outfit.",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "Stylish sunglasses to protect your eyes and enhance your look.",
  },
  {
    id: 7,
    name: "Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A sophisticated watch to keep you on time and in style.",
  },
  {
    id: 8,
    name: "Scarf",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A versatile scarf to add a touch of elegance to any outfit.",
  },
  {
    id: 9,
    name: "Formal Dress",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1596783074918-c84cb1bd5d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "An elegant formal dress for special occasions.",
  },
  {
    id: 10,
    name: "Winter Coat",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A warm and stylish coat for cold winter days.",
  },
  {
    id: 11,
    name: "Running Shoes",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "High-performance running shoes for athletes and enthusiasts.",
  },
  {
    id: 12,
    name: "Leather Wallet",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "A sleek and durable leather wallet for everyday use.",
  },
]

export default function ProductsPage() {
  const { addToCart } = useCart()
  const [addedItem, setAddedItem] = useState<CartItem | null>(null)
  const router = useRouter()

  const handleAddToCart = (product: Omit<CartItem, "quantity">) => {
    addToCart(product)
    setAddedItem({ ...product, quantity: 1 })
    router.push("/cart")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-purple-700">{product.name}</h2>
                  <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                  <p className="text-gray-500 mb-4 h-12 overflow-hidden">{product.description}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {addedItem && <AddToCartModal item={addedItem} onClose={() => setAddedItem(null)} />}
    </div>
  )
}


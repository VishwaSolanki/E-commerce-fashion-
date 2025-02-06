import Image from "next/image"
import Link from "next/link"
import type { CartItem } from "../hooks/useCart"

interface AddToCartModalProps {
  item: CartItem
  onClose: () => void
}

export default function AddToCartModal({ item, onClose }: AddToCartModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Item Added to Cart</h2>
        <div className="flex items-center mb-4">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={100}
            height={100}
            className="w-24 h-24 object-cover rounded"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-purple-700">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <div className="flex justify-between">
          <Link
            href="/cart"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
          >
            View Cart
          </Link>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}


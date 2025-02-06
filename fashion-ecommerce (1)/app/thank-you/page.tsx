import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-purple-100 to-pink-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-purple-800">Thank You for Your Purchase!</h1>
          <p className="text-gray-600 mb-6">Your order has been successfully processed.</p>
          <Link href="/products" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300">
            Continue Shopping
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}


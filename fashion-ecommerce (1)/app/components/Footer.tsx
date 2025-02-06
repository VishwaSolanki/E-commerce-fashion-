import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">FashionStore is your one-stop destination for trendy and affordable fashion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-800">FAQ</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-gray-800">Returns & Exchanges</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-gray-800">Shipping Information</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/categories" className="text-gray-600 hover:text-gray-800">Categories</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-gray-800">All Products</Link></li>
              <li><Link href="/sale" className="text-gray-600 hover:text-gray-800">Sale Items</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">&copy; 2023 FashionStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


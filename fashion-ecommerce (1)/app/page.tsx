import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

const featuredProducts = [
  { id: 1, name: 'Summer Dress', price: 59.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 2, name: 'Casual Shirt', price: 39.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'Denim Jeans', price: 79.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 4, name: 'Sneakers', price: 89.99, image: '/placeholder.svg?height=300&width=300' },
]

const categories = [
  { id: 1, name: 'Women\'s Fashion', image: '/placeholder.svg?height=400&width=600' },
  { id: 2, name: 'Men\'s Fashion', image: '/placeholder.svg?height=400&width=600' },
  { id: 3, name: 'Accessories', image: '/placeholder.svg?height=400&width=600' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Collection 2023</h1>
                <p className="text-xl mb-6">Discover the latest trends in fashion</p>
                <Link href="/products" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
                  Shop Now
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image src="/placeholder.svg?height=400&width=600" alt="Summer Collection" width={600} height={400} className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <button className="mt-4 w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="relative overflow-hidden rounded-lg shadow-md">
                  <Image src={category.image} alt={category.name} width={600} height={400} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                  <Link href={`/categories/${category.id}`} className="absolute inset-0" aria-label={`Shop ${category.name}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


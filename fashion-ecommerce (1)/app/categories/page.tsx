import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { id: 1, name: 'Women\'s Fashion', image: '/placeholder.svg?height=400&width=600' },
  { id: 2, name: 'Men\'s Fashion', image: '/placeholder.svg?height=400&width=600' },
  { id: 3, name: 'Accessories', image: '/placeholder.svg?height=400&width=600' },
  { id: 4, name: 'Shoes', image: '/placeholder.svg?height=400&width=600' },
  { id: 5, name: 'Bags', image: '/placeholder.svg?height=400&width=600' },
  { id: 6, name: 'Jewelry', image: '/placeholder.svg?height=400&width=600' },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">Shop by Category</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                <Image src={category.image} alt={category.name} width={600} height={400} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-purple-700">{category.name}</h2>
                  <Link href={`/categories/${category.id}`} className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300">
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


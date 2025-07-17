import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/button'
import type { Product } from '@/types'

// Mock data for featured products
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Summer Dress',
    description: 'A beautiful flowing dress perfect for summer occasions',
    price: 89.99,
    originalPrice: 129.99,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'women',
    subcategory: 'dresses',
    brand: 'StyleCo',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Pink', 'White'],
    inStock: true,
    stockCount: 15,
    rating: 4.5,
    reviewCount: 128,
    tags: ['new', 'trending'],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket that goes with everything',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'women',
    subcategory: 'jackets',
    brand: 'DenimCo',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    inStock: true,
    stockCount: 8,
    rating: 4.8,
    reviewCount: 95,
    tags: ['classic'],
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10'
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    description: 'Soft, comfortable cotton t-shirt for everyday wear',
    price: 29.99,
    originalPrice: 39.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'men',
    subcategory: 'shirts',
    brand: 'ComfortWear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    inStock: true,
    stockCount: 25,
    rating: 4.3,
    reviewCount: 67,
    tags: ['bestseller'],
    createdAt: '2024-01-12',
    updatedAt: '2024-01-12'
  },
  {
    id: '4',
    name: 'Stylish Sneakers',
    description: 'Comfortable and trendy sneakers for active lifestyle',
    price: 119.99,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'shoes',
    subcategory: 'sneakers',
    brand: 'SportStyle',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Red'],
    inStock: true,
    stockCount: 12,
    rating: 4.6,
    reviewCount: 203,
    tags: ['trending', 'sport'],
    createdAt: '2024-01-08',
    updatedAt: '2024-01-08'
  },
  {
    id: '5',
    name: 'Leather Handbag',
    description: 'Elegant leather handbag perfect for any occasion',
    price: 159.99,
    originalPrice: 199.99,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'accessories',
    subcategory: 'bags',
    brand: 'LuxeBags',
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Tan'],
    inStock: true,
    stockCount: 6,
    rating: 4.9,
    reviewCount: 45,
    tags: ['luxury', 'new'],
    createdAt: '2024-01-14',
    updatedAt: '2024-01-14'
  },
  {
    id: '6',
    name: 'Casual Chinos',
    description: 'Comfortable chino pants for casual and semi-formal wear',
    price: 69.99,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'men',
    subcategory: 'pants',
    brand: 'CasualFit',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    inStock: true,
    stockCount: 18,
    rating: 4.4,
    reviewCount: 89,
    tags: ['versatile'],
    createdAt: '2024-01-11',
    updatedAt: '2024-01-11'
  },
  {
    id: '7',
    name: 'Silk Scarf',
    description: 'Luxurious silk scarf to elevate any outfit',
    price: 49.99,
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'accessories',
    subcategory: 'scarves',
    brand: 'SilkLux',
    sizes: ['One Size'],
    colors: ['Floral', 'Geometric', 'Solid'],
    inStock: false,
    stockCount: 0,
    rating: 4.7,
    reviewCount: 34,
    tags: ['luxury', 'gift'],
    createdAt: '2024-01-09',
    updatedAt: '2024-01-09'
  },
  {
    id: '8',
    name: 'Winter Coat',
    description: 'Warm and stylish winter coat for cold weather',
    price: 199.99,
    originalPrice: 249.99,
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'women',
    subcategory: 'coats',
    brand: 'WarmStyle',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Camel', 'Navy'],
    inStock: true,
    stockCount: 9,
    rating: 4.8,
    reviewCount: 156,
    tags: ['winter', 'warm'],
    createdAt: '2024-01-13',
    updatedAt: '2024-01-13'
  }
]

export function FeaturedProducts() {
  const handleAddToCart = (product: Product) => {
    console.log('Add to cart:', product.name)
    // TODO: Implement cart functionality
  }

  const handleAddToWishlist = (product: Product) => {
    console.log('Add to wishlist:', product.name)
    // TODO: Implement wishlist functionality
  }

  const handleQuickView = (product: Product) => {
    console.log('Quick view:', product.name)
    // TODO: Implement quick view modal
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of trending items that are loved by our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
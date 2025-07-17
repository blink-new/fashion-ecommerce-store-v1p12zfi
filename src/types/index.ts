export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  subcategory?: string
  brand: string
  sizes: string[]
  colors: string[]
  inStock: boolean
  stockCount: number
  rating: number
  reviewCount: number
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface CartItem {
  id: string
  productId: string
  userId: string
  quantity: number
  size: string
  color: string
  createdAt: string
}

export interface WishlistItem {
  id: string
  productId: string
  userId: string
  createdAt: string
}

export interface User {
  id: string
  email: string
  displayName?: string
  avatar?: string
  createdAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  parentId?: string
}

export interface FilterOptions {
  categories: string[]
  brands: string[]
  priceRange: [number, number]
  sizes: string[]
  colors: string[]
  rating: number
  sortBy: 'newest' | 'price-low' | 'price-high' | 'rating' | 'popular'
}
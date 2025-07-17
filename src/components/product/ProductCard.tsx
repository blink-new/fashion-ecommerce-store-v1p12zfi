import { useState } from 'react'
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
  onAddToWishlist?: (product: Product) => void
  onQuickView?: (product: Product) => void
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  onAddToWishlist, 
  onQuickView 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted)
    onAddToWishlist?.(product)
  }

  return (
    <Card 
      className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {!product.inStock && (
              <Badge variant="destructive" className="text-xs">
                Out of Stock
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-red-500 text-white text-xs">
                -{discountPercentage}%
              </Badge>
            )}
            {product.tags.includes('new') && (
              <Badge className="bg-green-500 text-white text-xs">
                New
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-200 ${
              isWishlisted ? 'text-red-500' : 'text-gray-600'
            }`}
            onClick={(e) => {
              e.stopPropagation()
              handleAddToWishlist()
            }}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>

          {/* Quick Actions - Show on Hover */}
          {isHovered && (
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="sm"
                className="flex-1 bg-black text-white hover:bg-gray-800"
                onClick={(e) => {
                  e.stopPropagation()
                  onAddToCart?.(product)
                }}
                disabled={!product.inStock}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white"
                onClick={(e) => {
                  e.stopPropagation()
                  onQuickView?.(product)
                }}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Image Dots - Show if multiple images */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex(index)
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          
          {/* Name */}
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-black transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-black">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Available Colors */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1 mt-2">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500 ml-1">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
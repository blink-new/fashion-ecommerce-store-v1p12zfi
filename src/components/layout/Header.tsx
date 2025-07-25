import { useState } from 'react'
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'Women',
    'Men', 
    'Kids',
    'Beauty',
    'Home',
    'Sale'
  ]

  const navigationItems = [
    { id: 'home', label: 'Fashion Store', path: 'home' },
    { id: 'n8n', label: 'n8n Workflow', path: 'n8n' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Free shipping on orders over $50 | Use code: FASHION20 for 20% off
      </div>

      {/* Main Header */}
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Logo & Navigation */}
          <div className="flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.path)}
                className={`text-lg font-bold transition-colors ${
                  currentPage === item.path 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Navigation - Categories (only on home page) */}
          {currentPage === 'home' && (
            <nav className="hidden md:flex items-center space-x-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-gray-700 hover:text-black font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </nav>
          )}

          {/* Search Bar - Desktop (only on home page) */}
          {currentPage === 'home' && (
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search - Mobile (only on home page) */}
            {currentPage === 'home' && (
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
            )}

            {/* Shopping buttons (only on home page) */}
            {currentPage === 'home' && (
              <>
                {/* Wishlist */}
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                    2
                  </Badge>
                </Button>

                {/* Cart */}
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-black text-white text-xs">
                    3
                  </Badge>
                </Button>
              </>
            )}

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search (only on home page) */}
        {currentPage === 'home' && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-black focus:ring-black"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container py-4">
            <div className="flex flex-col space-y-4">
              {/* Page Navigation */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.path)
                      setIsMenuOpen(false)
                    }}
                    className={`block text-left font-bold py-2 transition-colors ${
                      currentPage === item.path 
                        ? 'text-black' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              {/* Categories (only show on fashion store page) */}
              {currentPage === 'home' && categories.map((category) => (
                <button
                  key={category}
                  className="text-left text-gray-700 hover:text-black font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
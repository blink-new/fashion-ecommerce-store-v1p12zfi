import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-black text-white py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in Style</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and fashion trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-black border-white"
              />
              <Button className="bg-white text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">FASHION</h3>
            <p className="text-gray-600 mb-4">
              Your destination for the latest fashion trends and timeless style. Quality clothing for every occasion.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-black">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-black mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Women</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Men</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Kids</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Beauty</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-black mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Fashion Store. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <img src="https://via.placeholder.com/40x25/000000/FFFFFF?text=VISA" alt="Visa" className="h-6" />
              <img src="https://via.placeholder.com/40x25/000000/FFFFFF?text=MC" alt="Mastercard" className="h-6" />
              <img src="https://via.placeholder.com/40x25/000000/FFFFFF?text=AMEX" alt="American Express" className="h-6" />
              <img src="https://via.placeholder.com/40x25/000000/FFFFFF?text=PP" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
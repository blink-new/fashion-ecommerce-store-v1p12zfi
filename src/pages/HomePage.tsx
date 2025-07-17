import { HeroSection } from '@/components/home/HeroSection'
import { CategoriesSection } from '@/components/home/CategoriesSection'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
    </div>
  )
}
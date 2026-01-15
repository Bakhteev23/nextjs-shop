'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/lib/store/cart'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
            >
              SHOP
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="/catalog" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Каталог
              </Link>
              <Link 
                href="/catalog" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Категории
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                О нас
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Поиск"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              <button 
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Корзина"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Меню"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-100">
              <Link 
                href="/catalog" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link 
                href="/catalog" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Категории
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </Link>
            </div>
          )}
        </nav>
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

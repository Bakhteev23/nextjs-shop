'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart } from 'lucide-react'
import { Product } from '@/types'
import { urlForImage } from '@/lib/sanity/client'
import { useCartStore } from '@/lib/store/cart'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const imageUrl = product.images[0] 
    ? urlForImage(product.images[0]).width(400).height(400).url() 
    : '/placeholder.jpg'

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
  }

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <Link href={`/product/${product.slug.current}`}>
      <div className="group card hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded-lg text-sm font-bold">
              -{discount}%
            </div>
          )}

          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-gray-900/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
              Нет в наличии
            </div>
          )}

          <button 
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
            onClick={(e) => {
              e.preventDefault()
            }}
            aria-label="В избранное"
          >
            <Heart className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice.toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>
            </div>

            {product.inStock && (
              <button
                onClick={handleAddToCart}
                className="btn btn-primary p-3"
                aria-label="Добавить в корзину"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

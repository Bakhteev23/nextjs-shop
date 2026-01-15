import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: {
    current: string
  }
  description?: string
  image?: SanityImageSource
}

export interface Product {
  _id: string
  _type: 'product'
  title: string
  slug: {
    current: string
  }
  description: string
  price: number
  oldPrice?: number
  category: Category
  images: SanityImageSource[]
  inStock: boolean
  featured: boolean
  tags?: string[]
}

export interface Settings {
  _id: string
  _type: 'settings'
  siteName: string
  siteDescription?: string
  logo?: SanityImageSource
  currency: string
  email?: string
  phone?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

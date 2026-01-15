import { client } from './client'
import { Product, Category, Settings } from '@/types'

export async function getProducts(): Promise<Product[]> {
  try {
    const query = `*[_type == "product"] | order(_createdAt desc) {
      _id,
      _type,
      title,
      slug,
      description,
      price,
      oldPrice,
      category->{
        _id,
        title,
        slug
      },
      images,
      inStock,
      featured,
      tags
    }`
    
    return await client.fetch(query)
  } catch (error) {
    console.warn('Sanity not configured or unavailable, returning empty products')
    return []
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const query = `*[_type == "product" && featured == true] | order(_createdAt desc) [0...6] {
      _id,
      _type,
      title,
      slug,
      description,
      price,
      oldPrice,
      category->{
        _id,
        title,
        slug
      },
      images,
      inStock,
      featured,
      tags
    }`
    
    return await client.fetch(query)
  } catch (error) {
    console.warn('Sanity not configured or unavailable, returning empty products')
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      description,
      price,
      oldPrice,
      category->{
        _id,
        title,
        slug
      },
      images,
      inStock,
      featured,
      tags
    }`
    
    return await client.fetch(query, { slug })
  } catch (error) {
    console.warn('Sanity not configured or unavailable')
    return null
  }
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  try {
    const query = `*[_type == "product" && category->slug.current == $categorySlug] | order(_createdAt desc) {
      _id,
      _type,
      title,
      slug,
      description,
      price,
      oldPrice,
      category->{
        _id,
        title,
        slug
      },
      images,
      inStock,
      featured,
      tags
    }`
    
    return await client.fetch(query, { categorySlug })
  } catch (error) {
    console.warn('Sanity not configured or unavailable, returning empty products')
    return []
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const query = `*[_type == "category"] | order(title asc) {
      _id,
      _type,
      title,
      slug,
      description,
      image
    }`
    
    return await client.fetch(query)
  } catch (error) {
    console.warn('Sanity not configured or unavailable, returning empty categories')
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const query = `*[_type == "category" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      description,
      image
    }`
    
    return await client.fetch(query, { slug })
  } catch (error) {
    console.warn('Sanity not configured or unavailable')
    return null
  }
}

export async function getSettings(): Promise<Settings | null> {
  try {
    const query = `*[_type == "settings"][0] {
      _id,
      _type,
      siteName,
      siteDescription,
      logo,
      currency,
      email,
      phone
    }`
    
    return await client.fetch(query)
  } catch (error) {
    console.warn('Sanity not configured or unavailable')
    return null
  }
}

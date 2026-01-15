import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import { getProductBySlug, getProducts } from '@/lib/sanity/queries';
import { urlForImage } from '@/lib/sanity/client';
import AddToCartButton from '@/components/catalog/AddToCartButton';

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

interface ProductPageProps {geProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Back Button */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Вернуться к каталогу
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-75 transition-opacity"
                  >
                    <Image
                      src={urlForImage(image).url()}
                      alt={`${product.title} - изображение ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}product.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-75 transition-opacity"
                  >
                    <Image
                      src={urlForImage(image).url()}
                      alt={`${product.name} - изображение ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            {/* Category */}
            {product.category && (
              <Link
                href={`/catalog?category=${product.category.slug.current}`}
                className="inline-block text-sm font-medium text-primary hover:text-primary/80 mb-4"
              >
                {product.category.title}
              </Link>
            )}

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <p className="text-4xl font-bold text-primary">
                {product.price.toLocaleString('ru-RU')} ₽
              </p>
              {product.oldPrice && product.oldPrice > product.price && (
                <p className="text-xl text-gray-400 line-through">
                  {product.oldPrice.toLocaleString('ru-RU')} ₽
                </p>
              )}
            </div>         </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-8">
              <div className={`h-2 w-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`text-sm font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </span>
            </div>

            {/* Description */}
            {product.description && (
              <div className="prose prose-gray mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Описание</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <AddToCartButton product={product} className="flex-1" />
              <button className="btn-secondary w-12 h-12 p-0 flex items-center justify-center">
                <HeartIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-gray-600">Гарантия возврата денег</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-gray-600">Быстрая доставка по всей стране</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-gray-600">Оригинальная продукция</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

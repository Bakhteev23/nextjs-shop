import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { getFeaturedProducts } from '@/lib/sanity/queries';
import ProductGrid from '@/components/catalog/ProductGrid';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <SparklesIcon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Новая коллекция уже здесь</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Стиль, который вдохновляет
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Откройте для себя уникальные товары, созданные с любовью к деталям. 
              Качество, дизайн и доступность в одном месте.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className="btn-primary group">
                Перейти в каталог
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <TruckIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Быстрая доставка</h3>
                <p className="text-sm text-gray-600">Доставим ваш заказ в течение 1-3 дней</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Гарантия качества</h3>
                <p className="text-sm text-gray-600">100% гарантия возврата денег</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <SparklesIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Эксклюзивный дизайн</h3>
                <p className="text-sm text-gray-600">Уникальные товары от лучших брендов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Избранные товары
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Специально отобранные товары, которые понравятся вам больше всего
              </p>
            </div>
            <ProductGrid products={featuredProducts} />
            <div className="text-center mt-12">
              <Link href="/catalog" className="btn-primary inline-flex items-center gap-2">
                Посмотреть все товары
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных покупателей
          </p>
          <Link href="/catalog" className="btn-secondary bg-white text-primary hover:bg-gray-50 inline-flex items-center gap-2">
            Начать покупки
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

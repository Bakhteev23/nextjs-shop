import Link from 'next/link';
import { SparklesIcon, HeartIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              О нашем магазине
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Мы создаём уникальный опыт онлайн-шопинга, объединяя качественные товары, 
              современные технологии и внимательное отношение к каждому клиенту.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Наша история</h2>
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Мы начали свой путь с простой идеи: сделать качественные товары доступными для всех. 
                Каждый продукт в нашем каталоге тщательно отобран и проверен на соответствие высоким стандартам качества.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Сегодня мы гордимся тем, что помогаем тысячам покупателей находить именно то, 
                что им нужно, делая процесс покупки простым и приятным.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <SparklesIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Качество</h3>
              <p className="text-gray-600">
                Каждый товар проходит строгий контроль качества перед попаданием в каталог
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <HeartIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Забота</h3>
              <p className="text-gray-600">
                Мы внимательны к каждому клиенту и всегда готовы помочь с выбором
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TruckIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Скорость</h3>
              <p className="text-gray-600">
                Быстрая обработка заказов и доставка в кратчайшие сроки
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Надёжность</h3>
              <p className="text-gray-600">
                Гарантируем безопасность покупок и защиту ваших данных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нам</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Откройте для себя мир качественных товаров и безупречного сервиса
            </p>
            <Link href="/catalog" className="btn-secondary bg-white text-primary hover:bg-gray-50">
              Начать покупки
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

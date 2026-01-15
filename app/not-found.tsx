import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Страница не найдена</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          К сожалению, страница которую вы ищете не существует или была перемещена
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeftIcon className="h-5 w-5" />
            На главную
          </Link>
          <Link href="/catalog" className="btn-secondary">
            Перейти в каталог
          </Link>
        </div>
      </div>
    </div>
  );
}

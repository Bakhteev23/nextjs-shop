import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
              SHOP
            </h3>
            <p className="text-gray-600 text-sm">
              Современный интернет-магазин с лучшими товарами по выгодным ценам
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Покупателям</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Каталог товаров
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Возврат товара
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone className="w-4 h-4 text-primary-600" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-primary-600" />
                info@shop.ru
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-primary-600" />
                Москва, ул. Примерная, 1
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} SHOP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

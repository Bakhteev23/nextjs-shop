'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cart';
import { urlForImage } from '@/lib/sanity/client';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-2xl">
                    {/* Header */}
                    <div className="border-b border-gray-200 px-6 py-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-2xl font-bold text-gray-900">
                          Корзина
                        </Dialog.Title>
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          onClick={onClose}
                        >
                          <span className="sr-only">Закрыть</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      {items.length > 0 && (
                        <p className="mt-2 text-sm text-gray-500">
                          {items.length} {items.length === 1 ? 'товар' : 'товара'}
                        </p>
                      )}
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                      {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <ShoppingBagIcon className="h-24 w-24 text-gray-300 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Корзина пуста
                          </h3>
                          <p className="text-gray-500 mb-6">
                            Добавьте товары, чтобы начать покупки
                          </p>
                          <button
                            onClick={onClose}
                            className="btn-primary"
                          >
                            Перейти к покупкам
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {items.map((item) => (
                            <div key={item._id} className="flex gap-4 group">
                              {/* Product Image */}
                              <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                {item.image && (
                                  <Image
                                    src={urlForImage(item.image).url()}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                  />
                                )}
                              </div>

                              {/* Product Info */}
                              <div className="flex-1 flex flex-col">
                                <div className="flex justify-between">
                                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                                    {item.name}
                                  </h3>
                                  <button
                                    onClick={() => removeItem(item._id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                                  >
                                    <TrashIcon className="h-5 w-5" />
                                  </button>
                                </div>

                                <p className="mt-1 text-sm text-gray-500">
                                  {item.price.toLocaleString('ru-RU')} ₽
                                </p>

                                {/* Quantity Controls */}
                                <div className="mt-auto flex items-center gap-2">
                                  <button
                                    onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                                    className="h-8 w-8 rounded-md border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center"
                                  >
                                    <span className="text-lg font-medium">−</span>
                                  </button>
                                  <span className="text-sm font-medium w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                    className="h-8 w-8 rounded-md border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center"
                                  >
                                    <span className="text-lg font-medium">+</span>
                                  </button>
                                  <span className="ml-auto text-sm font-bold text-gray-900">
                                    {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                      <div className="border-t border-gray-200 px-6 py-6">
                        <div className="flex justify-between text-base font-medium text-gray-900 mb-6">
                          <p>Итого:</p>
                          <p className="text-2xl font-bold text-primary">
                            {total.toLocaleString('ru-RU')} ₽
                          </p>
                        </div>
                        <Link
                          href="/checkout"
                          onClick={onClose}
                          className="btn-primary w-full text-center block"
                        >
                          Оформить заказ
                        </Link>
                        <button
                          onClick={onClose}
                          className="btn-secondary w-full mt-3"
                        >
                          Продолжить покупки
                        </button>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

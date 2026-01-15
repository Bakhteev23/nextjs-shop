'use client';

import { ShoppingBagIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/lib/store/cart';
import { Product } from '@/types';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className = '' }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product.inStock) return;

    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={!product.inStock || added}
      className={`btn-primary ${className} ${
        !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
      } ${added ? 'bg-green-500 hover:bg-green-600' : ''}`}
    >
      {added ? (
        <>
          <CheckIcon className="h-5 w-5" />
          Добавлено
        </>
      ) : (
        <>
          <ShoppingBagIcon className="h-5 w-5" />
          {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
        </>
      )}
    </button>
  );
}

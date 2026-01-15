'use client';

import { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string | null;
  onSelectCategory: (slug: string | null) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Категории</h3>
      <div className="space-y-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
            activeCategory === null
              ? 'bg-primary text-white shadow-md'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span className="font-medium">Все товары</span>
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => onSelectCategory(category.slug.current)}
            className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
              activeCategory === category.slug.current
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="font-medium">{category.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

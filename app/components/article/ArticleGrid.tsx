"use client";

import { useState } from "react";
import ArticleFeedCard from "./ArticleFeedCard";

export default function ArticleGrid({ articles, categories }: { articles: any[], categories: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category_id === selectedCategory);

  return (
    <section>
      {/* Category Filter */}
      <div className="flex flex-wrap flex-row-reverse gap-3 mb-12 justify-center">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
            selectedCategory === 'all' 
              ? 'bg-primary text-white shadow-lg' 
              : 'bg-surface-container-low text-primary hover:bg-surface-container-high'
          }`}
        >
          الكل
        </button>
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              selectedCategory === cat.id 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-surface-container-low text-primary hover:bg-surface-container-high'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map(article => (
          <ArticleFeedCard key={article.id} article={article} />
        ))}
        {filteredArticles.length === 0 && (
          <div className="col-span-full py-20 text-center text-on-surface-variant bg-surface-container-low rounded-3xl">
            <span className="material-symbols-outlined text-5xl mb-4 block">rule</span>
            <p className="text-lg">لا توجد مقالات في هذا التصنيف حالياً</p>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import ArticleFeedCard from "./ArticleFeedCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ArticleBrowser({ 
  initialArticles, 
  categories 
}: { 
  initialArticles: any[], 
  categories: any[] 
}) {
  const searchParams = useSearchParams();
  const serverCategoryId = searchParams.get("category");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(serverCategoryId);

  const isSearching = isFocused || searchQuery.length > 0;

  const filteredArticles = initialArticles.filter(article => {
    const matchesCategory = !activeCategoryId || String(article.category_id) === activeCategoryId;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (article.excerpt && article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search and Filters Header */}
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Search Bar */}
        <div className="relative group">
          <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-secondary transition-colors">search</span>
          <input 
            type="text"
            inputMode="search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن مقال بالعنوان أو الكلمة المفتاحية..."
            className="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary focus:bg-white py-5 pr-14 pl-6 rounded-3xl text-right outline-none transition-all shadow-sm hover:shadow-md font-bold text-primary placeholder:text-primary/20"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 hover:text-red-500 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>

        {/* Categories - Hidden when searching for focus, same as lawyers */}
        <div className={`transition-all duration-500 overflow-hidden ${isSearching ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-40 opacity-100'}`}>
          <div className="flex flex-row-reverse gap-3 overflow-x-auto no-scrollbar pb-2 px-2">
            <button 
              onClick={() => setActiveCategoryId(null)}
              className={`whitespace-nowrap px-8 py-3 rounded-2xl text-sm font-black transition-all duration-300 shadow-sm active:scale-95 ${!activeCategoryId ? 'bg-secondary text-white shadow-lg shadow-secondary/20 scale-105' : 'bg-surface-container-high text-primary/60 hover:bg-secondary/10'}`}
            >
              الكل
            </button>
            {categories.map((category) => (
              <button 
                key={category.id} 
                onClick={() => setActiveCategoryId(String(category.id))}
                className={`whitespace-nowrap px-8 py-3 rounded-2xl text-sm font-black transition-all duration-300 shadow-sm active:scale-95 ${activeCategoryId === String(category.id) ? 'bg-secondary text-white shadow-lg shadow-secondary/20 scale-105' : 'bg-surface-container-high text-primary/60 hover:bg-secondary/10'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className={`grid transition-all duration-500 ${
        isSearching 
          ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6' 
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      }`}>
        {filteredArticles.map(article => (
          <div key={article.id} className={`transition-all duration-500 ${isSearching ? 'scale-[0.98] md:scale-95' : 'scale-100'}`}>
            <ArticleFeedCard article={article} compact={isSearching} />
          </div>
        ))}
        {filteredArticles.length === 0 && (
          <div className="col-span-full py-20 text-center text-on-surface-variant bg-surface-container-low rounded-3xl animate-fade-in mx-4">
            <span className="material-symbols-outlined text-5xl mb-4 block opacity-20">find_in_page</span>
            <p className="text-xl font-bold">عذراً، لم نجد أي مقالات تطابق بحثك</p>
          </div>
        )}
      </section>
    </div>
  );
}

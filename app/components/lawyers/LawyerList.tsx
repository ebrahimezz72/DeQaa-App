"use client";

import { useState } from "react";
import LawyerCard from "./LawyerCard";

export default function LawyerList({ lawyers, categories, initialCategoryId }: { lawyers: any[], categories: any[], initialCategoryId?: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>(
    initialCategoryId ? Number(initialCategoryId) : 'all'
  );

  const isSearching = isFocused || searchQuery.length > 0;

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesCategory = selectedCategory === 'all' || 
      lawyer.lawyer_categories.some((lc: any) => lc.categories.id === selectedCategory);
    
    const matchesSearch = lawyer.full_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (lawyer.bio && lawyer.bio.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section>
      <div className={`max-w-3xl mx-auto mb-16 space-y-6 transition-all duration-500`}>
        {/* Search Bar */}
        <div className="relative group">
          <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-secondary transition-colors">search</span>
          <input 
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن اسم المحامي أو مجال خبرته..."
            className="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary focus:bg-white py-5 pr-14 pl-6 rounded-3xl text-right outline-none transition-all shadow-sm hover:shadow-md font-black text-primary placeholder:text-primary/20"
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

        {/* Category Filter - Hidden when searching for focus */}
        <div className={`transition-all duration-500 overflow-hidden ${isSearching ? 'max-h-0 opacity-0 pointer-events-none mb-0' : 'max-h-40 opacity-100 mb-6'}`}>
          <div className="flex flex-row-reverse gap-3 overflow-x-auto no-scrollbar pb-2 px-2 mask-fade-edges">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap shadow-sm active:scale-95 ${
                selectedCategory === 'all' 
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20' 
                  : 'bg-white text-primary/60 hover:bg-secondary/5 border border-outline-variant/10'
              }`}
            >
              الكل
            </button>
            {categories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap shadow-sm active:scale-95 ${
                  selectedCategory === cat.id 
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/20' 
                    : 'bg-white text-primary/60 hover:bg-secondary/5 border border-outline-variant/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`grid gap-4 md:gap-8 transition-all duration-500 ${
        isSearching 
          ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' 
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {filteredLawyers.map(lawyer => (
          <div key={lawyer.id} className={`transition-all duration-500 ${isSearching ? 'scale-95' : 'scale-100'}`}>
            <LawyerCard lawyer={lawyer} compact={isSearching} />
          </div>
        ))}
        {filteredLawyers.length === 0 && (
          <div className="col-span-full py-20 text-center text-on-surface-variant bg-surface-container-low rounded-3xl">
            <span className="material-symbols-outlined text-5xl mb-4 block">person_search</span>
            <p className="text-lg">لا يوجد محامين في هذا القسم حالياً</p>
          </div>
        )}
      </div>
    </section>
  );
}

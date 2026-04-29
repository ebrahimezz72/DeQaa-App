import Link from "next/link";

export default function ArticleCategoryFilters({ categories, activeCategoryId }: { categories: any[], activeCategoryId?: string }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-sm font-black text-primary flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-pulse"></span>
          تخصصات قانونية
        </h3>
        {activeCategoryId && (
          <Link href="/articles" className="text-[10px] font-black text-secondary uppercase tracking-widest hover:underline transition-all">
            إعادة تعيين الفلترة
          </Link>
        )}
      </div>
      <div className="flex overflow-x-auto gap-3 no-scrollbar pb-2 px-1">
        {/* "All" Filter */}
        <Link 
          href="/articles"
          className={`whitespace-nowrap px-8 py-2.5 rounded-2xl text-sm font-black transition-all duration-300 ${!activeCategoryId ? 'bg-secondary text-white shadow-lg shadow-secondary/20 scale-105' : 'bg-surface-container-high text-primary/60 hover:bg-secondary/10'}`}
        >
          الكل
        </Link>
        
        {/* Dynamic Category Filters */}
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/articles?category=${category.id}`}
            className={`whitespace-nowrap px-8 py-2.5 rounded-2xl text-sm font-black transition-all duration-300 ${activeCategoryId === String(category.id) ? 'bg-secondary text-white shadow-lg shadow-secondary/20 scale-105' : 'bg-surface-container-high text-primary/60 hover:bg-secondary/10'}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

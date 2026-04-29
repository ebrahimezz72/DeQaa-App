import Link from "next/link";
import Image from "next/image";

export default function PracticeAreas({ categories }: { categories: any[] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-right dir-rtl animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-black text-primary font-headline mb-4">تخصصاتنا <span className="text-secondary">القانونية</span></h2>
        <div className="w-24 h-2 bg-secondary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/lawyers?category=${category.id}`}
            className="bg-white p-4 md:p-7 rounded-2xl md:rounded-[2rem] border border-surface-container-high hover-lift shadow-sm group transition-all duration-500 hover:bg-primary relative overflow-hidden animate-fade-in-up block cursor-pointer"
          >
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary/5 rounded-full group-hover:bg-white/5 transition-colors"></div>
            
            <div className="bg-secondary/10 p-3 md:p-4 rounded-xl w-max mb-4 md:mb-6 group-hover:bg-white/20 flex items-center justify-center relative z-10">
              {category.icon_url?.startsWith('http') ? (
                <Image src={category.icon_url} alt={category.name} width={24} height={24} className="md:w-8 md:h-8 group-hover:brightness-0 group-hover:invert transition-all" />
              ) : (
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl group-hover:text-white">
                  {category.icon_url || 'balance'}
                </span>
              )}
            </div>
            <h3 className="text-base md:text-xl font-black mb-2 md:mb-3 group-hover:text-white relative z-10 leading-tight">{category.name}</h3>
            <p className="text-on-surface-variant text-[10px] md:text-sm font-medium leading-relaxed group-hover:text-white/80 relative z-10 line-clamp-2 md:line-clamp-3">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

export default function CategoryHeader({ category }: { category: any }) {
  return (
    <section className="relative bg-background pt-32 pb-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-secondary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center dir-rtl">
        <div className="animate-fade-in-up">
          <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-secondary/20">
            {category.icon_url?.startsWith('http') ? (
              <Image src={category.icon_url} alt={category.name} width={40} height={40} className="w-10 h-10" />
            ) : (
              <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {category.icon_url || 'gavel'}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 font-headline tracking-tight">
            {category.name}
          </h1>
          
          {category.description && (
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              {category.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

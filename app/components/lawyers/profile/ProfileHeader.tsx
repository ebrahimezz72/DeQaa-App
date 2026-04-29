import Image from "next/image";

export default function ProfileHeader({ lawyer }: { lawyer: any }) {
  const category = lawyer.lawyer_categories?.[0]?.categories?.name || "مستشار قانوني";

  return (
    <section className="relative">
      <div className="h-48 w-full bg-primary relative overflow-hidden">
        <Image 
          fill
          className="object-cover opacity-60" 
          alt="Profile cover" 
          src={lawyer.cover_url || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/40"></div>
      </div>

      <div className="px-6 -mt-16 relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center sm:items-start sm:flex-row-reverse gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-xl border-4 border-surface shadow-xl overflow-hidden bg-surface-container relative">
              <Image 
                fill
                className="object-cover" 
                alt={lawyer.full_name} 
                src={lawyer.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&h=400"}
              />
            </div>
            {lawyer.is_active && (
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-green-500 border-2 border-surface rounded-full"></div>
            )}
          </div>

          <div className="flex-1 text-center sm:text-right pt-4 sm:pt-20">
            <h2 className="text-2xl font-black text-primary mb-1">{lawyer.full_name}</h2>
            <p className="text-secondary font-bold text-sm mb-3">{category}</p>
            <div className="flex flex-wrap justify-center sm:justify-start flex-row-reverse gap-2">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold flex items-center justify-center gap-1 flex-row-reverse">
                <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                ممارس معتمد
              </span>
              <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center justify-center gap-1 flex-row-reverse">
                <span className="material-symbols-outlined text-[14px]">history</span>
                {lawyer.experience_years} عاماً من الخبرة
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

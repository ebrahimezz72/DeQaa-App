import Image from "next/image";
import Link from "next/link";

export default function FeaturedLawyers({ lawyers }: { lawyers: any[] }) {
  return (
    <section className="py-16 bg-surface-container-low">
      <div className="px-6 mb-10 text-right">
        <h2 className="text-3xl font-bold text-primary font-headline">نخبة المحامين</h2>
        <div className="w-16 h-1.5 bg-secondary rounded-full mt-2 inline-block"></div>
      </div>
      <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory no-scrollbar dir-rtl">
        {lawyers.map((lawyer) => (
          <Link 
            key={lawyer.id} 
            href={`/lawyers/${lawyer.id}`}
            className="min-w-[280px] snap-center bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="relative h-64">
              <Image 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={lawyer.full_name} 
                src={lawyer.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&h=400&auto=format&fit=crop"} 
              />
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
                خبرة {lawyer.experience_years} سنوات
              </div>
            </div>
            <div className="p-6 text-right">
              <h4 className="text-xl font-bold text-primary">{lawyer.full_name}</h4>
              <p className="text-secondary font-bold text-sm">
                {lawyer.lawyer_categories?.[0]?.categories?.name || "محامي عام"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

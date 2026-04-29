import Image from "next/image";
import Link from "next/link";

export default function AuthorCard({ author }: { author: any }) {
  if (!author) return null;

  return (
    <section className="mt-8 mb-12 text-right dir-rtl">
      <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-xl border border-outline-variant/10">
        <div className="flex flex-row-reverse items-start gap-6 mb-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden relative flex-shrink-0 border-2 border-secondary shadow-md">
            <Image 
              fill
              alt={author.full_name} 
              className="object-cover" 
              src={author.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&h=100"} 
            />
          </div>
          <div className="flex-1 text-right">
            <h4 className="text-2xl font-black text-primary mb-2">عن الكاتب: {author.full_name}</h4>
            <p className="text-[10px] text-secondary font-black uppercase tracking-[0.2em]">
              {author.role || "خبير قانوني"}
            </p>
          </div>
        </div>
        
        <p className="text-on-surface-variant leading-relaxed mb-8 text-right font-medium">
          {author.bio || "يمتلك الكاتب خبرة واسعة في المجالات القانونية المتخصصة، ويسعى دائماً لنشر الوعي القانوني من خلال كتاباته المتميزة."}
        </p>
        
        <div className="flex gap-4 flex-row-reverse">
          <Link 
            href={`/lawyers/${author.id}`}
            className="flex-1 bg-primary text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg hover:bg-primary/90"
          >
            عرض الملف الشخصي
            <span className="material-symbols-outlined text-sm">person</span>
          </Link>
          <button className="px-5 bg-surface-container-high text-primary py-4 rounded-xl flex items-center justify-center transition-all active:scale-95 hover:bg-surface-container-highest border border-outline-variant/20">
            <span className="material-symbols-outlined text-xl">share</span>
          </button>
        </div>
      </div>
    </section>
  );
}

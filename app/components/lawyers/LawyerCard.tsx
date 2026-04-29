import Image from "next/image";
import Link from "next/link";

export default function LawyerCard({ lawyer, compact = false }: { lawyer: any, compact?: boolean }) {
  const category = lawyer.lawyer_categories?.[0]?.categories?.name || "محامي";

  return (
    <Link href={`/lawyers/${lawyer.id}`} className="block h-full animate-fade-in-up">
      <article className={`bg-white rounded-[1.5rem] md:rounded-[2rem] flex flex-col h-full border border-surface-container-high hover-lift shadow-soft group cursor-pointer relative overflow-hidden transition-all duration-500 ${compact ? 'p-3 gap-3' : 'p-4 gap-5'}`}>
        <div className={`relative rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden transition-all duration-500 ${compact ? 'h-40 md:h-48' : 'h-72'}`}>
          <Image 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
            alt={lawyer.full_name} 
            src={lawyer.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&h=400&auto=format&fit=crop"} 
          />
          {lawyer.can_receive_requests && (
            <div className={`absolute glass-effect rounded-full flex items-center gap-2 shadow-lg transition-all ${compact ? 'top-2 right-2 px-3 py-1 scale-90' : 'top-4 right-4 px-4 py-1.5'}`}>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-primary font-black text-[10px] uppercase tracking-wider">متاح الآن</span>
            </div>
          )}
        </div>
        
        <div className="text-right flex-1 flex flex-col px-1 pb-1">
          <div className={`${compact ? 'mb-2' : 'mb-4'}`}>
            <h3 className={`font-black text-primary group-hover:text-secondary transition-colors leading-tight ${compact ? 'text-base mb-0' : 'text-2xl mb-1'}`}>{lawyer.full_name}</h3>
            {!compact && <p className="text-secondary font-black text-[11px] uppercase tracking-[0.2em]">{category}</p>}
          </div>
          
          <div className={`flex flex-wrap flex-row-reverse gap-2 ${compact ? 'mb-2' : 'mb-6'}`}>
            <span className={`bg-primary/5 text-primary font-black rounded-full border border-primary/10 transition-all ${compact ? 'text-[9px] py-1 px-3' : 'text-[10px] py-1.5 px-4'}`}>
              {lawyer.experience_years} عاماً {compact ? '' : 'من الخبرة'}
            </span>
          </div>
          
          {!compact && (
            <div className="w-full mt-auto bg-primary text-white py-4 rounded-2xl font-black text-sm group-hover:bg-secondary group-hover:shadow-[0_10px_20px_rgba(117,91,0,0.2)] transition-all flex items-center justify-center gap-2">
              <span>عرض الملف الشخصي</span>
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

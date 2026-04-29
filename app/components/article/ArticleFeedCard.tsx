import Image from "next/image";
import Link from "next/link";

export default function ArticleFeedCard({ article, compact = false }: { article: any, compact?: boolean }) {
  const publishedDate = article.published_at 
    ? new Date(article.published_at).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'تاريخ النشر غير متوفر';

  return (
    <div className={`bg-white rounded-[1.5rem] md:rounded-[2rem] border border-surface-container-high hover-lift shadow-sm flex flex-col group h-full animate-fade-in-up transition-all duration-500 ${compact ? 'p-3 gap-3' : 'p-4 gap-4'}`}>
      <div className={`rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden relative transition-all duration-500 ${compact ? 'h-32 md:h-40' : 'h-56'}`}>
        <Image 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
          alt={article.title} 
          src={article.featured_image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnOEc2Lr_sMf-lb9WV0vB2V6RR9xkFT7ID7aRyHk9TLWT-AaAMca5iSrh2vmj-GB27QLPYUFVksfPjjRsnQ1oul0_iYvGvWBXjcFZCkYJN-Jj4BsrpvJ3fCC24ZpGo4jrlDNg4hdcQuJGlZZw5exA36O7Z7UXGGIesb9UHI5QIaU9fn5Qmt0igehGKEwGpfU-L_Pl9qPk4OxL96sIt0uvqP9rMvlDQwDQTUbySTCddeDaSQKYo47nnDHdJQYFusDR8k0nRP4kpfe"} 
        />
        {!compact && (
          <div className="absolute top-4 left-4 glass-effect px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
            <span className="material-symbols-outlined text-[12px] text-primary">visibility</span>
            <span className="text-primary font-black text-[10px]">{article.views || 0}</span>
          </div>
        )}
      </div>
      <div className={`space-y-4 text-right flex-1 flex flex-col justify-between px-1 pb-1`}>
        <div>
          <h3 className={`font-black text-primary leading-tight group-hover:text-secondary transition-colors line-clamp-2 ${compact ? 'text-base min-h-[2.5rem] mb-0' : 'text-xl mb-3 min-h-[3rem]'}`}>
            {article.title}
          </h3>
          {!compact && (
            <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed h-10 font-medium opacity-80">
              {article.excerpt}
            </p>
          )}
        </div>
        
        {!compact && (
          <div className="flex items-center justify-between pt-4 border-t border-surface-container-high flex-row-reverse">
            <div className="flex items-center gap-3 flex-row-reverse">
              <div className="w-10 h-10 rounded-full border-2 border-secondary overflow-hidden relative shadow-sm">
                <Image 
                  fill
                  src={article.lawyers?.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&h=100"}
                  alt={article.lawyers?.full_name}
                  className="object-cover"
                />
              </div>
              <div className="text-[10px] text-right">
                <p className="font-black text-primary uppercase tracking-wider">{article.lawyers?.full_name}</p>
                <p className="text-on-surface-variant font-bold opacity-60">{publishedDate}</p>
              </div>
            </div>
            <Link href={`/blog/${article.slug}`} className="text-secondary font-black text-sm flex items-center gap-1 hover:gap-2 transition-all">
              إقرأ المزيد
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </Link>
          </div>
        )}
        
        {compact && (
           <Link href={`/blog/${article.slug}`} className="text-secondary font-black text-[10px] flex items-center gap-1 mt-auto self-end">
            <span>التفاصيل</span>
            <span className="material-symbols-outlined text-[12px]">arrow_back</span>
          </Link>
        )}
      </div>
    </div>
  );
}

import Image from "next/image";

export default function ArticleMeta({ article }: { article: any }) {
  if (!article) return null;

  const publishedDate = article.published_at 
    ? new Date(article.published_at).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'تاريخ النشر غير متوفر';

  return (
    <section className="py-8 border-b border-outline-variant/10 text-right dir-rtl">
      <div className="flex items-center justify-between flex-row-reverse">
        <div className="flex items-center gap-3 flex-row-reverse">
          <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-secondary shadow-md">
            <Image 
              fill
              alt={article.lawyers?.full_name} 
              className="object-cover" 
              src={article.lawyers?.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&h=100"} 
            />
          </div>
          <div className="text-right">
            <p className="font-black text-primary">{article.lawyers?.full_name}</p>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">
              {article.lawyers?.role || "مستشار قانوني"}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 text-on-surface-variant text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-secondary">calendar_today</span>
            <span>{publishedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-secondary">visibility</span>
            <span>{article.views?.toLocaleString() || 0} مشاهدة</span>
          </div>
        </div>
      </div>
    </section>
  );
}

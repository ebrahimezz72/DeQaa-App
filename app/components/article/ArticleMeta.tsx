import Image from "next/image";
import Link from "next/link";

export default function ArticleMeta({ article }: { article: any }) {
  if (!article) return null;

  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "تاريخ النشر غير متوفر";

  const words = (article.content || "").trim().split(/\s+/).filter(Boolean).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(words / 150));
  const author = article.lawyers;

  return (
    <section className="py-6 border-b border-outline-variant/20 text-right dir-rtl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-row-reverse">
        {author ? (
          <Link
            href={`/lawyers/${author.id}`}
            className="flex items-center gap-3 flex-row-reverse group transition-transform hover:translate-x-[-2px]"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-secondary shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              <Image
                fill
                alt={author.full_name || "الكاتب"}
                className="object-cover"
                src={
                  author.photo_url ||
                  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&h=100"
                }
              />
            </div>
            <div className="text-right">
              <p className="font-black text-primary group-hover:text-secondary transition-colors text-base">
                {author.full_name}
              </p>
              <p className="text-[11px] text-on-surface-variant font-bold">
                {author.role || "محامي ومستشار قانوني"}
              </p>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-3 flex-row-reverse">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center border-2 border-secondary/40">
              دقة
            </div>
            <div className="text-right">
              <p className="font-black text-primary text-base">مؤسسة دقة للمحاماة</p>
              <p className="text-[11px] text-on-surface-variant font-bold">فريق التحرير القانوني</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 text-on-surface-variant text-xs font-bold">
          <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-sm text-secondary">calendar_today</span>
            <span>{publishedDate}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
            <span>{readingTimeMinutes} دقيقة قراءة</span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-sm text-secondary">visibility</span>
            <span>{(article.views || 0).toLocaleString("ar-EG")} مشاهدة</span>
          </div>
        </div>
      </div>
    </section>
  );
}

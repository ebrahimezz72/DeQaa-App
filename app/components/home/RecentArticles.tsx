import Image from "next/image";
import Link from "next/link";

export default function RecentArticles({ articles }: { articles: any[] }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-20 bg-surface-container-low px-6">
      <div className="mb-12 flex justify-between items-end dir-rtl max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-primary font-headline">آخر المقالات</h2>
          <div className="w-16 h-1.5 bg-secondary rounded-full mt-2"></div>
        </div>
        <Link href="/blog" className="text-secondary font-bold text-sm hover:underline">
          عرض الكل
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map((article) => {
          const articleHref = article.id
            ? `/articles/${article.id}`
            : article.slug
              ? `/blog/${article.slug}`
              : "#";

          return (
            <div
              key={article.id}
              className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <Link href={articleHref} className="w-full h-48 relative block overflow-hidden">
                <Image
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={article.title || "مقال"}
                  src={
                    article.featured_image ||
                    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
                  }
                />
              </Link>
              <div className="p-6 text-right dir-rtl flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-secondary mb-2 font-bold">
                    {article.published_at
                      ? new Date(article.published_at).toLocaleDateString("ar-EG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "تاريخ النشر غير متوفر"}
                  </div>
                  <Link href={articleHref} className="block group/title">
                    <h4 className="text-lg font-bold text-primary group-hover/title:text-secondary transition-colors mb-3 line-clamp-2 min-h-[3.5rem]">
                      {article.title}
                    </h4>
                  </Link>
                  {article.excerpt && (
                    <Link href={articleHref} className="block">
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </Link>
                  )}
                </div>
                <Link
                  href={articleHref}
                  className="text-secondary font-bold flex items-center justify-end gap-2 group/btn hover:gap-3 transition-all pt-2"
                >
                  <span>اقرأ المزيد</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:-translate-x-1">
                    chevron_left
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

interface RelatedArticleItem {
  id: number | string;
  title: string;
  slug?: string | null;
  excerpt?: string | null;
  featured_image?: string | null;
  published_at?: string | null;
  views?: number | null;
}

export default function RelatedArticles({ articles }: { articles?: RelatedArticleItem[] }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-outline-variant/20 text-right dir-rtl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-black text-primary">مقالات ذات صلة</h3>
        <Link
          href="/blog"
          className="text-secondary font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all"
        >
          <span>عرض جميع المقالات</span>
          <span className="material-symbols-outlined text-xs">arrow_back</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => {
          const itemDate = item.published_at
            ? new Date(item.published_at).toLocaleDateString("ar-EG", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "";
          const linkHref = item.slug ? `/blog/${item.slug}` : `/articles/${item.id}`;

          return (
            <Link
              key={item.id}
              href={linkHref}
              className="group bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3 bg-surface-container-high">
                  <Image
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.title || "مقال"}
                    src={
                      item.featured_image ||
                      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop"
                    }
                  />
                </div>
                <h4 className="font-bold text-base text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                  {item.title}
                </h4>
                {item.excerpt && (
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-3 border-t border-outline-variant/10">
                <span>{itemDate}</span>
                <span className="text-secondary font-bold flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  <span>قراءة المقال</span>
                  <span className="material-symbols-outlined text-xs">arrow_back</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

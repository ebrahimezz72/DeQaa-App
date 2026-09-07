import Image from "next/image";
import Link from "next/link";

export default function ArticleHero({ article }: { article: any }) {
  if (!article) return null;

  const categoryName =
    article.categories?.name ||
    article.category?.name ||
    article.category_name ||
    "مقال قانوني";

  return (
    <section className="relative w-full h-[320px] md:h-[450px] overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl mb-8">
      <Image
        fill
        priority
        className="object-cover"
        alt={article.title || "صورة المقال"}
        src={
          article.featured_image ||
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent"></div>

      {/* Top back button */}
      <div className="absolute top-6 right-6 z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white font-bold text-xs hover:bg-white/20 transition-all shadow-md"
        >
          <span>العودة للمدونة</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="absolute bottom-8 right-8 left-8 text-right dir-rtl">
        {categoryName && (
          <span className="inline-block bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black mb-4 shadow-lg">
            {categoryName}
          </span>
        )}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
          {article.title}
        </h1>
      </div>
    </section>
  );
}

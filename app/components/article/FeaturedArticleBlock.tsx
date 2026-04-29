import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticleBlock({ article }: { article: any }) {
  if (!article) return null;

  const publishedDate = article.published_at 
    ? new Date(article.published_at).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'تاريخ النشر غير متوفر';

  return (
    <section className="relative group">
      <Link href={`/blog/${article.slug}`} className="block overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_20px_40px_rgba(2,21,73,0.06)] transition-all">
        <div className="relative h-64 md:h-96 w-full">
          <Image 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
            alt={article.title} 
            src={article.featured_image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnOEc2Lr_sMf-lb9WV0vB2V6RR9xkFT7ID7aRyHk9TLWT-AaAMca5iSrh2vmj-GB27QLPYUFVksfPjjRsnQ1oul0_iYvGvWBXjcFZCkYJN-Jj4BsrpvJ3fCC24ZpGo4jrlDNg4hdcQuJGlZZw5exA36O7Z7UXGGIesb9UHI5QIaU9fn5Qmt0igehGKEwGpfU-L_Pl9qPk4OxL96sIt0uvqP9rMvlDQwDQTUbySTCddeDaSQKYo47nnDHdJQYFusDR8k0nRP4kpfe"} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
          <div className="absolute bottom-0 p-8 text-right w-full">
            <span className="inline-block px-4 py-1.5 mb-4 text-[10px] font-black bg-secondary text-white rounded-full tracking-wider shadow-lg">مقالات مميزة</span>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">{article.title}</h2>
            <div className="flex items-center justify-end gap-3 text-white/80 text-sm">
              <span>بواسطة {article.lawyers?.full_name}</span>
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              <span>{publishedDate}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

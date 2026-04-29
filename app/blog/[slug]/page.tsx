import Image from "next/image";
import { supabase } from "../../../supabase/client";
import { notFound } from "next/navigation";
import ViewsCounter from "../../components/article/ViewsCounter";
import Link from "next/link";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. Fetch Article
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) console.error("Error fetching blog post by slug:", error)

  const { data: author } = await supabase
    .from('lawyers')
    .select('id, full_name, bio, photo_url')
    .eq('id', article?.author_id)
    .single()

  const articleWithAuthor = article ? {
    ...article,
    lawyers: author
  } : null;

  if (!articleWithAuthor || articleWithAuthor.status === 'مسودة') {
    notFound();
  }

  // Increment view counter in background
  supabase
    .from('articles')
    .update({ views: (articleWithAuthor.views || 0) + 1 })
    .eq('id', articleWithAuthor.id)
    .then(({ error }) => {
      if (error) console.error("Error updating view counter for slug route:", error);
    });

  return (
    <article className="pt-24 pb-32">
      
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12 text-right dir-rtl">
        <Link href="/blog" className="text-secondary font-bold text-sm flex items-center justify-end gap-2 mb-8 group">
          <span>العودة للمدونة</span>
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-black text-primary leading-tight mb-6">{articleWithAuthor.title}</h1>
        
        <div className="flex flex-row-reverse items-center gap-4 border-y border-outline-variant py-6">
          <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-secondary">
            <Image 
              fill 
              className="object-cover" 
              src={articleWithAuthor.lawyers?.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&h=100"} 
              alt={articleWithAuthor.lawyers?.full_name} 
            />
          </div>
          <div className="text-right">
            <p className="font-bold text-primary">{articleWithAuthor.lawyers?.full_name}</p>
            <p className="text-xs text-on-surface-variant">
              تم النشر في {new Date(articleWithAuthor.published_at).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image 
            fill 
            className="object-cover" 
            src={articleWithAuthor.featured_image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnOEc2Lr_sMf-lb9WV0vB2V6RR9xkFT7ID7aRyHk9TLWT-AaAMca5iSrh2vmj-GB27QLPYUFVksfPjjRsnQ1oul0_iYvGvWBXjcFZCkYJN-Jj4BsrpvJ3fCC24ZpGo4jrlDNg4hdcQuJGlZZw5exA36O7Z7UXGGIesb9UHI5QIaU9fn5Qmt0igehGKEwGpfU-L_Pl9qPk4OxL96sIt0uvqP9rMvlDQwDQTUbySTCddeDaSQKYo47nnDHdJQYFusDR8k0nRP4kpfe"} 
            alt={articleWithAuthor.title} 
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 dir-rtl text-right">
        <div className="prose prose-lg max-w-none prose-primary prose-p:text-on-surface prose-p:leading-relaxed prose-headings:font-black prose-headings:text-primary">
          {articleWithAuthor.content.split('\n').map((para: string, i: number) => (
            <p key={i} className="mb-6">{para}</p>
          ))}
        </div>

        {/* Footer info (tags, etc) */}
        {articleWithAuthor.tags && articleWithAuthor.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-outline-variant flex flex-wrap flex-row-reverse gap-2">
            {articleWithAuthor.tags.map((tag: string) => (
              <span key={tag} className="bg-surface-container-high text-primary px-4 py-1 rounded-full text-xs font-bold">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* About Author Card */}
      <div className="max-w-3xl mx-auto px-6 mt-16">
        <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col md:flex-row-reverse gap-6 items-center shadow-lg border border-outline-variant">
          <div className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0 border-2 border-secondary shadow-md">
            <Image 
              fill 
              className="object-cover" 
              src={articleWithAuthor.lawyers?.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&h=100"} 
              alt={articleWithAuthor.lawyers?.full_name} 
            />
          </div>
          <div className="text-right flex-1">
            <h4 className="text-xl font-bold text-primary mb-2">عن الكاتب: {articleWithAuthor.lawyers?.full_name}</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
              {articleWithAuthor.lawyers?.bio}
            </p>
            <Link href={`/lawyers/${article.lawyers?.id}`} className="inline-block mt-4 text-secondary font-bold text-sm underline">
              عرض الملف الشخصي الكامل
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

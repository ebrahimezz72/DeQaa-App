import ArticleHero from "../../components/article/ArticleHero";
import ArticleMeta from "../../components/article/ArticleMeta";
import ArticleBody from "../../components/article/ArticleBody";
import AuthorCard from "../../components/article/AuthorCard";
import RelatedArticles from "../../components/article/RelatedArticles";
import { supabase } from "../../../supabase/client";
import { notFound } from "next/navigation";

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) console.error("Error fetching article by ID:", error)

  const { data: author } = await supabase
    .from('lawyers')
    .select('id, full_name, bio, photo_url')
    .eq('id', article?.author_id)
    .single()

  const articleWithAuthor = article ? {
    ...article,
    lawyers: author
  } : null;

  if (!article || article.status === 'مسودة') {
    notFound();
  }

  // Increment view counter in background
  supabase
    .from('articles')
    .update({ views: (article.views || 0) + 1 })
    .eq('id', id)
    .then(({ error }) => {
      if (error) console.error("Error updating view counter:", error);
    });

  return (
    <main className="pb-24 pt-20 bg-surface max-w-5xl mx-auto">
      <ArticleHero article={articleWithAuthor} />
      <div className="px-6">
        <ArticleMeta article={articleWithAuthor} />
        <ArticleBody content={articleWithAuthor?.content} />
        <AuthorCard author={articleWithAuthor?.lawyers} />
        {/* <RelatedArticles categoryId={article.category_id} currentId={article.id} /> */}
      </div>
    </main>
  );
}

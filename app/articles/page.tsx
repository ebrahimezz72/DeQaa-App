import FeaturedArticleBlock from "../components/article/FeaturedArticleBlock";
import ArticleBrowser from "../components/article/ArticleBrowser";
import { supabase } from "../../supabase/client";

export default async function ArticlesFeedPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category: activeCategoryId } = await searchParams;

  // 1. Fetch Categories for filtering
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, name')
    .eq('is_active', true)
    .order('display_order')

  if (catError) console.error("Error fetching categories for article feed:", catError)

  // 2. Fetch Lawyers separately (to avoid join issues if relationships aren't perfect)
  const { data: lawyers, error: lawError } = await supabase
    .from('lawyers')
    .select('id, full_name, photo_url');

  if (lawError) console.error("Error fetching lawyers for articles:", lawError)

  // 3. Fetch ALL articles
  const { data: articles, error: artError } = await supabase
    .from('articles')
    .select('*')
    .neq('status', 'مسودة')
    .order('published_at', { ascending: false });

  if (artError) console.error("Error fetching articles feed:", artError)

  // Manual Merge (Matching the way used in LawyersPage)
  const articlesWithData = articles?.map(article => ({
    ...article,
    lawyers: lawyers?.find(l => l.id === article.author_id)
  })) || [];

  return (
    <main className="pt-24 pb-12 px-4 space-y-8 bg-surface text-on-surface max-w-7xl mx-auto">
      <FeaturedArticleBlock article={articlesWithData[0]} />
      
      {/* ArticleBrowser handles Search, Categories and List */}
      <ArticleBrowser 
        initialArticles={articlesWithData} 
        categories={categories || []} 
      />
    </main>
  );
}

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

  // 2. Fetch ALL articles (filtering handled by ArticleBrowser client-side for live search)
  const { data: articles, error: artError } = await supabase
    .from('articles')
    .select(`
      id, title, slug, excerpt,
      featured_image, published_at, views, category_id,
      lawyers(full_name, photo_url)
    `)
    .neq('status', 'مسودة')
    .order('published_at', { ascending: false });

  if (artError) console.error("Error fetching articles feed:", artError)

  return (
    <main className="pt-24 pb-12 px-4 space-y-8 bg-surface text-on-surface max-w-7xl mx-auto">
      <FeaturedArticleBlock article={articles?.[0]} />
      
      {/* ArticleBrowser handles Search, Categories and List */}
      <ArticleBrowser 
        initialArticles={articles || []} 
        categories={categories || []} 
      />
    </main>
  );
}

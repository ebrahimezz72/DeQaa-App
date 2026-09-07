import type { Metadata } from "next";
export const revalidate = 60;
import FeaturedArticleBlock from "../components/article/FeaturedArticleBlock";
import ArticleBrowser from "../components/article/ArticleBrowser";
import { supabase } from "../../supabase/client";

import FinalCTA from "../components/home/FinalCTA";

export const metadata: Metadata = {
  title: "المدونة القانونية",
  description: "اطلع على أحدث المقالات والنصائح القانونية من فريق محامي مؤسسة دقة. مقالات متخصصة في القانون المصري والاستشارات القانونية.",
  openGraph: {
    title: "المدونة القانونية | مؤسسة دقة للمحاماة",
    description: "مقالات قانونية متخصصة ونصائح من خبراء القانون في مؤسسة دقة للمحاماة.",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default async function ArticlesFeedPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category: activeCategoryId } = await searchParams;

  // 1. Fetch Categories for filtering
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, name')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (catError) console.error("Error fetching categories for article feed:", catError)

  // 2. Fetch ALL articles (filtering handled by ArticleBrowser client-side for live search)
  const { data: articles, error: artError } = await supabase
    .from('articles')
    .select(`
      id, title, slug, excerpt,
      featured_image, published_at, views, category_id,
      lawyers(full_name, photo_url)
    `)
    .neq('status', 'draft')
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
      <FinalCTA />
    </main>
  );
}

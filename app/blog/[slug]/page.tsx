import type { Metadata } from "next";
export const revalidate = 60;
import ArticleHero from "../../components/article/ArticleHero";
import ArticleMeta from "../../components/article/ArticleMeta";
import ArticleBody from "../../components/article/ArticleBody";
import AuthorCard from "../../components/article/AuthorCard";
import RelatedArticles from "../../components/article/RelatedArticles";
import FinalCTA from "../../components/home/FinalCTA";
import { supabase } from "../../../supabase/client";
import { notFound } from "next/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://deqaa.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  let query = supabase
    .from("articles")
    .select("title, excerpt, meta_description, meta_keywords, tags, featured_image, published_at, slug, id");

  // Support querying by slug or fallback to id if numeric
  if (!isNaN(Number(slug))) {
    query = query.or(`slug.eq.${slug},id.eq.${Number(slug)}`);
  } else {
    query = query.eq("slug", slug);
  }

  const { data: article } = await query.single();

  if (!article) {
    return { title: "مقال غير موجود | مؤسسة دقة للمحاماة" };
  }

  const title = `${article.title} | مؤسسة دقة للمحاماة`;
  const description =
    article.meta_description ||
    article.excerpt ||
    `${article.title} - مقال قانوني واستشارة متخصصة من مؤسسة دقة للمحاماة.`;

  const keywords = article.meta_keywords
    ? article.meta_keywords.split(",").map((k: string) => k.trim())
    : article.tags || [];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/blog/${article.slug || slug}`,
      publishedTime: article.published_at,
      images: article.featured_image
        ? [{ url: article.featured_image, alt: article.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.featured_image ? [article.featured_image] : [],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${article.slug || slug}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Fetch Article
  let articleQuery = supabase.from("articles").select("*");
  if (!isNaN(Number(slug))) {
    articleQuery = articleQuery.or(`slug.eq.${slug},id.eq.${Number(slug)}`);
  } else {
    articleQuery = articleQuery.eq("slug", slug);
  }

  const { data: article, error: artError } = await articleQuery.single();

  if (artError && artError.code !== "PGRST116") {
    console.error("Error fetching blog article:", artError);
  }

  if (!article || article.status === "draft" || article.status === "مسودة") {
    notFound();
  }

  // 2. Fetch Author, Category, and Related articles in parallel
  const [authorRes, categoryRes, relatedRes] = await Promise.all([
    article.author_id
      ? supabase
          .from("lawyers")
          .select("id, full_name, bio, photo_url, phone, experience_years")
          .eq("id", article.author_id)
          .single()
      : Promise.resolve({ data: null, error: null }),
    article.category_id
      ? supabase
          .from("categories")
          .select("id, name, description")
          .eq("id", article.category_id)
          .single()
      : Promise.resolve({ data: null, error: null }),
    article.category_id
      ? supabase
          .from("articles")
          .select("id, title, slug, excerpt, featured_image, published_at, views")
          .eq("category_id", article.category_id)
          .neq("id", article.id)
          .neq("status", "draft")
          .neq("status", "مسودة")
          .order("published_at", { ascending: false })
          .limit(3)
      : supabase
          .from("articles")
          .select("id, title, slug, excerpt, featured_image, published_at, views")
          .neq("id", article.id)
          .neq("status", "draft")
          .neq("status", "مسودة")
          .order("published_at", { ascending: false })
          .limit(3),
  ]);

  const author = authorRes.data;
  const category = categoryRes.data;
  const relatedArticles = relatedRes.data || [];

  const articleWithData = {
    ...article,
    lawyers: author,
    categories: category,
    category_name: category?.name,
  };

  // 3. Increment view counter in background
  supabase
    .from("articles")
    .update({ views: (article.views || 0) + 1 })
    .eq("id", article.id)
    .then(({ error }) => {
      if (error) console.error("Error updating view counter for blog route:", error);
    });

  // 4. JSON-LD Structured Data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleWithData.title,
    description: articleWithData.meta_description || articleWithData.excerpt,
    image: articleWithData.featured_image || "",
    datePublished: articleWithData.published_at || articleWithData.created_at,
    dateModified: articleWithData.updated_at || articleWithData.published_at,
    keywords: articleWithData.tags?.join(", ") || articleWithData.meta_keywords || "",
    author: {
      "@type": "Person",
      name: author?.full_name || "مؤسسة دقة للمحاماة",
      url: author?.id ? `${SITE_URL}/lawyers/${author.id}` : SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "مؤسسة دقة للمحاماة",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${articleWithData.slug || slug}`,
    },
  };

  return (
    <main className="pb-24 pt-20 bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <ArticleHero article={articleWithData} />
        <ArticleMeta article={articleWithData} />
        <ArticleBody
          content={articleWithData.content}
          excerpt={articleWithData.excerpt}
          tags={articleWithData.tags}
        />
        <AuthorCard author={articleWithData.lawyers} articleTitle={articleWithData.title} />
        <RelatedArticles articles={relatedArticles} />
      </div>
      <div className="mt-16">
        <FinalCTA />
      </div>
    </main>
  );
}

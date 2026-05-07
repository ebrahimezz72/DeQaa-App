import type { MetadataRoute } from "next";
import { supabase } from "../supabase/client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://deqaa.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/lawyers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic: Lawyers
  const { data: lawyers } = await supabase
    .from("lawyers")
    .select("id, updated_at")
    .eq("is_active", true);

  const lawyerRoutes: MetadataRoute.Sitemap =
    lawyers?.map((lawyer) => ({
      url: `${SITE_URL}/lawyers/${lawyer.id}`,
      lastModified: lawyer.updated_at ? new Date(lawyer.updated_at) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) || [];

  // Dynamic: Blog Articles
  const { data: articles } = await supabase
    .from("articles")
    .select("slug, published_at, updated_at")
    .neq("status", "مسودة");

  const articleRoutes: MetadataRoute.Sitemap =
    articles?.map((article) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: article.updated_at
        ? new Date(article.updated_at)
        : article.published_at
          ? new Date(article.published_at)
          : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })) || [];

  // Dynamic: Categories
  const { data: categories } = await supabase
    .from("categories")
    .select("id, updated_at")
    .eq("is_active", true);

  const categoryRoutes: MetadataRoute.Sitemap =
    categories?.map((cat) => ({
      url: `${SITE_URL}/categories/${cat.id}`,
      lastModified: cat.updated_at ? new Date(cat.updated_at) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })) || [];

  return [...staticRoutes, ...lawyerRoutes, ...articleRoutes, ...categoryRoutes];
}

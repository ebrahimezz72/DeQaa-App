import HeroSection from "./components/home/HeroSection";
import FirmStats from "./components/home/FirmStats";
import PracticeAreas from "./components/home/PracticeAreas";
import FeaturedLawyers from "./components/home/FeaturedLawyers";
import RecentArticles from "./components/home/RecentArticles";
import ClientTestimonial from "./components/home/ClientTestimonial";
import PricePackages from "./components/home/PricePackages"; // New component
import FinalCTA from "./components/home/FinalCTA";
import { supabase } from "../supabase/client";

export default async function Home() {
  // 1. Fetch Categories
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, name, description, icon_url')
    .eq('is_active', true)
    .order('display_order')
  if (catError) console.error("Error fetching categories:", catError)

  // 2. Fetch featured lawyers
  const { data: lawyers, error: lawError } = await supabase
    .from('lawyers')
    .select('id, full_name, photo_url, bio, experience_years, can_receive_requests')
    .eq('is_active', true)

  if (lawError) console.error("Error fetching featured lawyers:", lawError)

  // جلب عدد الطلبات لكل محامي للترتيب حسب الشعبية
  const { data: requestCounts, error: rcError } = await supabase
    .from('consultation_requests')
    .select('lawyer_id')

  if (rcError) console.error("Error fetching request counts:", rcError)

  const countsMap: Record<string, number> = {};
  requestCounts?.forEach(r => {
    if (r.lawyer_id) countsMap[r.lawyer_id] = (countsMap[r.lawyer_id] || 0) + 1;
  });

  const { data: lawyerCategories, error: lcError } = await supabase
    .from('lawyer_categories')
    .select('lawyer_id, category_id')

  if (lcError) {
    console.error("Error fetching featured lawyer categories:", lcError)
  }

  const featuredWithCategories = lawyers?.map(lawyer => ({
    ...lawyer,
    lawyer_categories: lawyerCategories
      ?.filter(lc => lc.lawyer_id === lawyer.id)
      .map(lc => ({
        categories: categories?.find(c => c.id === lc.category_id) || { id: lc.category_id, name: "تخصص عام" }
      })) || []
  }))
  // ترتيب حسب عدد الطلبات (الأكثر أولاً) ثم أبجدياً ثم أخذ أول 4
  .sort((a, b) => {
    const countDiff = (countsMap[b.id] || 0) - (countsMap[a.id] || 0);
    if (countDiff !== 0) return countDiff;
    return a.full_name.localeCompare(b.full_name, 'ar');
  })
  .slice(0, 4) || []

  // 3. Fetch Recent Articles (Manual Join style)
  const { data: articles, error: artError } = await supabase
    .from('articles')
    .select('*')
    .neq('status', 'مسودة')
    .order('published_at', { ascending: false })
    .limit(3)
  if (artError) console.error("Error fetching recent articles:", artError)

  const articlesWithData = articles?.map(article => ({
    ...article,
    lawyers: lawyers?.find(l => l.id === article.author_id)
  })) || []

  // 4. Fetch Testimonials
  const { data: testimonials, error: testError } = await supabase
    .from('testimonials')
    .select(`
      id, client_name, rating,
      content, photo_url,
      lawyers(full_name)
    `)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
  if (testError) console.error("Error fetching testimonials:", testError)

  // 5. Fetch Price Packages
  const { data: packages, error: pkgError } = await supabase
    .from('price_packages')
    .select('*')
    .eq('is_active', true)
    .order('display_order')
  if (pkgError) console.error("Error fetching price packages:", pkgError)

  return (
    <>
      <main className="pb-24 pt-16">
        <HeroSection />
        <FirmStats />
        <PracticeAreas categories={categories || []} />
        <FeaturedLawyers lawyers={featuredWithCategories} />
        <RecentArticles articles={articlesWithData} />
        <ClientTestimonial lawyers={featuredWithCategories} />
        <PricePackages packages={packages || []} />
        <FinalCTA />
      </main>
    </>
  );
}


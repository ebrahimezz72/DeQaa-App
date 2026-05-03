import TeamHeader from "../components/lawyers/TeamHeader";
import LawyerList from "../components/lawyers/LawyerList";
import { supabase } from "../../supabase/client";

export default async function LawyersPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category: activeCategoryId } = await searchParams;

  const { data: lawyers, error: lawError } = await supabase
    .from('lawyers')
    .select('id, full_name, photo_url, bio, experience_years, can_receive_requests, is_active')
    .eq('is_active', true)

  if (lawError) console.error("Error fetching lawyers:", lawError)

  // جلب عدد الطلبات لكل محامي للترتيب حسب الشعبية
  const { data: requestCounts, error: rcError } = await supabase
    .from('consultation_requests')
    .select('lawyer_id')

  if (rcError) console.error("Error fetching request counts:", rcError)

  // حساب عدد الطلبات لكل محامي
  const countsMap: Record<string, number> = {};
  requestCounts?.forEach(r => {
    if (r.lawyer_id) countsMap[r.lawyer_id] = (countsMap[r.lawyer_id] || 0) + 1;
  });

  const { data: lawyerCategories, error: lcError } = await supabase
    .from('lawyer_categories')
    .select('lawyer_id, category_id')

  if (lcError) console.error("Error fetching lawyer categories:", lcError)

  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, name')
    .eq('is_active', true)
    .order('display_order')

  if (catError) console.error("Error fetching categories:", catError)

  // دمج المحامين مع أقسامهم يدوياً من البيانات التي جلبناها
  const lawyersWithCategories = lawyers?.map(lawyer => ({
    ...lawyer,
    lawyer_categories: lawyerCategories
      ?.filter(lc => lc.lawyer_id === lawyer.id)
      .map(lc => ({
        categories: categories?.find(c => c.id === lc.category_id) || { id: lc.category_id, name: "تخصص عام" }
      })) || []
  }))
  // ترتيب حسب عدد الطلبات (الأكثر أولاً) ثم أبجدياً
  .sort((a, b) => {
    const countDiff = (countsMap[b.id] || 0) - (countsMap[a.id] || 0);
    if (countDiff !== 0) return countDiff;
    return a.full_name.localeCompare(b.full_name, 'ar');
  }) || []

  return (
    <main className="pt-24 pb-32 px-6">
      <TeamHeader />
      <LawyerList 
        lawyers={lawyersWithCategories} 
        categories={categories || []} 
        initialCategoryId={activeCategoryId}
      />
    </main>
  );
}

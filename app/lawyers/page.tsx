import TeamHeader from "../components/lawyers/TeamHeader";
import LawyerList from "../components/lawyers/LawyerList";
import { supabase } from "../../supabase/client";

export default async function LawyersPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category: activeCategoryId } = await searchParams;

  const { data: lawyers, error: lawError } = await supabase
    .from('lawyers')
    .select('id, full_name, photo_url, bio, experience_years, can_receive_requests, is_active')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (lawError) console.error("Error fetching lawyers:", lawError)

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
  })) || []

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

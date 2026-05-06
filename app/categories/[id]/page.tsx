import { supabase } from "../../../supabase/client";
import { notFound } from "next/navigation";
import CategoryHeader from "../../components/categories/CategoryHeader";
import CategoryContent from "../../components/categories/CategoryContent";

import FinalCTA from "../../components/home/FinalCTA";

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Validate ID to be a number (assuming ID is integer)
  if (isNaN(Number(id))) {
    console.warn(`Invalid category ID format: ${id}`);
    notFound();
  }

  // 1. Fetch Category Basics
  const { data: category, error: catError } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();

  if (catError && catError.code !== 'PGRST116') {
    console.error("Database error fetching category:", catError);
  }

  if (!category) {
    notFound();
  }

  // 2. Fetch Lawyers in this Category
  // First, get the mapping
  const { data: mappings, error: mapError } = await supabase
    .from('lawyer_categories')
    .select('lawyer_id')
    .eq('category_id', id);

  if (mapError) console.error("Error fetching lawyer category mappings:", mapError);

  const lawyerIds = mappings?.map(m => m.lawyer_id) || [];

  let lawyersWithCategories: any[] = [];
  
  if (lawyerIds.length > 0) {
    const { data: lawyers, error: lawError } = await supabase
      .from('lawyers')
      .select('id, full_name, photo_url, bio, experience_years, can_receive_requests, is_active')
      .in('id', lawyerIds)
      .eq('is_active', true);

    if (lawError) console.error("Error fetching category lawyers:", lawError);

    // Fetch all categories for these lawyers to display on their cards
    const { data: allMappings, error: allMapError } = await supabase
      .from('lawyer_categories')
      .select('lawyer_id, category_id')
      .in('lawyer_id', lawyerIds);
      
    if (allMapError) console.error("Error fetching all lawyer mappings:", allMapError);
    
    const { data: allCategories, error: allCatError } = await supabase
      .from('categories')
      .select('id, name');
      
    if (allCatError) console.error("Error fetching all categories:", allCatError);

    lawyersWithCategories = lawyers?.map(lawyer => ({
      ...lawyer,
      lawyer_categories: allMappings
        ?.filter(lc => lc.lawyer_id === lawyer.id)
        .map(lc => ({
          categories: allCategories?.find(c => String(c.id) === String(lc.category_id)) || { id: lc.category_id, name: "تخصص عام" }
        })) || []
    })) || [];
  }

  // 3. Fetch Articles in this Category
  const { data: articles, error: artError } = await supabase
    .from('articles')
    .select(`
      id, title, slug, excerpt,
      featured_image, published_at, views, category_id,
      lawyers(full_name, photo_url)
    `)
    .eq('category_id', id)
    .neq('status', 'مسودة')
    .order('published_at', { ascending: false });

  if (artError) console.error("Error fetching category articles:", artError);

  return (
    <main className="bg-background min-h-screen">
      <CategoryHeader category={category} />
      <CategoryContent lawyers={lawyersWithCategories} articles={articles || []} />
      <FinalCTA />
    </main>
  );
}

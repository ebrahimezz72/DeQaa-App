import ProfileHeader from "../../components/lawyers/profile/ProfileHeader";
import ProfileContactStrip from "../../components/lawyers/profile/ProfileContactStrip";
import ProfileTabs from "../../components/lawyers/profile/ProfileTabs";
import ConsultationSection from "../../components/lawyers/profile/ConsultationSection"; // New component
import { supabase } from "../../../supabase/client";
import { notFound } from "next/navigation";

export default async function LawyerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Validate UUID format to prevent Postgres errors
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    console.warn(`Invalid lawyer ID format: ${id}`);
    notFound();
  }

  // 1. Fetch Lawyer basics
  const { data: lawyer, error: lawError } = await supabase
    .from('lawyers')
    .select('*')
    .eq('id', id)
    .single()

  if (lawError && lawError.code !== 'PGRST116') {
    console.error("Database error fetching lawyer basics:", JSON.stringify(lawError, null, 2))
  }

  if (!lawyer) {
    notFound();
  }

  // 1.1 Fetch Lawyer categories mappings
  const { data: lawyerCategories, error: lcError } = await supabase
    .from('lawyer_categories')
    .select('category_id')
    .eq('lawyer_id', id)

  if (lcError) console.error("Error fetching lawyer profile categories mapping:", lcError)

  // 1.2 Fetch all categories to map names (simplest way to avoid ambiguity)
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, name')
  
  if (catError) console.error("Error fetching categories for detail page:", catError)

  // Merge categories into lawyer object
  const lawyerWithCategories = {
    ...lawyer,
    lawyer_categories: lawyerCategories
      ?.map(lc => ({
        categories: categories?.find(c => c.id === lc.category_id) || { id: lc.category_id, name: "تخصص عام" }
      })) || []
  }

  // 2. Fetch Lawyer's Articles
  const { data: articles, error: artError } = await supabase
    .from('articles')
    .select('*')
    .eq('author_id', id)
    .neq('status', 'مسودة')
    .order('published_at', { ascending: false })

  if (artError) console.error("Error fetching lawyer's articles:", artError)

  // 3. Fetch Lawyer's Testimonials
  const { data: testimonials, error: testError } = await supabase
    .from('testimonials')
    .select('*')
    .eq('lawyer_id', id)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })

  if (testError) console.error("Error fetching lawyer's testimonials:", testError)

  return (
    <main className="pt-16 pb-24 bg-background text-on-surface">
      <ProfileHeader lawyer={lawyerWithCategories} />
      <ProfileContactStrip lawyer={lawyerWithCategories} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        <div className={lawyer.is_active ? "lg:col-span-2" : "lg:col-span-3"}>
          <ProfileTabs lawyer={lawyerWithCategories} articles={articles || []} testimonials={testimonials || []} />
        </div>
        {lawyer.is_active && (
          <div className="lg:col-span-1">
            <ConsultationSection 
              lawyerId={id} 
              lawyerName={lawyerWithCategories.full_name} 
              lawyerPhone={lawyerWithCategories.phone} 
            />
          </div>
        )}
      </div>
    </main>
  );
}

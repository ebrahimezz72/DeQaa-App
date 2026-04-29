import ContactHeader from "../components/contact/ContactHeader";
import ContactInfoBento from "../components/contact/ContactInfoBento";
import ConsultationForm from "../components/contact/ConsultationForm";
import LocationMap from "../components/contact/LocationMap";
import { supabase } from "../../supabase/client";

export default async function ContactPage() {
  // 1. Fetch Lawyers for the dropdown
  const { data: lawyers } = await supabase
    .from('lawyers')
    .select('id, full_name')
    .eq('is_active', true)
    .order('full_name')

  // 2. Fetch Settings for contact info (ID 1 as per DDL)
  const { data: settings } = await supabase
    .from('site_settings')
    .select('*')
    .eq('id', 1)
    .single()

  return (
    <main className="pt-24 px-6 space-y-12 max-w-7xl mx-auto">
      <ContactHeader />
      <ContactInfoBento settings={settings} />
      <ConsultationForm lawyers={lawyers || []} />
      <LocationMap mapUrl={settings?.google_map_url} />
    </main>
  );
}

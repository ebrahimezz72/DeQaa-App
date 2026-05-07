import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import MissionVisionBento from "../components/about/MissionVisionBento";
import OurPhilosophy from "../components/about/OurPhilosophy";
import TeamCallout from "../components/about/TeamCallout";
import ReviewForm from "../components/shared/ReviewForm";
import FinalCTA from "../components/home/FinalCTA";
import { supabase } from "../../supabase/client";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرف على مؤسسة دقة للمحاماة - رؤيتنا ورسالتنا وفريق العمل. خبرة قانونية تمتد لعقود في خدمة العدالة وحماية الحقوق في مصر.",
  openGraph: {
    title: "من نحن | مؤسسة دقة للمحاماة",
    description: "تعرف على قصة مؤسسة دقة للمحاماة ورؤيتنا في تقديم خدمات قانونية بأعلى معايير الجودة.",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutUsPage() {
  // 1. Fetch Content Page (using the provided DDL schema)
  const { data: content, error: contentError } = await supabase
    .from('content_page')
    .select('*')
    .eq('id', 1) // Using the default ID from DDL
    .single()
  
  if (contentError && contentError.code !== 'PGRST116') {
    console.error("Error fetching About Us content (content_page):", JSON.stringify(contentError, null, 2))
  }

  // 2. Fetch Settings (for fallback cover image)
  const { data: settings, error: settingsError } = await supabase
    .from('site_settings')
    .select('*')
    .eq('is_active', true)
    .single()

  if (settingsError && settingsError.code !== 'PGRST116') {
    console.error("Error fetching site settings for About US fallback:", JSON.stringify(settingsError, null, 2))
  }

  return (
    <main className="bg-surface text-on-surface overflow-hidden">
      <AboutHero 
        title={content?.title} 
        aboutText={content?.about_text}
        coverImage={"https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnOEc2Lr_sMf-lb9WV0vB2V6RR9xkFT7ID7aRyHk9TLWT-AaAMca5iSrh2vmj-GB27QLPYUFVksfPjjRsnQ1oul0_iYvGvWBXjcFZCkYJN-Jj4BsrpvJ3fCC24ZpGo4jrlDNg4hdcQuJGlZZw5exA36O7Z7UXGGIesb9UHI5QIaU9fn5Qmt0igehGKEwGpfU-L_Pl9qPk4OxL96sIt0uvqP9rMvlDQwDQTUbySTCddeDaSQKYo47nnDHdJQYFusDR8k0nRP4kpfe" 
} 
      />
      <div id="mission-vision">
        <MissionVisionBento 
          vision={content?.vision} 
          mission={content?.mission} 
        />
      </div>
      <OurPhilosophy extras={content?.extras} />
      
      <section className="py-20 px-6 bg-surface-container-low/30">
        <div className="max-w-4xl mx-auto">
          <ReviewForm 
            title="آراء عملاء دقة" 
            subtitle="نحن نؤمن بأن نجاحنا يُقاس برضا عملائنا. شاركنا تجربتك لنستمر في تقديم الأفضل."
          />
        </div>
      </section>

      <TeamCallout />
      <FinalCTA />
    </main>
  );
}

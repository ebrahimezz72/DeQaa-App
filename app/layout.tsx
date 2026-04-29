import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import TopAppBar from "./components/layout/TopAppBar";
import BottomNavBar from "./components/layout/BottomNavBar";
import FooterArea from "./components/layout/FooterArea";
import { supabase } from "../supabase/client";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings, error } = await supabase
    .from('site_settings')
    .select('*')
    .eq('is_active', true)
    .single()
  
  if (error) console.error("Error fetching metadata settings:", error)

  return {
    title: settings?.site_name_ar || "مؤسسة دقة للمحاماة",
    description: settings?.extras?.description || "نحن هنا لحماية حقوقك. خبرة قانونية تمتد لعقود في قلب القاهرة، نقدم الدقة التي تستحقها قضيتك.",
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: settings, error } = await supabase
    .from('site_settings')
    .select('*')
    .eq('is_active', true)
    .single()

  if (error) console.error("Error fetching layout settings:", error)

  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} scroll-smooth selection:bg-secondary/30`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TopAppBar siteName={settings?.site_name_ar} />
        {children}
        <FooterArea settings={settings} />
        <BottomNavBar />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
export const revalidate = 60;
import { Cairo } from "next/font/google";
import "./globals.css";
import TopAppBar from "./components/layout/TopAppBar";
import BottomNavBar from "./components/layout/BottomNavBar";
import FooterArea from "./components/layout/FooterArea";
import FloatingContactButton from "./components/layout/FloatingContactButton";
import { supabase } from "../supabase/client";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://deqaa.com";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings, error } = await supabase
    .from('site_settings')
    .select('*')
    .eq('is_active', true)
    .single()
  
  if (error) console.error("Error fetching metadata settings:", error)

  const siteName = settings?.site_name_ar || "مؤسسة دقة للمحاماة";
  const description = settings?.extras?.description || "مؤسسة دقة للمحاماة والاستشارات القانونية - خبرة قانونية تمتد لعقود في قلب الغردقة. نقدم خدمات المحاماة والاستشارات القانونية بدقة واحترافية في جميع التخصصات القانونية.";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${siteName} | محاماة واستشارات قانونية`,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: [
      "محامي", "محاماة", "استشارات قانونية", "مؤسسة دقة", "دقة للمحاماة",
      "محامي في الغردقة", "محامي مصر", "مكتب محاماة", "قانون", "قضايا",
      "محامي جنائي", "محامي أحوال شخصية", "محامي تجاري", "محامي عقاري",
      "استشارة قانونية مجانية", "أفضل محامي", "توكيل محامي",
      "DeQaa", "Deqaa Law Firm", "lawyer Egypt", "legal consultation Hurghada",
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_EG",
      url: SITE_URL,
      siteName,
      title: `${siteName} | محاماة واستشارات قانونية`,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} | محاماة واستشارات قانونية`,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: SITE_URL,
    },
    category: "Law",
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

  const siteName = settings?.site_name_ar || "مؤسسة دقة للمحاماة";

  // JSON-LD Structured Data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteName,
    alternateName: ["DeQaa", "Deqaa Law Firm", "دقة للمحاماة", "مؤسسة دقة"],
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description: settings?.extras?.description || "مؤسسة دقة للمحاماة والاستشارات القانونية - خبرة قانونية تمتد لعقود في قلب الغردقة.",
    address: {
      "@type": "PostalAddress",
      addressLocality: settings?.extras?.city || "الغردقة",
      addressCountry: "EG",
      streetAddress: settings?.address || "",
    },
    telephone: settings?.phone || "",
    email: settings?.email || "",
    sameAs: [
      settings?.extras?.facebook || "",
      settings?.extras?.twitter || "",
      settings?.extras?.linkedin || "",
    ].filter(Boolean),
    areaServed: {
      "@type": "Country",
      name: "مصر",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} scroll-smooth selection:bg-secondary/30`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <TopAppBar siteName={settings?.site_name_ar} />
        {children}
        <FooterArea settings={settings} />
        <BottomNavBar />
        <FloatingContactButton />
      </body>
    </html>
  );
}


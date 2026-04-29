"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TopAppBar({ siteName }: { siteName?: string }) {
  const pathname = usePathname();
  
  const getPageTitle = (path: string) => {
    if (!path || path === "/") return siteName || "مؤسسة دقة للمحاماة";
    if (path === "/about") return "من نحن";
    if (path === "/lawyers") return "فريق المحامين";
    if (path.startsWith("/lawyers/")) return "الملف الشخصي";
    if (path === "/articles") return "المقالات القانونية";
    if (path.startsWith("/articles/")) return "تفاصيل المقال";
    if (path === "/contact") return "اتصل بنا";
    return "مؤسسة دقة للاستشارات";
  };

  const title = getPageTitle(pathname);
  const isHome = !pathname || pathname === "/";

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-surface-container-high shadow-premium transition-all">
      <div className="flex flex-row-reverse justify-between items-center w-full px-5 h-16 max-w-7xl mx-auto">
        
        {/* Right side - Navigation / Branding */}
        <div className="flex items-center min-w-[2.5rem]">
          {!isHome ? (
             <Link href="/" className="w-10 h-10 rounded-full hover:bg-surface-container-high active:scale-90 transition-all flex items-center justify-center border border-outline-variant/10">
               <span className="material-symbols-outlined text-primary font-bold" style={{ fontSize: '20px' }}>arrow_forward</span>
             </Link>
          ) : (
            <div className="flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-xl border border-secondary/20 shadow-inner">
              <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>scale</span>
            </div>
          )}
        </div>
        
        {/* Center - Dynamic Page Title */}
        <div className="flex-1 flex justify-center overflow-hidden">
          <h1 className="text-base md:text-lg font-black text-primary tracking-tight font-headline truncate px-2 animate-fade-in">
            {title}
          </h1>
        </div>

        {/* Left side - Menu Action (Placeholder for now) */}
        <div className="flex items-center justify-start min-w-[2.5rem]">
          <button className="w-10 h-10 text-primary hover:bg-surface-container-high rounded-xl active:scale-95 transition-all flex items-center justify-center border border-outline-variant/5">
            <span className="material-symbols-outlined font-bold" style={{ fontSize: '22px' }}>segment</span>
          </button>
        </div>
        
      </div>
    </header>
  );
}

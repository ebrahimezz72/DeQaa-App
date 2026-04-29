"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "الرئيسية", path: "/", icon: "home" },
    { name: "من نحن", path: "/about", icon: "info" },
    { name: "المحامون", path: "/lawyers", icon: "group" },
    { name: "المقالات", path: "/articles", icon: "article" },
    { name: "اتصل بنا", path: "/contact", icon: "chat" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex flex-row-reverse justify-around items-center px-6 pb-6 pt-3 bg-background/80 backdrop-blur-xl border-t border-surface-container-high shadow-premium rounded-t-[2.5rem]">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link 
            key={item.path}
            href={item.path} 
            className={`flex flex-col items-center justify-center transition-all duration-300 relative group ${
              isActive 
                ? "text-secondary scale-110" 
                : "text-primary/40 hover:text-primary active:scale-90"
            }`}
          >
            {isActive && (
              <span className="absolute -top-1 w-8 h-1 bg-secondary rounded-full animate-fade-in" />
            )}
            <span 
              className={`material-symbols-outlined mb-1 text-2xl transition-all ${isActive ? 'scale-110 drop-shadow-sm' : ''}`} 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}
            >
              {item.icon}
            </span>
            <span className={`text-[10px] font-black tracking-wide ${isActive ? 'opacity-100' : 'opacity-60'}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

import Link from "next/link";

export default function FloatingContactButton() {
  return (
    <Link 
      href="/contact#consultation-form" 
      className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] bg-secondary text-white w-14 h-14 rounded-full shadow-[0_10px_25px_rgba(117,91,0,0.4)] flex items-center justify-center hover:bg-secondary/90 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce group"
      aria-label="تواصل معنا"
    >
      <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform duration-300" style={{fontVariationSettings: "'FILL' 1"}}>
        support_agent
      </span>
    </Link>
  );
}

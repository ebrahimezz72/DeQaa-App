import Image from "next/image";
import Link from "next/link";

export default function AboutHero({ title, aboutText, coverImage }: { title?: string, aboutText?: string, coverImage?: string }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          fill
          priority
          className="object-cover" 
          alt="About Us Hero" 
          src={coverImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnOEc2Lr_sMf-lb9WV0vB2V6RR9xkFT7ID7aRyHk9TLWT-AaAMca5iSrh2vmj-GB27QLPYUFVksfPjjRsnQ1oul0_iYvGvWBXjcFZCkYJN-Jj4BsrpvJ3fCC24ZpGo4jrlDNg4hdcQuJGlZZw5exA36O7Z7UXGGIesb9UHI5QIaU9fn5Qmt0igehGKEwGpfU-L_Pl9qPk4OxL96sIt0uvqP9rMvlDQwDQTUbySTCddeDaSQKYo47nnDHdJQYFusDR8k0nRP4kpfe"}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 flex flex-col items-end text-right">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary text-white rounded-full text-xs font-black tracking-widest uppercase">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></span>
            من نحن
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] drop-shadow-2xl translate-x-2">
            {title || "إرث من الثقة والدقة القانونية"}
          </h1>
          
          <div className="h-1.5 w-32 bg-secondary rounded-full"></div>
          
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-black text-balance">
            {aboutText || "نحن هنا لنضع بين أيديكم خبراتنا القانونية الراسخة، لنحقق العدالة بأعلى معايير الدقة المهنية."}
          </p>
          
          <div className="pt-8 flex flex-row-reverse gap-4">
            <Link href="#mission-vision" className="flex flex-col items-center gap-1 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">اكتشف المزيد</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Aesthetic bottom blur */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent z-20"></div>
    </section>
  );
}

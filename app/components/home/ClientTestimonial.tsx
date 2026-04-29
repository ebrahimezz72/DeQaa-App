"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ClientTestimonial({ lawyers }: { lawyers: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [randomCat, setRandomCat] = useState("");
  const [isFading, setIsFading] = useState(false);

  // تحديث القسم بشكل عشوائي عند تغيير المحامي
  useEffect(() => {
    if (lawyers && lawyers[activeIndex]) {
      const cats = lawyers[activeIndex].lawyer_categories;
      if (cats && cats.length > 0) {
        const randomIndex = Math.floor(Math.random() * cats.length);
        setRandomCat(cats[randomIndex].categories.name);
      } else {
        setRandomCat("محامي مستشار");
      }
    }
  }, [activeIndex, lawyers]);

  useEffect(() => {
    if (!lawyers || lawyers.length <= 1) return;

    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % lawyers.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, [lawyers]);

  if (!lawyers || lawyers.length === 0) return null;
  
  const featured = lawyers[activeIndex];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="bg-primary p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-center text-white relative shadow-2xl border border-white/5 min-h-[320px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 deqaa-pattern pointer-events-none"></div>
        
        {/* Dynamic Content Container */}
        <div className={`transition-all duration-500 transform ${isFading ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
          <div className="flex flex-col items-center">
            {/* Professional Photo */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-secondary/30 p-1 mb-6 relative shadow-2xl transition-all">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image 
                  fill 
                  className="object-cover" 
                  alt={featured.full_name} 
                  src={featured.photo_url || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&h=200&auto=format&fit=crop"} 
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-secondary text-white w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
                <span className="material-symbols-outlined text-[14px] md:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>

            {/* Basic Info */}
            <h5 className="font-black text-2xl md:text-4xl mb-4 tracking-tight leading-tight text-balance px-4">{featured.full_name}</h5>
            
            <div className="flex items-center gap-2 bg-white/10 px-6 py-2.5 rounded-full border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(117,91,0,0.8)]"></span>
              <p className="text-secondary text-xs md:text-base font-black tracking-widest uppercase">
                {randomCat}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Dots - Smaller */}
        {lawyers.length > 1 && (
          <div className="flex justify-center gap-2 mt-10 relative z-10 transition-opacity duration-300">
            {lawyers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx === activeIndex) return;
                  setIsFading(true);
                  setTimeout(() => {
                    setActiveIndex(idx);
                    setIsFading(false);
                  }, 500);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-10 bg-secondary' : 'w-2.5 bg-white/10 hover:bg-white/30'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

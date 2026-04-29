"use client";

import { useState } from "react";
import ProfileAboutContent from "./ProfileAboutContent";
import Link from "next/link";
import Image from "next/image";
import ReviewForm from "../../shared/ReviewForm";

export default function ProfileTabs({ lawyer, articles, testimonials }: { lawyer: any, articles: any[], testimonials: any[] }) {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="mt-10 relative z-10">
      <div className="flex flex-row-reverse border-b border-outline-variant/10 px-6 overflow-x-auto no-scrollbar bg-surface/50 backdrop-blur-sm sticky top-0 md:relative">
        <button 
          type="button"
          onClick={() => setActiveTab("about")}
          className={`flex-1 md:flex-none px-8 py-5 font-black text-sm whitespace-nowrap border-b-4 transition-all duration-300 cursor-pointer ${activeTab === 'about' ? 'text-secondary border-secondary bg-secondary/5' : 'text-on-surface-variant border-transparent hover:text-primary hover:bg-surface-container-low'}`}>
          عن المحامي
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab("articles")}
          className={`flex-1 md:flex-none px-8 py-5 font-black text-sm whitespace-nowrap border-b-4 transition-all duration-300 cursor-pointer ${activeTab === 'articles' ? 'text-secondary border-secondary bg-secondary/5' : 'text-on-surface-variant border-transparent hover:text-primary hover:bg-surface-container-low'}`}>
          المقالات ({articles.length})
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`flex-1 md:flex-none px-8 py-5 font-black text-sm whitespace-nowrap border-b-4 transition-all duration-300 cursor-pointer ${activeTab === 'reviews' ? 'text-secondary border-secondary bg-secondary/5' : 'text-on-surface-variant border-transparent hover:text-primary hover:bg-surface-container-low'}`}>
          الآراء والمراجعات ({testimonials.length})
        </button>
      </div>

      <div className="p-6">
        {activeTab === "about" && (
          <ProfileAboutContent 
            bio={lawyer.bio} 
            languages={lawyer.languages} 
            license={lawyer.license_number} 
            categories={lawyer.lawyer_categories} 
          />
        )}
        
        {activeTab === "articles" && (
          <div className="space-y-4">
            {articles.length > 0 ? (
              articles.map(article => (
                <Link 
                  key={article.id} 
                  href={article.slug ? `/blog/${article.slug}` : `/articles/${article.id}`} 
                  className="flex flex-col md:flex-row-reverse gap-4 p-5 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-all border border-outline-variant/5 shadow-sm active:scale-95"
                >
                  <div className="w-full md:w-32 h-32 relative rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" src={article.featured_image || "/placeholder-article.jpg"} alt={article.title} />
                  </div>
                  <div className="text-right flex-1 flex flex-col justify-center">
                    <h4 className="font-black text-lg text-primary group-hover:text-secondary transition-colors mb-2 leading-tight">{article.title}</h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed opacity-80">{article.excerpt}</p>
                    <div className="mt-3 flex flex-row-reverse items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-widest">
                      <span>اقرأ المقال</span>
                      <span className="material-symbols-outlined text-[12px]">arrow_back</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-12 flex flex-col items-center justify-center text-center text-on-surface-variant bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-4xl mb-2 opacity-50">description</span>
                <p className="font-bold">لا توجد مقالات حالياً</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            {/* List existing reviews */}
            {testimonials.length > 0 && testimonials.map(testimonial => (
              <div key={testimonial.id} className="p-6 bg-surface-container-low rounded-xl text-right">
                <div className="flex flex-row-reverse justify-between items-center mb-4">
                  <h5 className="font-bold text-primary">{testimonial.client_name}</h5>
                  <div className="flex flex-row-reverse gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`material-symbols-outlined text-sm ${i < testimonial.rating ? 'text-secondary' : 'text-outline-variant'}`} style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}

            {/* Empty state message */}
            {testimonials.length === 0 && (
              <div className="p-12 flex flex-col items-center justify-center text-center text-on-surface-variant bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-4xl mb-2 opacity-50">reviews</span>
                <p className="font-bold">لا توجد مراجعات حالياً</p>
              </div>
            )}

            {/* Submission Form */}
            <div className="pt-12 border-t border-outline-variant/10">
              <ReviewForm 
                lawyerId={lawyer.id} 
                title="أضف مراجعة للمحامي" 
                subtitle="رأيك يساعد الآخرين في اختيار المحامي المناسب ويساهم في تطوير خدماتنا."
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

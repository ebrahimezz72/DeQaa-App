"use client";

import LawyerCard from "../lawyers/LawyerCard";
import ArticleFeedCard from "../article/ArticleFeedCard";

export default function CategoryContent({ lawyers, articles }: { lawyers: any[], articles: any[] }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-20 dir-rtl">
      
      {/* Lawyers Section */}
      {lawyers && lawyers.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-secondary text-3xl">groups</span>
            <h2 className="text-3xl font-black text-primary">محامون متخصصون في هذا القسم</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawyers.map(lawyer => (
              <div key={lawyer.id} className="animate-fade-in-up">
                <LawyerCard lawyer={lawyer} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Articles Section */}
      {articles && articles.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-secondary text-3xl">article</span>
            <h2 className="text-3xl font-black text-primary">مقالات ذات صلة</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <div key={article.id} className="animate-fade-in-up">
                <ArticleFeedCard article={article} />
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Empty State if no lawyers or articles */}
      {(!lawyers || lawyers.length === 0) && (!articles || articles.length === 0) && (
        <div className="text-center py-20 bg-surface-container-low rounded-3xl">
          <span className="material-symbols-outlined text-5xl mb-4 text-on-surface-variant/40">info</span>
          <p className="text-xl text-on-surface-variant font-bold">لا يوجد محتوى متاح لهذا القسم حالياً.</p>
        </div>
      )}

    </div>
  );
}

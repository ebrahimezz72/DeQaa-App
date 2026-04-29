"use client";

import { useState } from "react";
import { supabase } from "../../../supabase/client";

export default function ReviewForm({ lawyerId, title = "أخبرنا برأيك", subtitle = "نسعد دائماً بسماع آرائكم وملاحظاتكم لتطوير خدماتنا." }: { lawyerId?: string, title?: string, subtitle?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      client_name: formData.get("client_name") as string,
      client_email: formData.get("client_email") as string || null,
      rating: rating,
      content: formData.get("content") as string,
      lawyer_id: lawyerId || null,
      status: 'pending',
      is_public: false // User DDL says false by default
    };

    const { error: insertError } = await supabase
      .from("testimonials")
      .insert(data);

    if (insertError) {
      console.error("Error submitting testimonial:", insertError);
      setError("حدث خطأ أثناء إرسال رأيك. يرجى المحاولة مرة أخرى.");
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-10 text-center text-green-700 dir-rtl animate-fade-in">
        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="material-symbols-outlined text-3xl">done_all</span>
        </div>
        <h3 className="font-black text-2xl mb-2">شكراً لمشاركتنا رأيك!</h3>
        <p className="text-lg opacity-80">تم استلام تقييمك بنجاح، وسيظهر في الموقع فور اعتماده من الإدارة.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-8 bg-green-600 text-white px-10 py-3 rounded-2xl font-black hover:bg-green-700 transition-all active:scale-95 shadow-md"
        >
          إضافة رأي آخر
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] border border-outline-variant/10 shadow-xl dir-rtl text-right">
      <div className="mb-8">
        <h3 className="text-3xl font-black text-primary mb-3">
          <span className="text-secondary ml-1">#</span> {title}
        </h3>
        <p className="text-on-surface-variant leading-relaxed opacity-70">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Rating Selector */}
        <div className="space-y-4">
          <label className="block text-sm font-black text-primary mr-1">تقييمك</label>
          <div className="flex flex-row gap-2 justify-start">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`p-2 transition-all duration-300 transform active:scale-125 focus:outline-none ${
                  star <= (hover || rating) ? "text-secondary" : "text-outline-variant opacity-30"
                } ${hover === 0 && star <= rating ? "scale-110" : "scale-100"}`}
                onClick={() => {
                  setRating(star);
                  setHover(0); // Clear hover on click for mobile
                }}
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) setHover(star);
                }}
                onMouseLeave={() => {
                  if (window.matchMedia("(hover: hover)").matches) setHover(0);
                }}
                style={{ fontVariationSettings: star <= (hover || rating) ? "'FILL' 1" : "'FILL' 0" }}
              >
                <span className="material-symbols-outlined text-5xl select-none">star</span>
              </button>
            ))}
          </div>
          <p className="text-[10px] font-black text-secondary tracking-widest uppercase opacity-60">
            {rating === 5 ? "رائع جداً" : rating === 4 ? "جيد جداً" : rating === 3 ? "جيد" : rating === 2 ? "مقبول" : "ضعيف"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-black text-primary mr-2">الاسم بالكامل</label>
            <input 
              required 
              name="client_name"
              className="w-full bg-surface-container-high border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white py-4 px-5 text-right outline-none transition-all placeholder-primary/20 font-bold" 
              placeholder="مثال: أحمد محمد علي" 
              type="text" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-black text-primary mr-2">البريد الإلكتروني (اختياري)</label>
            <input 
              name="client_email"
              className="w-full bg-surface-container-high border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white py-4 px-5 text-right outline-none transition-all placeholder-primary/20 font-bold" 
              placeholder="mail@example.com" 
              type="email" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-black text-primary mr-2">رأيك بالتفصيل</label>
          <textarea 
            required 
            name="content"
            className="w-full bg-surface-container-high border-2 border-transparent rounded-3xl focus:border-secondary focus:bg-white py-5 px-6 text-right resize-none outline-none transition-all placeholder-primary/20 font-medium leading-relaxed" 
            placeholder="شاركنا تجربتك القانونية معنا..." 
            rows={5}
          ></textarea>
        </div>

        {error && (
          <div className="bg-red-500/10 text-red-600 p-4 rounded-xl text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined">error</span>
            {error}
          </div>
        )}

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-primary text-white font-black py-5 rounded-[1.5rem] shadow-2xl hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10"></div>
          {loading ? (
            <span className="animate-spin h-6 w-6 border-3 border-white border-t-transparent rounded-full"></span>
          ) : (
            <>
              <span className="group-hover:text-white transition-colors">إرسال تقييمي الآن</span>
              <span className="material-symbols-outlined transition-transform group-hover:-translate-x-2">send</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

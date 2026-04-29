"use client";

import { useState } from "react";
import { supabase } from "../../../supabase/client";

export default function ConsultationForm({ lawyers }: { lawyers: any[] }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      client_name: formData.get("client_name") as string,
      client_phone: formData.get("client_phone") as string,
      client_email: formData.get("client_email") as string,
      case_summary: formData.get("case_summary") as string,
      lawyer_id: formData.get("lawyer_id") || null,
      status: 'pending'
    };

    const { error: insertError } = await supabase
      .from("consultation_requests")
      .insert(data);

    if (insertError) {
      setError("حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.");
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-12 text-center text-green-700 dir-rtl">
        <span className="material-symbols-outlined text-6xl mb-4 block">check_circle</span>
        <h3 className="font-black text-2xl mb-2">تم إرسال طلبك بنجاح</h3>
        <p className="text-lg">سيتواصل معك فريقنا القانوني في أقرب وقت ممكن بمشيئة الله.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-6 bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
        >
          إرسال طلب جديد
        </button>
      </div>
    );
  }

  return (
    <section className="bg-surface-container-lowest p-8 rounded-3xl shadow-lg border border-outline-variant/10 max-w-4xl mx-auto">
      <div className="mb-8 text-right">
        <h3 className="text-2xl font-black text-primary mb-2">طلب استشارة قانونية</h3>
        <p className="text-on-surface-variant text-sm">املأ البيانات التالية وسيتواصل معك أحد مستشارينا في أقرب وقت.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 dir-rtl text-right">
        <div className="space-y-1">
          <label className="block text-sm font-black text-primary mr-1">الاسم الكامل</label>
          <input 
            required 
            name="client_name"
            className="w-full bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-secondary py-4 px-4 text-right outline-none transition-all placeholder-primary/20" 
            placeholder="أدخل اسمك الثلاثي" 
            type="text" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block text-sm font-black text-primary mr-1">رقم الجوال</label>
            <input 
              required 
              name="client_phone"
              className="w-full bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-secondary py-4 px-4 text-right outline-none transition-all placeholder-primary/20" 
              placeholder="05xxxxxxxx" 
              type="tel" 
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-black text-primary mr-1 text-right">البريد الإلكتروني (اختياري)</label>
            <input 
              name="client_email"
              className="w-full bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-secondary py-4 px-4 text-right outline-none transition-all placeholder-primary/20" 
              placeholder="example@mail.com" 
              type="email" 
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-black text-primary mr-1 text-right">المحامي المطلوب *</label>
          <div className="relative group">
            <select 
              required
              name="lawyer_id"
              defaultValue=""
              className="w-full bg-surface-container-high border-2 border-transparent rounded-xl focus:border-secondary focus:bg-white py-4 px-4 text-right appearance-none outline-none transition-all cursor-pointer font-bold text-primary"
            >
              <option value="" disabled>من فضلك اختر المحامي المتخصص</option>
              {lawyers.map(lawyer => (
                <option key={lawyer.id} value={lawyer.id}>{lawyer.full_name}</option>
              ))}
            </select>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40 group-focus-within:text-secondary transition-colors">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-black text-primary mr-1 text-right">ملخص القضية</label>
          <textarea 
            required 
            name="case_summary"
            className="w-full bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-secondary py-4 px-4 text-right resize-none outline-none transition-all placeholder-primary/20" 
            placeholder="اكتب نبذة مختصرة عن استفسارك القانوني..." 
            rows={5}
          ></textarea>
        </div>
        
        {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-secondary text-white font-black py-5 rounded-xl shadow-xl hover:bg-secondary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <span className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            <>
              <span>إرسال الطلب الآن</span>
              <span className="material-symbols-outlined">send</span>
            </>
          )}
        </button>
      </form>
    </section>
  );
}

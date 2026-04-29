"use client";

import { useState } from "react";
import { supabase } from "../../../../supabase/client";

export default function ConsultationForm({ lawyerId }: { lawyerId?: string | null }) {
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
      lawyer_id: lawyerId || null,
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
      <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center text-green-700 dir-rtl">
        <span className="material-symbols-outlined text-4xl mb-2 block">check_circle</span>
        <h4 className="font-bold text-lg mb-2">تم إرسال طلبك بنجاح</h4>
        <p className="text-sm">سيتواصل معك فريقنا القانوني في أقرب وقت ممكن بمشيئة الله.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-4 text-xs font-bold underline cursor-pointer"
        >
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 dir-rtl text-right">
      <div>
        <label htmlFor="client_name" className="block text-[10px] font-bold text-outline-variant uppercase mb-1">الاسم الكامل</label>
        <input 
          required
          id="client_name"
          name="client_name"
          type="text" 
          placeholder="أدخل اسمك الثلاثي"
          className="w-full bg-surface-container text-primary rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary focus:outline-none border-none placeholder-primary/30"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="client_phone" className="block text-[10px] font-bold text-outline-variant uppercase mb-1">رقم الهاتف</label>
          <input 
            required
            id="client_phone"
            name="client_phone"
            type="tel" 
            placeholder="05xxxxxxxx"
            className="w-full bg-surface-container text-primary rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary focus:outline-none border-none placeholder-primary/30"
          />
        </div>
        <div>
          <label htmlFor="client_email" className="block text-[10px] font-bold text-outline-variant uppercase mb-1">البريد الإلكتروني</label>
          <input 
            id="client_email"
            name="client_email"
            type="email" 
            placeholder="name@example.com"
            className="w-full bg-surface-container text-primary rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary focus:outline-none border-none placeholder-primary/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="case_summary" className="block text-[10px] font-bold text-outline-variant uppercase mb-1">ملخص القضية</label>
        <textarea 
          required
          id="case_summary"
          name="case_summary"
          rows={4}
          placeholder="اشرح موجزاً لموضوع الاستشارة المطلوبة..."
          className="w-full bg-surface-container text-primary rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary focus:outline-none border-none placeholder-primary/30 resize-none"
        ></textarea>
      </div>

      {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

      <button 
        disabled={loading}
        type="submit"
        className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-base flex flex-row-reverse items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
      >
        {loading ? (
          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
        ) : (
          <>
            <span className="material-symbols-outlined">send</span>
            إرسال الطلب الآن
          </>
        )}
      </button>
    </form>
  );
}

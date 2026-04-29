import ConsultationForm from "./ConsultationForm";

export default function ConsultationSection({ lawyerId, lawyerName, lawyerPhone }: { lawyerId: string, lawyerName: string, lawyerPhone?: string }) {
  // تظبيط رقم الهاتف للواتساب (تلقائياً لمصر إذا لم يوجد كود دولي)
  let cleanPhone = lawyerPhone?.replace(/\s+/g, '') || '';
  if (cleanPhone && !cleanPhone.startsWith('+')) {
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '2' + cleanPhone; // 010... -> 2010...
    } else {
      cleanPhone = '20' + cleanPhone; // 10... -> 2010...
    }
  } else {
    cleanPhone = cleanPhone.replace('+', ''); // إزالة علامة + للرابط
  }

  return (
    <section className="sticky top-24">
      <div className="bg-surface-container-high rounded-3xl p-8 shadow-lg border border-outline-variant">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-secondary text-3xl">event_available</span>
          </div>
          <h3 className="text-xl font-black text-primary mb-2">طلب استشارة خاصة</h3>
          <p className="text-sm text-on-surface-variant">احضر بيانات قضيتك وسيتواصل معك {lawyerName} في أقرب وقت ممكن.</p>
        </div>
        
        <ConsultationForm lawyerId={lawyerId} />
        
        <div className="mt-8 pt-8 border-t border-outline-variant text-center">
          <p className="text-xs text-on-surface-variant mb-4">أو تواصل مباشرة عبر</p>
          <div className="flex justify-center gap-4">
            <a 
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`السلام عليكم، أود الحصول على استشارة قانونية من الأستاذ ${lawyerName}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a 
              href={`tel:${lawyerPhone}`}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

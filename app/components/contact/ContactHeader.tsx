export default function ContactHeader() {
  return (
    <section className="relative py-8 overflow-hidden rounded-xl bg-primary-container text-on-primary-container p-8 shadow-xl">
      <div className="pattern-overlay absolute inset-0 opacity-20"></div>
      <div className="relative z-10 text-right">
        <span className="text-secondary font-bold text-sm block mb-2">تواصل معنا</span>
        <h2 className="text-3xl font-bold text-surface mb-4 leading-tight">نحن هنا للدفاع عن حقوقك بدقة واحترافية</h2>
        <p className="text-on-primary-container/80 text-lg leading-relaxed">فريقنا القانوني جاهز لتقديم الاستشارات المتخصصة والتمثيل القانوني الأمثل.</p>
      </div>
    </section>
  );
}

export default function PricingPackages() {
  return (
    <section className="py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary font-headline mb-4">خدماتنا وأسعارنا</h2>
        <div className="w-16 h-1.5 bg-secondary rounded-full mx-auto"></div>
      </div>
      <div className="space-y-8 max-w-md mx-auto">
        <div className="bg-surface-container-lowest p-8 rounded-2xl border-t-4 border-primary shadow-sm">
          <h3 className="text-xl font-bold mb-2">استشارة أولية</h3>
          <div className="text-3xl font-black text-primary mb-6">٥٠٠ ج.م</div>
          <ul className="space-y-4 mb-8 text-on-surface-variant">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span>
              <span>جلسة لمدة ٤٥ دقيقة</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span>
              <span>دراسة أولية للمستندات</span>
            </li>
          </ul>
          <button className="w-full py-3 border border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-colors">احجز الآن</button>
        </div>
        <div className="bg-primary p-8 rounded-2xl shadow-xl transform scale-105">
          <h3 className="text-xl font-bold mb-2 text-white">الباقة الذهبية</h3>
          <div className="text-3xl font-black text-secondary-container mb-6">٢٥٠٠ ج.م</div>
          <ul className="space-y-4 mb-8 text-white/80">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container text-sm" data-icon="check_circle" data-weight="fill">check_circle</span>
              <span>متابعة شهرية كاملة</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container text-sm" data-icon="check_circle" data-weight="fill">check_circle</span>
              <span>صياغة ٣ عقود قانونية</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container text-sm" data-icon="check_circle" data-weight="fill">check_circle</span>
              <span>استشارات هاتفية غير محدودة</span>
            </li>
          </ul>
          <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold">اشترك الآن</button>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-2xl border-t-4 border-outline-variant shadow-sm opacity-80">
          <h3 className="text-xl font-bold mb-2">تمثيل قضائي</h3>
          <div className="text-3xl font-black text-primary mb-6">يحدد لاحقاً</div>
          <ul className="space-y-4 mb-8 text-on-surface-variant">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span>
              <span>حضور الجلسات القضائية</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle">check_circle</span>
              <span>إعداد المذكرات الدفاعية</span>
            </li>
          </ul>
          <button className="w-full py-3 border border-outline text-outline rounded-xl font-bold">تواصل معنا</button>
        </div>
      </div>
    </section>
  );
}

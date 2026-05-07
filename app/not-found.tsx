import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 deqaa-pattern opacity-30" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative mb-6">
          <span className="text-[10rem] md:text-[14rem] font-black text-primary/5 leading-none select-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl md:text-8xl text-secondary/80" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
              search_off
            </span>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-black text-primary mb-4 font-headline">
          هذه الصفحة غير موجودة
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 leading-relaxed max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها إلى عنوان آخر.
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="bg-primary text-on-primary px-8 py-3.5 rounded-2xl font-bold text-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">home</span>
            العودة للرئيسية
          </Link>
          <Link
            href="/contact"
            className="bg-surface-container-high text-primary px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-surface-container-highest transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 border border-outline-variant"
          >
            <span className="material-symbols-outlined text-lg">support_agent</span>
            تواصل معنا
          </Link>
        </div>

        {/* Developer Contact Card */}
        <div className="bg-surface-container-low/80 backdrop-blur-md rounded-3xl p-8 border border-outline-variant/50 shadow-lg max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary text-xl">engineering</span>
            <h2 className="text-sm font-bold text-on-surface-variant">لمزيد من التفاصيل تواصل مع المطور</h2>
          </div>
          
          <div className="mb-5">
            <h3 className="text-lg font-black text-primary font-headline">إبراهيم عز الدين</h3>
            <p className="text-xs text-on-surface-variant">مطور ويب حر — تصميم وتطوير المواقع الإلكترونية</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/201015066288?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D9%85%D9%88%D9%82%D8%B9%20%D8%AF%D9%82%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 border border-[#25D366]/20"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              واتساب
            </a>

            {/* Email */}
            <a
              href="mailto:ebrahimezz72@gmail.com"
              className="flex items-center justify-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 border border-primary/10"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              البريد الإلكتروني
            </a>

            {/* Portfolio */}
            <a
              href="https://portfolio-v2-tau-three-77.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary/10 hover:bg-secondary/20 text-secondary px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 border border-secondary/20"
            >
              <span className="material-symbols-outlined text-lg">web</span>
              معرض الأعمال
            </a>

            {/* Phone */}
            <a
              href="tel:+201015066288"
              className="flex items-center justify-center gap-2 bg-tertiary/10 hover:bg-tertiary/20 text-tertiary px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 border border-tertiary/20"
              dir="ltr"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              01015066288
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

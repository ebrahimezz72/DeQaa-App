export default function FooterArea({ settings }: { settings: any }) {
  const siteName = settings?.site_name_ar || "مؤسسة دقة للمحاماة";
  const email = settings?.email || "info@deqaa.com";
  const phone = settings?.phone || "0123456789";

  return (
    <footer className="w-full pt-16 pb-[100px] px-8 bg-[#021549] dark:bg-[#010a26] text-right mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right dir-rtl">
        <div>
          <div className="text-white text-xl font-bold mb-4 font-headline">{siteName}</div>
          <p className="text-[#faf9f6]/80 text-sm leading-relaxed mb-6">
            {settings?.extras?.description || "نسخر خبراتنا القانونية لتحقيق العدالة وحماية مصالح عملائنا بأعلى معايير الدقة والنزاهة."}
          </p>
          <div className="text-[#faf9f6]/60 text-xs space-y-1">
            <p>البريد: {email}</p>
            <p>الهاتف: {phone}</p>
          </div>
        </div>
        <div>
          <h4 className="text-secondary font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-3">
            <li><a className="text-[#faf9f6]/80 hover:text-[#755b00] transition-all text-sm block" href="/about">من نحن</a></li>
            <li><a className="text-[#faf9f6]/80 hover:text-[#755b00] transition-all text-sm block" href="/contact">تواصل معنا</a></li>
            <li><a className="text-[#faf9f6]/80 hover:text-[#755b00] transition-all text-sm block" href="/privacy">سياسة الخصوصية</a></li>
            <li><a className="text-[#faf9f6]/80 hover:text-[#755b00] transition-all text-sm block" href="/terms">شروط الاستخدام</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-secondary font-bold mb-4">النشرة البريدية</h4>
          <div className="flex gap-2">
            <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-bold active:scale-95 transition-transform">اشترك</button>
            <input className="bg-white/10 border-none rounded-lg text-white text-right px-4 flex-1 text-sm focus:ring-2 focus:ring-secondary focus:outline-none placeholder-white/50" placeholder="بريدك الإلكتروني" type="email" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 text-center">
        <p className="text-[#faf9f6]/60 text-sm font-['Cairo'] leading-relaxed mb-4">جميع الحقوق محفوظة © ٢٠٢٤ {siteName}</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[#faf9f6]/50 text-xs font-['Cairo'] bg-white/5 py-3 px-6 rounded-2xl w-fit mx-auto border border-white/5">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-secondary">code</span>
            تصميم وتطوير: 
            <a href="https://portfolio-v2-tau-three-77.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary font-bold transition-colors">
              إبراهيم عز الدين (مطور حر)
            </a>
          </span>
          <span className="hidden md:inline text-white/20">•</span>
          <a href="https://portfolio-v2-tau-three-77.vercel.app/projects" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center gap-1 text-white">
            <span className="material-symbols-outlined text-[14px]">web</span>
            معرض الأعمال
          </a>
          <span className="hidden md:inline text-white/20">•</span>
          <a href="mailto:ebrahimezz72@gmail.com" className="hover:text-white transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">mail</span>
            ebrahimezz72@gmail.com
          </a>
          <span className="hidden md:inline text-white/20">•</span>
          <a href="https://wa.me/201015066288?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D9%88%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D9%82%D8%B9%20%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-1 text-white" dir="ltr">
            <span className="material-symbols-outlined text-[14px]">chat</span>
            01015066288
          </a>
        </div>
      </div>
    </footer>
  );
}

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
        <p className="text-[#faf9f6]/60 text-xs font-['Cairo'] leading-relaxed">جميع الحقوق محفوظة © ٢٠٢٤ {siteName}</p>
      </div>
    </footer>
  );
}

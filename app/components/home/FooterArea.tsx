export default function FooterArea() {
  return (
    <footer className="w-full pt-16 pb-[100px] px-8 bg-[#021549] dark:bg-[#010a26] text-right">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right dir-rtl mb-16">
        <div>
          <div className="text-white text-xl font-bold mb-4 font-headline">مؤسسة دقة</div>
          <p className="text-[#faf9f6]/60 text-sm leading-relaxed mb-6">نحن نؤمن بأن الدقة هي مفتاح العدالة. مكتبنا يجمع بين التراث القانوني والحلول العصرية.</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm" data-icon="phone">phone</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-secondary font-bold mb-4">روابط سريعة</h4>
          <a className="block text-[#faf9f6]/80 hover:text-[#755b00] transition-all" href="#">من نحن</a>
          <a className="block text-[#faf9f6]/80 hover:text-[#755b00] transition-all" href="#">تواصل معنا</a>
          <a className="block text-[#faf9f6]/80 hover:text-[#755b00] transition-all" href="#">سياسة الخصوصية</a>
          <a className="block text-[#faf9f6]/80 hover:text-[#755b00] transition-all" href="#">شروط الاستخدام</a>
        </div>
        <div>
          <h4 className="text-secondary font-bold mb-4">موقعنا</h4>
          <p className="text-[#faf9f6]/80 text-sm mb-4">١٢ شارع التحرير، الدقي، الجيزة، مصر</p>
          <div className="rounded-xl overflow-hidden h-32 w-full bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-[#faf9f6]/40 text-xs">خريطة الموقع</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-[#faf9f6]/40 text-xs font-['Cairo'] leading-relaxed">جميع الحقوق محفوظة © ٢٠٢٤ مؤسسة دقة للمحاماة</p>
      </div>
    </footer>
  );
}

export default function OurPhilosophy({ extras }: { extras?: any }) {
  // Can use extras to customize counts or text if needed in the future
  const experienceYears = extras?.experience_years || "١٥";
  const successRate = extras?.success_rate || "٩٨٪";

  return (
    <section className="py-20 px-8 bg-surface">
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary mb-2">فلسفتنا العملية</h2>
        <div className="w-16 h-1 bg-secondary"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10 hover-lift transition-all group">
          <div className="flex-shrink-0 w-16 h-16 bg-white shadow-md flex items-center justify-center rounded-2xl mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">balance</span>
          </div>
          <h4 className="text-xl font-black text-primary mb-3">العدالة الناجزة</h4>
          <p className="text-on-surface-variant leading-relaxed">
            نؤمن أن التأخير في العدالة هو حرمان منها، لذلك نعمل بدقة وسرعة لإنهاء الإجراءات القانونية.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10 hover-lift transition-all group">
          <div className="flex-shrink-0 w-16 h-16 bg-white shadow-md flex items-center justify-center rounded-2xl mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">handshake</span>
          </div>
          <h4 className="text-xl font-black text-primary mb-3">الشراكة مع الموكل</h4>
          <p className="text-on-surface-variant leading-relaxed">
            نتعامل مع قضايا موكلينا كأنها قضايانا الخاصة، ونبني علاقة أساسها الشفافية والوضوح الدائم.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10 hover-lift transition-all group">
          <div className="flex-shrink-0 w-16 h-16 bg-white shadow-md flex items-center justify-center rounded-2xl mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">verified_user</span>
          </div>
          <h4 className="text-xl font-black text-primary mb-3">النزاهة والسرية</h4>
          <p className="text-on-surface-variant leading-relaxed">
            ميثاق شرفنا المهني هو الحجر الأساس الذي تقوم عليه مؤسستنا، وسرية معلوماتكم هي أولويتنا القصوى.
          </p>
        </div>
      </div>
    </section>
  );
}

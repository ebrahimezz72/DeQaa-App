export default function ProfileAboutContent({ bio, categories, languages, license }: { bio?: string, categories?: any[], languages?: string[], license?: string }) {
  return (
    <div className="p-6 space-y-12 text-right dir-rtl">
      {/* Biography */}
      <div className="animate-fade-in-up">
        <h3 className="text-xl font-black text-primary mb-4 flex items-center justify-start gap-2">
          <span className="w-2 h-8 bg-secondary rounded-full"></span>
          النبذة المهنية
        </h3>
        <p className="text-on-surface-variant leading-relaxed text-lg font-medium opacity-90">
          {bio || "لا تتوفر نبذة مهنية حالياً."}
        </p>
      </div>

      {/* Specialty Areas */}
      <div className="animate-fade-in-up">
        <h3 className="text-xl font-black text-primary mb-6 flex items-center justify-start gap-2">
          <span className="w-2 h-8 bg-secondary rounded-full"></span>
          مجالات الاختصاص
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories && categories.length > 0 ? (
            categories.map((cat: any) => (
              <div key={cat.categories.id} className="bg-white p-6 rounded-2xl border border-surface-container-high shadow-soft flex flex-col items-center hover-lift">
                <span className="material-symbols-outlined text-secondary text-3xl mb-3">balance</span>
                <p className="text-sm font-black text-primary">{cat.categories.name}</p>
              </div>
            ))
          ) : (
            <p className="text-on-surface-variant italic">لم يتم تحديد تخصصات بعد.</p>
          )}
        </div>
      </div>

      {/* Professional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
        <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 text-right">
          <h4 className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-2">اللغات</h4>
          <p className="font-bold text-primary">
            {languages && languages.length > 0 ? languages.join('، ') : "العربية"}
          </p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 text-right">
          <h4 className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-2">رقم الترخيص</h4>
          <p className="font-bold text-primary">
            {license || "غير متوفر"}
          </p>
        </div>
      </div>
    </div>
  );
}

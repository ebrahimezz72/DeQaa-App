export default function ProfileContactStrip({ lawyer }: { lawyer: any }) {
  return (
    <section className="px-6 mt-8 max-w-7xl mx-auto">
      <div className="bg-surface-container-low rounded-xl p-6 shadow-sm border-r-4 border-secondary text-right">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 flex-row-reverse justify-start">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">mail</span>
            </div>
            <div>
              <p className="text-[10px] text-outline uppercase font-bold">البريد الإلكتروني</p>
              <p className="text-sm font-bold text-primary">{lawyer.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-row-reverse justify-start">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">call</span>
            </div>
            <div>
              <p className="text-[10px] text-outline uppercase font-bold">رقم التواصل</p>
              <p className="text-sm font-bold text-primary" dir="ltr">{lawyer.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

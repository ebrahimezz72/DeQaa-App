export default function ContactInfoBento({ settings }: { settings: any }) {
  if (!settings) return null;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="bg-surface-container-low p-6 rounded-2xl flex flex-row-reverse items-start gap-4 transition-all hover:bg-surface-container-high group">
        <div className="bg-secondary/10 p-3 rounded-lg text-secondary group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">call</span>
        </div>
        <div className="text-right flex-1">
          <h3 className="font-black text-primary mb-1">رقم الهاتف</h3>
          <p className="text-on-surface-variant text-sm font-bold" dir="ltr">{settings.phone || "+966 XX XXX XXXX"}</p>
        </div>
      </div>
      
      <div className="bg-surface-container-low p-6 rounded-2xl flex flex-row-reverse items-start gap-4 transition-all hover:bg-surface-container-high group">
        <div className="bg-secondary/10 p-3 rounded-lg text-secondary group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">mail</span>
        </div>
        <div className="text-right flex-1">
          <h3 className="font-black text-primary mb-1">البريد الإلكتروني</h3>
          <p className="text-on-surface-variant text-sm font-bold">{settings.email || "info@deqaa.com"}</p>
        </div>
      </div>
      
      <div className="bg-surface-container-low p-6 rounded-2xl flex flex-row-reverse items-start gap-4 transition-all hover:bg-surface-container-high group md:col-span-2">
        <div className="bg-secondary/10 p-3 rounded-lg text-secondary group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">location_on</span>
        </div>
        <div className="text-right flex-1">
          <h3 className="font-black text-primary mb-1">المقر الرئيسي</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">{settings.address || "حي الملقا، طريق الملك فهد، برج الدقة الإداري، الرياض"}</p>
        </div>
      </div>
    </section>
  );
}

export default function PricePackages({ packages }: { packages: any[] }) {
  if (!packages || packages.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-primary font-headline mb-2">باقات الخدمات الاستشارية</h2>
        <div className="w-16 h-1.5 bg-secondary rounded-full mx-auto"></div>
        <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto text-sm">اختر الباقة المناسبة لاحتياجاتك القانونية، بأسعار شفافة وخدمات متميزة.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant hover:border-secondary transition-all flex flex-col items-center text-center shadow-sm hover:shadow-lg group">
            <h3 className="text-xl font-bold text-primary mb-2">{pkg.name}</h3>
            <p className="text-sm text-on-surface-variant mb-6 min-h-[3rem]">{pkg.description}</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-secondary">{pkg.price}</span>
              <span className="text-primary font-bold mr-1">{pkg.currency}</span>
              <span className="text-on-surface-variant text-sm block mt-1">/ {pkg.duration}</span>
            </div>
            
            <ul className="space-y-3 mb-8 w-full text-right dir-rtl">
              {pkg.features?.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-auto w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-container hover:text-primary transition-colors active:scale-95">
              طلب الباقة
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

export default function LocationMap({ mapUrl }: { mapUrl?: string }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-primary">موقعنا على الخريطة</h3>
        {mapUrl && (
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-black cursor-pointer hover:underline transition-all flex items-center gap-1">
            <span>افتح في خرائط جوجل</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        )}
      </div>
      
      <div className="w-full h-64 rounded-xl overflow-hidden grayscale contrast-125 relative">
        <Image 
          fill 
          className="object-cover" 
          alt="Map view of Riyadh" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqLe26YB28xt6Od88QYtZhVhYH1RF9IHd46rTaI2YSgtnzIJP-ANeM0wdo9x8Vd-4RcgNPvI_DRWQnEc5Y8K3C5pc5znuKsdJLebM7GQ9q_xWaK2k7ID5sjkf96x_N1_dCs9YLo0ttUw2nfzsHLtHVY1k3T3hZ0H1eEZMBJJjEI1SddJN66glg5vI0iuQJaUdMytr-JyiHo_VuQWOX966m7tXHWh-3gGucWsN74Al-353Zt4u3_5F7W6WXsK8qshYKlq2C1Akkg61s" 
        />
        <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/30 rounded-full animate-ping"></div>
            <div className="bg-secondary p-3 rounded-full shadow-2xl relative z-10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MissionVisionBento({ vision, mission }: { vision?: string, mission?: string }) {
  return (
    <section className="py-20 px-8 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        
        {/* Mission */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_40px_rgba(2,21,73,0.04)] relative overflow-hidden group text-right flex flex-col items-end">
          <div className="absolute -top-4 -left-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-9xl text-primary font-bold">flag</span>
          </div>
          <div className="relative z-10 w-full">
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-6 ml-auto">
              <span className="material-symbols-outlined text-secondary">flag</span>
            </div>
            <h3 className="text-xl font-black text-primary mb-4">رسالتنا</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {mission || "تقديم حلول قانونية مبتكرة وشاملة تضمن حماية الحقوق وتعزز سيادة القانون، مع الالتزام التام بالسرية والنزاهة المطلقة تجاه كل موكل."}
            </p>
          </div>
        </div>
        
        {/* Vision */}
        <div className="bg-primary p-8 rounded-2xl shadow-[0_20px_40px_rgba(2,21,73,0.12)] relative overflow-hidden text-right flex flex-col items-end">
          <div className="absolute -bottom-8 -right-8 opacity-10">
            <span className="material-symbols-outlined text-[10rem] text-white">visibility</span>
          </div>
          <div className="relative z-10 w-full">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg mb-6 ml-auto">
              <span className="material-symbols-outlined text-white">visibility</span>
            </div>
            <h3 className="text-xl font-black text-white mb-4">رؤيتنا</h3>
            <p className="text-white/80 leading-relaxed">
              {vision || "أن نكون المرجع القانوني الأول والأكثر موثوقية في المنطقة، من خلال تطوير ممارساتنا القانونية باستمرار لخدمة التطور الاقتصادي والعدلي."}
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

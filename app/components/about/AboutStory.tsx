import Image from "next/image";

export default function AboutStory({ text, images }: { text?: string, images?: string[] }) {
  return (
    <section className="py-20 px-8 bg-surface text-right max-w-7xl mx-auto">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-4 flex-row-reverse justify-end">
              <div className="h-px w-12 bg-secondary"></div>
              <h2 className="text-3xl font-black text-primary">قصتنا وهدفنا</h2>
            </div>
            
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg text-right">
              {text ? (
                text.split('\n').map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <>
                  <p>تأسست مؤسسة دقة للمحاماة في قلب العاصمة لتكون منارة قانونية رائدة، تجمع بين التقاليد القضائية العريقة وأحدث الممارسات القانونية المعاصرة.</p>
                  <p>على مر السنين، كرسنا جهودنا لحماية مصالح عملائنا من خلال رؤية قانونية ثاقبة وفريق عمل يتسم بالالتزام الأخلاقي والاحترافية العالية، مما جعل "الدقة" اسماً مرادفاً للثقة في الوسط القانوني المصري.</p>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface-container-low rounded-2xl border-r-4 border-secondary shadow-sm">
                <div className="text-3xl font-black text-primary mb-1">+١٥</div>
                <div className="text-sm text-secondary font-bold">عاماً من الخبرة</div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl border-r-4 border-secondary shadow-sm">
                <div className="text-3xl font-black text-primary mb-1">+٥٠٠</div>
                <div className="text-sm text-secondary font-bold">قضية ناجحة</div>
              </div>
            </div>
          </div>

          {/* Visual side (Image Only) */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white/10">
              <Image 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Our Story" 
                src={images?.[0] || "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop"} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

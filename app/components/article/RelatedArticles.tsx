import Image from "next/image";

export default function RelatedArticles() {
  return (
    <section className="px-6 py-12 border-t border-outline-variant/10">
      <h3 className="text-lg font-bold text-primary mb-6 text-right">مقالات ذات صلة</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 bg-surface-container-low p-3 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer">
          <div className="w-20 h-20 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0 relative">
            <Image 
              fill
              className="object-cover" 
              alt="Legal book" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0eTyhqHBCcmiBBMTShHJmuOddeomISF249SgigieSOC3jjLQUHV8lAb6nbvEplIjuq0HkLuTnB-23ittjLgGsuDIOav_9P6Pc4HI-b6NQi8dp0IAnnDBuXp8DRDboypYjn7C58CLn9EjDvJkbWOs51kf_DY8PYgaaIW1pWXLQrdAtPuWuYcY_UBfvO-4nyC__PIB3bh46ag-L7Per2YJaivr9ARr1oRIA74atTKex6GEPAIE2B4nEBUO6DHGFUkwbB7kd_pmV2mB0"
            />
          </div>
          <div className="text-right flex-1">
            <h5 className="font-bold text-sm text-primary line-clamp-2">تعديلات قانون الشركات الجديد لعام ٢٠٢٤</h5>
            <p className="text-[10px] text-on-surface-variant mt-1">منذ يومين • ٤ دقائق قراءة</p>
          </div>
        </div>
      </div>
    </section>
  );
}

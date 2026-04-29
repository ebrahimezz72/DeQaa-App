export default function FirmStats() {
  return (
    <section className="bg-surface-container-low py-12 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl text-center flex flex-col items-center">
          <span className="text-3xl font-black text-secondary font-headline">٢٥+</span>
          <span className="text-sm text-on-surface-variant font-bold">محامٍ متخصص</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl text-center flex flex-col items-center">
          <span className="text-3xl font-black text-secondary font-headline">١٥</span>
          <span className="text-sm text-on-surface-variant font-bold">سنة خبرة</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl text-center flex flex-col items-center">
          <span className="text-3xl font-black text-secondary font-headline">١٢٠٠+</span>
          <span className="text-sm text-on-surface-variant font-bold">قضية ناجحة</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl text-center flex flex-col items-center">
          <span className="text-3xl font-black text-secondary font-headline">٨٠٠+</span>
          <span className="text-sm text-on-surface-variant font-bold">عميل سعيد</span>
        </div>
      </div>
    </section>
  );
}

export default function SearchAndFilter() {
  return (
    <section className="space-y-6 mb-10">
      {/* Search Input */}
      <div className="relative">
        <input 
          className="w-full bg-surface-container-high border-none rounded-xl py-4 pr-12 pl-4 text-on-surface focus:ring-0 focus:border-b-2 focus:border-secondary transition-all" 
          placeholder="البحث عن محامي..." 
          type="text"
        />
        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary">search</span>
      </div>
      
      {/* Filter Chips */}
      <div className="flex overflow-x-auto gap-3 hide-scrollbar py-2">
        <button className="bg-secondary text-white px-6 py-2 rounded-full whitespace-nowrap font-bold text-sm shadow-lg shadow-secondary/20">الكل</button>
        <button className="bg-surface-container-highest text-on-surface px-6 py-2 rounded-full whitespace-nowrap font-bold text-sm hover:bg-secondary/10 transition-colors">قضايا جنائية</button>
        <button className="bg-surface-container-highest text-on-surface px-6 py-2 rounded-full whitespace-nowrap font-bold text-sm hover:bg-secondary/10 transition-colors">قضايا تجارية</button>
        <button className="bg-surface-container-highest text-on-surface px-6 py-2 rounded-full whitespace-nowrap font-bold text-sm hover:bg-secondary/10 transition-colors">أحوال شخصية</button>
        <button className="bg-surface-container-highest text-on-surface px-6 py-2 rounded-full whitespace-nowrap font-bold text-sm hover:bg-secondary/10 transition-colors">عقارات</button>
      </div>
    </section>
  );
}

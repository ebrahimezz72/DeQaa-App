export default function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 dark:bg-[#021549]/80 backdrop-blur-xl">
      <div className="flex flex-row-reverse justify-between items-center w-full px-6 py-4 max-w-full mx-auto">
        <div className="text-2xl font-bold text-[#021549] dark:text-[#faf9f6] tracking-tight font-headline">مؤسسة دقة للمحاماة</div>
        <div className="flex items-center gap-4">
          <button className="text-[#021549] dark:text-[#faf9f6]">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
        <div className="text-[#021549] dark:text-[#faf9f6]">
          <span className="material-symbols-outlined" data-icon="gavel">gavel</span>
        </div>
      </div>
    </header>
  );
}

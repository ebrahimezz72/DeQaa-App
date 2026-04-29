import Link from "next/link";

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex flex-row-reverse justify-around items-center px-4 pb-4 pt-2 bg-[#faf9f6] dark:bg-[#021549] border-t border-[#1b2b5e]/10 shadow-[0_-4px_20px_rgba(2,21,73,0.08)] rounded-t-2xl">
      <Link href="/" className="flex flex-col items-center justify-center text-[#755b00] bg-[#755b00]/10 rounded-xl px-3 py-1 scale-95 duration-150">
        <span className="material-symbols-outlined" data-icon="home" data-weight="fill">home</span>
        <span className="font-['Cairo'] text-[10px] font-bold">الرئيسية</span>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center text-[#021549]/60 dark:text-[#faf9f6]/60 hover:bg-[#755b00]/5 transition-colors">
        <span className="material-symbols-outlined" data-icon="group">group</span>
        <span className="font-['Cairo'] text-[10px] font-bold">المحامون</span>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center text-[#021549]/60 dark:text-[#faf9f6]/60 hover:bg-[#755b00]/5 transition-colors">
        <span className="material-symbols-outlined" data-icon="description">description</span>
        <span className="font-['Cairo'] text-[10px] font-bold">المقالات</span>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center text-[#021549]/60 dark:text-[#faf9f6]/60 hover:bg-[#755b00]/5 transition-colors">
        <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
        <span className="font-['Cairo'] text-[10px] font-bold">اتصل بنا</span>
      </Link>
    </nav>
  );
}

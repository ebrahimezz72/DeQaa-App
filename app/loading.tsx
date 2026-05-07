export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-md">
      <div className="relative w-20 h-20">
        {/* Outer rotating circle */}
        <div className="absolute inset-0 border-4 border-primary/10 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
        
        {/* Inner pulsing logo/dot */}
        <div className="absolute inset-4 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Arabic Loading Text */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <h2 className="text-xl font-black text-primary font-headline animate-pulse">جاري التحميل...</h2>
        <p className="text-sm text-on-surface-variant font-bold opacity-70">لحظات ونكون معك</p>
      </div>

      {/* Decorative dots */}
      <div className="mt-6 flex gap-2">
        <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-[bounce_1s_infinite_100ms]"></div>
        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-[bounce_1s_infinite_200ms]"></div>
        <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-[bounce_1s_infinite_300ms]"></div>
      </div>
    </div>
  );
}

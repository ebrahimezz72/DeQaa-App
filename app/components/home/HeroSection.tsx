import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[618px] flex items-center overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 z-0 opacity-20 deqaa-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10"></div>
      <Image 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnOEc2Lr_sMf-lb9WV0vB2V6RR9xkFT7ID7aRyHk9TLWT-AaAMca5iSrh2vmj-GB27QLPYUFVksfPjjRsnQ1oul0_iYvGvWBXjcFZCkYJN-Jj4BsrpvJ3fCC24ZpGo4jrlDNg4hdcQuJGlZZw5exA36O7Z7UXGGIesb9UHI5QIaU9fn5Qmt0igehGKEwGpfU-L_Pl9qPk4OxL96sIt0uvqP9rMvlDQwDQTUbySTCddeDaSQKYo47nnDHdJQYFusDR8k0nRP4kpfe" 
        alt="Courthouse interior" 
        fill
        className="object-cover z-0"
        priority
      />
      <div className="container mx-auto px-6 relative z-20 text-right">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight font-headline">
            نحن هنا <span className="text-secondary">لحماية</span> حقوقك
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light max-w-2xl ml-auto leading-relaxed">
            خبرة قانونية تمتد لعقود في قلب القاهرة، نقدم الدقة والاحترافية التي تستحقها قضيتك.
          </p>
          <div className="flex flex-col gap-4">
            <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(117,91,0,0.3)] hover:shadow-[0_25px_50px_rgba(117,91,0,0.4)] active:scale-95 transition-all w-max hover:-translate-y-1">
              احجز استشارة مجانية الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

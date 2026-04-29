import Image from "next/image";

export default function ArticleHero({ article }: { article: any }) {
  if (!article) return null;

  return (
    <section className="relative w-full h-[397px] overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl mb-8">
      <Image 
        fill
        className="object-cover" 
        alt={article.title} 
        src={article.featured_image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDdGnOEc2Lr_sMf-lb9WV0vB2V6RR9xkFT7ID7aRyHk9TLWT-AaAMca5iSrh2vmj-GB27QLPYUFVksfPjjRsnQ1oul0_iYvGvWBXjcFZCkYJN-Jj4BsrpvJ3fCC24ZpGo4jrlDNg4hdcQuJGlZZw5exA36O7Z7UXGGIesb9UHI5QIaU9fn5Qmt0igehGKEwGpfU-L_Pl9qPk4OxL96sIt0uvqP9rMvlDQwDQTUbySTCddeDaSQKYo47nnDHdJQYFusDR8k0nRP4kpfe"} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
      <div className="absolute bottom-8 right-8 left-8 text-right">
        <span className="inline-block bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-black mb-4 shadow-lg">
          {article.category_name || "مقال قانوني"}
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight shadow-text">
          {article.title}
        </h1>
      </div>
    </section>
  );
}

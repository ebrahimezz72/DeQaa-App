import ArticleFeedCard from "./ArticleFeedCard";

export default function ArticleFeedList({ articles }: { articles: any[] }) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map(article => (
        <ArticleFeedCard key={article.id} article={article} />
      ))}
      {articles.length === 0 && (
        <div className="col-span-full py-12 text-center text-on-surface-variant bg-surface-container-low rounded-xl">
          <p>لا توجد مقالات حالياً</p>
        </div>
      )}
    </section>
  );
}

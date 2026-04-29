export default function ArticleBody({ content }: { content?: string }) {
  if (!content) return null;

  return (
    <article className="py-12 signature-gradient text-right">
      <div className="article-content text-lg leading-relaxed text-on-surface dir-rtl">
        {content.split('\n').filter(p => p.trim()).map((para, i) => (
          <p key={i} className="mb-6 font-medium text-on-surface/90">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}

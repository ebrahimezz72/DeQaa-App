import Link from "next/link";

interface ArticleBodyProps {
  content?: string;
  excerpt?: string;
  tags?: string[] | null;
}

export default function ArticleBody({ content, excerpt, tags }: ArticleBodyProps) {
  if (!content && !excerpt) return null;

  return (
    <article className="py-8 text-right dir-rtl">
      {/* Excerpt callout */}
      {excerpt && (
        <div className="bg-surface-container-lowest border-r-4 border-secondary p-6 rounded-2xl mb-8 shadow-sm">
          <p className="text-primary font-bold text-lg leading-relaxed italic">
            "{excerpt}"
          </p>
        </div>
      )}

      {/* Main Content */}
      {content && (
        <div className="prose prose-lg max-w-none text-on-surface leading-loose space-y-6">
          {content.split("\n").map((para, i) => {
            const trimmed = para.trim();
            if (!trimmed) return null;

            // Simple header detection if line starts with '#' or is short and ends without a period
            if (trimmed.startsWith("### ")) {
              return (
                <h4 key={i} className="text-xl font-black text-primary mt-8 mb-4">
                  {trimmed.replace(/^###\s*/, "")}
                </h4>
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h3 key={i} className="text-2xl font-black text-primary mt-10 mb-4 border-b border-outline-variant/20 pb-2">
                  {trimmed.replace(/^##\s*/, "")}
                </h3>
              );
            }
            if (trimmed.startsWith("# ")) {
              return (
                <h2 key={i} className="text-3xl font-black text-primary mt-12 mb-6">
                  {trimmed.replace(/^#\s*/, "")}
                </h2>
              );
            }

            // Bullet points
            if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
              return (
                <div key={i} className="flex items-start gap-3 my-2 pr-2">
                  <span className="text-secondary font-black mt-1">•</span>
                  <p className="text-on-surface/90 text-lg leading-relaxed font-medium m-0">
                    {trimmed.substring(2)}
                  </p>
                </div>
              );
            }

            return (
              <p key={i} className="text-on-surface/90 text-lg leading-relaxed font-medium mb-6">
                {trimmed}
              </p>
            );
          })}
        </div>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-outline-variant/20">
          <h4 className="text-sm font-black text-on-surface-variant mb-4">الوسوم والكلمات الدلالية:</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-container-high hover:bg-secondary/10 hover:text-secondary text-primary px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

import { articles } from '@/lib/data';
import Link from 'next/link';

export default function Articles() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Articles</h2>
        <p className="text-muted-foreground max-w-2xl">
          I occasionally write about web development, design, and technology. 
          Here are some of my recent articles.
        </p>
      </div>
      
      <div className="space-y-6">
        {articles.map(article => (
          <article
            key={article.id}
            className="p-6 border rounded-lg transition-all duration-300 hover:shadow-md"
          >
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">{article.date}</div>
              <h3 className="text-xl font-semibold">
                <Link href={`/articles/${article.id}`}>
                  {article.title}
                </Link>
              </h3>
              <p className="text-muted-foreground">{article.description}</p>
              <Link 
                href={`/articles/${article.id}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read more
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
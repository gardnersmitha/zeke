import Link from 'next/link';
import { PostMetadata } from '@/lib/blog';

interface CardProps {
  post: PostMetadata;
}

export default function Card({ post }: CardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="h-full bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary transition-all">
        {/* Category badge */}
        <div className="mb-3">
          <span className="inline-flex items-center rounded-full bg-primary-light/20 px-3 py-1 text-xs font-medium text-primary-dark">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>

        {/* Read more link */}
        <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:text-primary-dark">
          Read article
          <svg
            className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}

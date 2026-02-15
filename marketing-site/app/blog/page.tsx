import { getAllPosts, getAllCategories } from '@/lib/blog';
import Card from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Homeowner Guides for South Shore MA | Zeke',
  description: 'Expert advice on home maintenance, repairs, and improvements for South Shore Massachusetts homeowners. Get local tips for Hingham, Cohasset, Scituate, and beyond.',
  openGraph: {
    title: 'Blog - Homeowner Guides for South Shore MA | Zeke',
    description: 'Expert advice on home maintenance, repairs, and improvements for South Shore Massachusetts homeowners.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              South Shore Homeowner Guides
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert advice on maintaining, protecting, and improving your home in the South Shore Massachusetts region.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Posts Grid */}
          <div className="mt-12">
            <p className="text-gray-600 mb-8">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have a Specific Question?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get personalized answers about your South Shore home from Zeke's AI assistant.
          </p>
          <a
            href="/demo-request"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Try Demo Now
          </a>
        </div>
      </section>
    </div>
  );
}

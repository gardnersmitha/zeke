import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button href="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button href="/blog" variant="outline" size="lg">
              Browse Blog
            </Button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              About
            </Link>
            <Link
              href="/demo-request"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

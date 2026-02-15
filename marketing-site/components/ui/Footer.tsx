import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Zeke</h3>
            <p className="text-sm text-gray-600">
              Your AI-powered home assistant for the South Shore Massachusetts.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/demo-request"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Topics</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog?category=Seasonal+Maintenance"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Seasonal Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=Home+Systems"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Home Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=Home+Styles"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Home Styles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=South+Shore+Guides"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  South Shore Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">South Shore, MA</h3>
            <p className="text-sm text-gray-600">
              Hingham, Cohasset, Scituate, Norwell, Marshfield, Duxbury, and surrounding areas.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Zeke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

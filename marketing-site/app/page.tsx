import Hero from '@/components/ui/Hero';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { LocalBusinessSchema } from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="bg-white">
      <LocalBusinessSchema
        name="Zeke"
        description="AI-powered homeowner assistant for the South Shore Massachusetts. Get expert advice on home maintenance, find reliable contractors, and keep your home in great shape."
        url={process.env.NEXT_PUBLIC_SITE_URL || 'https://zeke.ai'}
        email="hello@zeke.ai"
        areaServed={[
          'Hingham',
          'Cohasset',
          'Scituate',
          'Hull',
          'Marshfield',
          'Duxbury',
          'Hanover',
          'Norwell',
          'Weymouth',
          'Quincy',
          'Braintree',
        ]}
      />
      {/* Hero Section */}
      <Hero
        title="Your AI Home Assistant for South Shore Massachusetts"
        subtitle="Get instant answers to homeowner questions, find trusted local contractors, and keep your home in great shape—all powered by AI that knows the South Shore."
        primaryCta={{
          text: 'Try Demo',
          href: '/demo-request',
        }}
        secondaryCta={{
          text: 'Read Our Blog',
          href: '/blog',
        }}
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything You Need to Maintain Your South Shore Home
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Zeke understands the unique challenges of homeownership in Hingham, Cohasset, Scituate, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Instant Expert Answers
              </h3>
              <p className="text-gray-600">
                Ask anything about home maintenance, repairs, or improvements. Get detailed, local-specific guidance in seconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trusted Local Contractors
              </h3>
              <p className="text-gray-600">
                Find reliable, vetted contractors in your area. Get recommendations based on your specific project needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Local Knowledge
              </h3>
              <p className="text-gray-600">
                Zeke knows South Shore weather, common home issues, building codes, and seasonal maintenance needs specific to your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How Zeke Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your AI assistant is ready to help in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ask Your Question</h3>
              <p className="text-gray-600">
                Type or speak your homeowner question. No technical jargon needed—just ask naturally.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Expert Guidance</h3>
              <p className="text-gray-600">
                Receive detailed, actionable advice tailored to South Shore homes and conditions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Take Action</h3>
              <p className="text-gray-600">
                Follow the guidance yourself or connect with recommended local contractors to get the job done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by South Shore Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Zeke helped me understand what was causing ice dams on my colonial. The advice was specific to our South Shore winters and saved me thousands in repairs."
              </p>
              <p className="text-sm font-semibold text-gray-900">Sarah M.</p>
              <p className="text-sm text-gray-600">Hingham Homeowner</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a first-time homeowner in Cohasset, I had so many questions. Zeke gave me a clear maintenance roadmap and helped me prioritize what mattered most."
              </p>
              <p className="text-sm font-semibold text-gray-900">Mike T.</p>
              <p className="text-sm text-gray-600">Cohasset Homeowner</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The contractor recommendations were spot on. Found a reliable plumber in Scituate who fixed our basement water issue quickly and fairly priced."
              </p>
              <p className="text-sm font-semibold text-gray-900">Jennifer L.</p>
              <p className="text-sm text-gray-600">Scituate Homeowner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Common Questions Zeke Answers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                "How do I prevent ice dams on my colonial roof?"
              </h4>
              <p className="text-sm text-gray-600">
                Get specific guidance for South Shore winters and roof types.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                "My basement has a musty smell. What should I do?"
              </h4>
              <p className="text-sm text-gray-600">
                Understand moisture issues common in coastal New England homes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                "What fall maintenance tasks should I prioritize?"
              </h4>
              <p className="text-sm text-gray-600">
                Get a seasonal checklist tailored to Massachusetts climate.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                "How much does a new roof cost in our area?"
              </h4>
              <p className="text-sm text-gray-600">
                Learn local pricing and when repair vs. replacement makes sense.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                "Who's a reliable contractor for basement waterproofing?"
              </h4>
              <p className="text-sm text-gray-600">
                Connect with vetted professionals who serve the South Shore.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                "What should I look for in a home inspection report?"
              </h4>
              <p className="text-sm text-gray-600">
                Understand what's critical vs. cosmetic in your inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join South Shore homeowners who are maintaining their homes with confidence.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              href="/demo-request"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Try Demo Now
            </Button>
            <Button
              href="/blog"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Browse Our Guides
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest from Our Blog
            </h2>
            <Link
              href="/blog"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Articles
            </Link>
          </div>
          <p className="text-gray-600 mb-12">
            Expert advice on homeownership in the South Shore Massachusetts region.
          </p>
          <div className="text-center">
            <Button href="/blog" variant="primary" size="lg">
              Explore Our Guides
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

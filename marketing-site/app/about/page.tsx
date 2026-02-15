import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Zeke - Your AI Home Assistant for South Shore MA',
  description: 'Learn about Zeke, the AI-powered homeowner assistant designed specifically for South Shore Massachusetts. Get local expertise and trusted contractor recommendations.',
  openGraph: {
    title: 'About Zeke - Your AI Home Assistant for South Shore MA',
    description: 'Learn about Zeke, the AI-powered homeowner assistant designed specifically for South Shore Massachusetts.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              About Zeke
            </h1>
            <p className="text-xl text-white/90">
              Your trusted AI homeowner assistant for the South Shore
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Homeownership in the South Shore is rewarding, but it comes with unique challenges. From preparing for nor'easters to preventing ice dams on colonial roofs, from dealing with coastal humidity to finding reliable local contractors, South Shore homeowners face questions that generic home advice can't answer.
              </p>
              <p>
                That's why we built Zeke.
              </p>
              <p>
                Zeke is an AI-powered homeowner assistant designed specifically for the South Shore Massachusetts region. We understand the local climate, common home styles, regional building practices, and the seasonal maintenance needs that come with living in Hingham, Cohasset, Scituate, and surrounding communities.
              </p>
              <p>
                Unlike generic home advice websites or chatbots trained on national data, Zeke knows what matters to South Shore homeowners. We know that ice dams are a real concern here. We know that salt air affects exterior maintenance. We know which contractors serve the area and have good reputations. We know the local building codes and seasonal rhythms.
              </p>
              <p>
                Our mission is simple: make homeownership easier, less stressful, and more informed for everyone in the South Shore.
              </p>
            </div>
          </div>

          {/* What Makes Zeke Different */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Zeke Different</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hyper-Local Knowledge
                </h3>
                <p className="text-gray-700">
                  We're not a generic home advice platform. Zeke is trained on South Shore-specific information: local weather patterns, common home types, regional contractors, building codes, and seasonal maintenance needs unique to coastal Massachusetts.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Instant Expert Answers
                </h3>
                <p className="text-gray-700">
                  No more endless Google searches or waiting days for contractor callbacks. Ask Zeke anything about your home, and get detailed, actionable advice in seconds. From emergency guidance to long-term planning, Zeke is always available.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trusted Contractor Network
                </h3>
                <p className="text-gray-700">
                  Finding reliable contractors is one of the biggest challenges homeowners face. Zeke connects you with vetted professionals who serve the South Shore, helping you find the right person for your project quickly and confidently.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Always Learning
                </h3>
                <p className="text-gray-700">
                  As an AI assistant, Zeke continuously learns from new information, seasonal trends, and evolving best practices. The advice you get today is informed by the latest local knowledge and industry standards.
                </p>
              </div>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Serve</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Zeke is designed for anyone who owns or maintains a home in the South Shore Massachusetts region, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>First-time homeowners navigating the learning curve</li>
                <li>Experienced homeowners seeking specific local advice</li>
                <li>Property managers overseeing multiple South Shore properties</li>
                <li>Real estate professionals advising clients on home maintenance</li>
                <li>Anyone preparing for a major home project or renovation</li>
              </ul>
              <p>
                Whether you own a historic colonial in Hingham, a coastal property in Hull, a charming cape in Cohasset, or a modern home in Hanover, Zeke understands your home and your needs.
              </p>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                We're committed to providing accurate, helpful, and actionable advice that empowers South Shore homeowners. While Zeke is an AI assistant, our recommendations are grounded in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Local building codes and regulations</li>
                <li>Industry best practices and safety standards</li>
                <li>Regional climate considerations and seasonal patterns</li>
                <li>Real experiences from South Shore homeowners</li>
              </ul>
              <p>
                We believe homeownership should be rewarding, not stressful. With the right information and support, anyone can be a confident, capable homeowner. That's what Zeke is here to help you achieve.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Local First</h3>
                <p className="text-gray-700">
                  We prioritize South Shore-specific knowledge over generic advice. Your home is unique, and our guidance reflects that.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-700">
                  We're clear about what Zeke can and can't do. When professional help is needed, we'll tell you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Empowerment</h3>
                <p className="text-gray-700">
                  Our goal is to help you understand your home and make informed decisions, not create dependency.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-700">
                  Expert advice shouldn't require expensive consultations or long waits. Zeke makes knowledge accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Zeke?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Try our demo and see how Zeke can help you maintain your South Shore home with confidence.
          </p>
          <Button
            href="/demo-request"
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Try Demo Now
          </Button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions, feedback, or suggestions? We'd love to hear from you.
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <a
                href="mailto:hello@zeke.ai"
                className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@zeke.ai
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

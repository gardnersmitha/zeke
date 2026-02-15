import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Demo - Zeke AI Home Assistant',
  description: 'Try Zeke and see how our AI-powered assistant can help you maintain your South Shore Massachusetts home. Get personalized advice and contractor recommendations.',
  openGraph: {
    title: 'Request a Demo - Zeke AI Home Assistant',
    description: 'Try Zeke and see how our AI-powered assistant can help you maintain your South Shore Massachusetts home.',
    type: 'website',
  },
};

export default function DemoRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

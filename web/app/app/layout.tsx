import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeke - AI Homeowner Assistant",
  description: "Your personal AI assistant for home maintenance and homeownership",
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#4086FC",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Zeke",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

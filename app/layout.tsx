import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BidSmart - Stop Bidding Blind. Know What It\'s Really Worth.',
  description: 'AI-powered auction intelligence platform that predicts auction prices and suggests winning bidding strategies for collectors and resellers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

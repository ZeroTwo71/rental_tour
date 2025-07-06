import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Banyuwangi Tours - Honda Rental & Tour Service',
  description: 'Experience the natural beauty of Banyuwangi with the best tour packages using comfortable and reliable Honda vehicles. Professional guides, affordable prices, and unforgettable adventures.',
  keywords: 'Banyuwangi tour, Honda rental, Ijen crater, Bromo tour, Baluran safari, tour guide, East Java tourism',
  authors: [{ name: 'Banyuwangi Tours' }],
  creator: 'Banyuwangi Tours',
  publisher: 'Banyuwangi Tours',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Banyuwangi Tours - Honda Rental & Tour Service',
    description: 'Experience the natural beauty of Banyuwangi with the best tour packages using comfortable and reliable Honda vehicles.',
    url: 'https://banyuwangitours.com',
    siteName: 'Banyuwangi Tours',
    images: [
      {
        url: '/images/hero1.jpg',
        width: 1200,
        height: 600,
        alt: 'Banyuwangi Tours - Ijen Crater Adventure',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banyuwangi Tours - Honda Rental & Tour Service',
    description: 'Experience the natural beauty of Banyuwangi with the best tour packages using comfortable and reliable Honda vehicles.',
    images: ['/images/hero1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
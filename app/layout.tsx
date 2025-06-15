import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Utkarsh Rajput - AI Researcher & Full-Stack Developer',
  description: 'Software-developer-turned-AI-researcher specializing in NLP, Computer Vision, and ML systems. Building AI-powered experiences with craft & curiosity.',
  keywords: 'AI researcher, machine learning, NLP, computer vision, full-stack developer, software engineer, Utkarsh Rajput, UNSW, cross-lingual NLP, fake news detection, neural trading strategies',
  authors: [{ name: 'Utkarsh Rajput' }],
  creator: 'Utkarsh Rajput',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://utkarshrajput.dev',
    title: 'Utkarsh Rajput - AI Researcher & Full-Stack Developer',
    description: 'Software-developer-turned-AI-researcher specializing in NLP, Computer Vision, and ML systems. Building AI-powered experiences with craft & curiosity.',
    siteName: 'Utkarsh Rajput Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utkarsh Rajput - AI Researcher & Full-Stack Developer',
    description: 'Building AI-powered experiences with craft & curiosity',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
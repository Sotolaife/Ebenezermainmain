import type { Metadata } from 'next';
import { Poppins, Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-headline',
});

const fontBody = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Pavilion Art Gallery',
  description: 'Transforming minds through timeless art.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontHeadline.variable,
          fontBody.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}

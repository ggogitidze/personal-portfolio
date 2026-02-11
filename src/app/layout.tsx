import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Providers from '@/app/providers';
import Navbar from '../components/Navbar';

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giorgi Gogitidze",
  description: "Portfolio of Giorgi Gogitidze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${urbanist.variable} antialiased bg-background text-foreground`}>
      <body className="font-sans antialiased overflow-x-hidden selection:bg-accent/20 selection:text-accent">
        <Providers>
          <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <main className="flex-1 flex flex-col w-full">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Contractor Portfolio | Construction & Renovation",
    template: "%s | Contractor Portfolio",
  },
  description: "Professional contractor specializing in residential and commercial construction. View CV, services, and get in touch.",
  metadataBase: new URL("https://ironcrewai.co.uk"),
  openGraph: {
    title: "Contractor Portfolio",
    description:
      "Professional contractor specializing in residential and commercial construction.",
    url: "https://ironcrewai.co.uk",
    siteName: "Contractor Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-black/10 dark:border-white/10 w-full">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Contractor Portfolio
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/cv" className="hover:underline">CV</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-160px)] w-full">
          {children}
        </main>
        <footer className="border-t border-black/10 dark:border-white/10 w-full mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-black/70 dark:text-white/70">© {new Date().getFullYear()} Contractor Portfolio</p>
            <div className="flex gap-4">
              <Link href="/contact" className="hover:underline">Get a Quote</Link>
              <a href="tel:+10000000000" className="hover:underline">Call</a>
              <a href="mailto:contact@example.com" className="hover:underline">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

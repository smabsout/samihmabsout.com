import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.title}`,
  description: site.intro,
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.intro,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-white font-sans text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

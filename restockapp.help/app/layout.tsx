import type { Metadata } from "next";
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
  title: "Restock — Support | The Offline-First Restocking App",
  description: "Get help with Restock, the inventory app for small retailers. FAQs, contact support, and learn how the app works.",
  metadataBase: new URL("https://restockapp.help"),
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Restock — Support | The Offline-First Restocking App",
    description: "Get help with Restock, the inventory app for small retailers. FAQs, contact support, and learn how the app works.",
    type: "website",
    url: "https://restockapp.help/support",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-forest-green selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

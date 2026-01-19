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
  title: "Restock — Support | The Offline-First Inventory Scanner",
  description: "The offline-first inventory scanner for pros. Scan your shelf, export to WhatsApp. Pay once, use forever. No subscriptions.",
  metadataBase: new URL("https://restockapp.help"),
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Restock — Support | The Offline-First Inventory Scanner",
    description: "The offline-first inventory scanner for pros. Scan your shelf, export to WhatsApp. Pay once, use forever. No subscriptions.",
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

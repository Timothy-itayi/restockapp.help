import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-forest-green selection:text-white">
      <nav className="border-b border-black/5 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/support" className="flex items-center gap-2">
            <Image src="/restock-icon.png" alt="Restock" width={24} height={24} />
            <span className="font-bold text-dark-forest">Restock</span>
          </Link>
          <Link href="/support" className="text-sm font-medium text-forest-green">Back to Support</Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-dark-forest tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-charcoal/60">Last updated: January 15, 2026</p>
        
        <div className="mt-12 space-y-8 text-charcoal/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-dark-forest">Introduction</h2>
            <p className="mt-2">
              Restock is built with a privacy-first, offline-first approach. We believe your business data should stay yours. This policy explains how we handle information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">Data Storage</h2>
            <p className="mt-2">
              All inventory data, supplier lists, and session information are stored locally on your device. We do not maintain a cloud database of your inventory. If you delete the app or use the "Reset All Data" feature, your data is permanently removed from your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">Image Processing</h2>
            <p className="mt-2">
              When you use the "Log" feature, images are sent to our secure servers (Cloudflare Workers) to be processed by AI for text extraction. These images are processed in memory and are not stored on our servers after the response is sent back to your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">Email Delivery</h2>
            <p className="mt-2">
              Emails are sent via our infrastructure. We store only the minimum logs required to ensure delivery and prevent abuse. We do not read the content of your reorder emails for any purpose other than delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">Third-Party Services</h2>
            <p className="mt-2">
              We use standard industry tools for app analytics (optional and anonymous) and crash reporting to improve the app experience. These services do not receive your inventory or supplier data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">Contact</h2>
            <p className="mt-2">
              If you have questions about this policy, contact us at support@restockapp.help.
            </p>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-black/5 text-center text-xs text-charcoal/30">
        © 2026 Restock. All rights reserved.
      </footer>
    </div>
  );
}


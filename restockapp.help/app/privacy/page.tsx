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
            <h2 className="text-xl font-bold text-dark-forest">Image Processing & AI</h2>
            <p className="mt-2">
              When you use the "Log" feature, images are transmitted via encrypted HTTPS to our secure processing endpoint (hosted on Cloudflare Workers). We use Groq Vision (LLM-based OCR) to extract structured text. 
            </p>
            <p className="mt-2 text-sm italic">
              Crucially: Images are processed in volatile memory and are purged immediately after the extraction is complete. We do not use your images to train AI models, and we do not store them on any persistent disk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">Email Delivery & SMTP</h2>
            <p className="mt-2">
              To send reorder emails, the app sends the drafted email content and recipient details to our stateless mailing worker. We use Resend as our SMTP provider. We do not retain copies of your sent emails once delivery is confirmed by the upstream mail server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">Children's Privacy</h2>
            <p className="mt-2">
              Restock does not knowingly collect any information from children under the age of 13. Since the app is an inventory tool for business owners and stores no data on our servers, we do not have a mechanism to track the age of our users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">Changes to This Policy</h2>
            <p className="mt-2">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
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


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
        <p className="mt-4 text-charcoal/60">Version 2.0.0 — Last updated: January 15, 2026</p>
        
        <div className="mt-12 space-y-8 text-charcoal/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-dark-forest">1. Architectural Philosophy</h2>
            <p className="mt-2">
              Restock is engineered as an <strong>offline-first utility</strong>. Our architecture is "Client-Heavy, Serverless-Light," meaning the vast majority of your data never leaves your physical device. We do not use traditional cloud synchronization, user accounts, or persistent remote databases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">2. Local Data Persistence</h2>
            <p className="mt-2">
              The following information is stored exclusively on your device using <strong>encrypted local storage (AsyncStorage)</strong>:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
              <li><strong>Sender Profile:</strong> Your name, business email, and store name.</li>
              <li><strong>Inventory Sessions:</strong> Active and historical restocking lists.</li>
              <li><strong>Supplier Directory:</strong> Contact information for your distributors.</li>
              <li><strong>Product History:</strong> Normalized product names and last-ordered quantities.</li>
            </ul>
            <p className="mt-4">
              <em>Note:</em> Because this data is not backed up to our servers, deleting the Restock app or clearing its cache will permanently erase this information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">3. Transient Document Processing</h2>
            <p className="mt-2">
              When you photograph a catalog or inventory sheet for parsing:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
              <li>Images are transmitted via <strong>HTTPS/TLS 1.3</strong> to our stateless Cloudflare Workers.</li>
              <li>We utilize <strong>Groq Vision (Llama 4 Maverick)</strong> to perform OCR and structured data extraction.</li>
              <li><strong>Volatile Processing:</strong> Images are held in volatile RAM only. They are purged immediately upon completion of the extraction process. We do not store, cache, or logs your physical images.</li>
              <li>We do not use your documents to train AI models or improve third-party services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">4. Transactional Email Dispatch</h2>
            <p className="mt-2">
              To facilitate restocking, the app interfaces with <strong>Resend</strong> for email delivery.
            </p>
            <p className="mt-2">
              When you send an order, we transmit the recipient's email, your "Reply-To" address, and the order table to our stateless mailing worker. We do not maintain a "Sent Items" database; once the SMTP provider confirms delivery, the payload is destroyed at the edge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">5. Device Identifiers & Rate Limiting</h2>
            <p className="mt-2">
              To prevent API abuse and manage costs, the app generates a <strong>unique Device ID</strong> stored in your local settings. This ID is transmitted during parsing and emailing requests. It is not linked to your identity or used for cross-app tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">6. App Store Transparency</h2>
            <p className="mt-2 font-semibold">Data Not Linked to You:</p>
            <p className="mt-1 text-sm">
              While we process your business email and images, they are not linked to a persistent account in our systems. Restock is built to be compliant with Apple's Privacy Manifest (PrivacyInfo.xcprivacy) requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark-forest">7. Contact & Data Access</h2>
            <p className="mt-2">
              Because we do not store your data on our servers, we cannot "export" or "delete" it for you. You have full control over your data directly within the <strong>Settings</strong> menu of the app.
            </p>
            <p className="mt-2">
              For technical inquiries regarding our processing pipeline, contact us at: <a href="mailto:timothy_itayi@icloud.com" className="text-forest-green underline">support@restockapp.help</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-black/5 text-center text-xs text-charcoal/30">
        © 2026 Restock App. All inventory processing is stateless.
      </footer>
    </div>
  );
}
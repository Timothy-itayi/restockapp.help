"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ArchitectureCarousel() {
  const slides = [
    {
      src: "/app-preview-img/profile-setup0.png",
      alt: "Profile Configuration",
    },
    {
      src: "/app-preview-img/home-screen0.png",
      alt: "Restock Home Screen",
    },
    {
      src: "/app-preview-img/upload-catalog0.png",
      alt: "Scan Catalog Workflow",
    },
    {
      src: "/app-preview-img/choose-path.png",
      alt: "Choose Path Workflow",
    },
    {
      src: "/app-preview-img/library-access.png",
      alt: "Library Access Workflow",
    },
    {
      src: "/app-preview-img/results.png",
      alt: "AI Parsing Result",
    },
    {
      src: "/app-preview-img/image-result-session-details.png",
      alt: "Order Details Preview",
    },
 
  ];
  
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-[300px] sm:max-w-[350px] relative flex flex-col items-center group">
      {/* Phone Frame Mockup */}
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-[8px] border-charcoal/10 bg-white aspect-[9/19.5]">
        <Image
          src={slides[current].src}
          alt={slides[current].alt}
          width={350}
          height={758}
          className="object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {/* Navigation Overlay */}
      <div className="absolute inset-y-0 -left-6 -right-6 flex items-center justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto hover:bg-forest-green hover:text-white transition-all -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto hover:bg-forest-green hover:text-white transition-all translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'w-8 bg-forest-green' : 'bg-forest-green/20'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-forest-green selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/restock-icon.png"
                alt="Restock Logo"
                width={32}
                height={32}
                className="rounded-lg shadow-sm"
              />
              <span className="text-xl font-bold tracking-tight text-dark-forest">Restock</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-8">
                <a href="#architecture" className="text-sm font-medium hover:text-forest-green transition-colors">Architecture</a>
                <a href="#workflow" className="text-sm font-medium hover:text-forest-green transition-colors">Workflow</a>
                <a href="#faq" className="text-sm font-medium hover:text-forest-green transition-colors">FAQ</a>
                <a href="#contact" className="text-sm font-medium hover:text-forest-green transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-48 sm:pb-32 lg:pb-48">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 text-center lg:text-left">
                <h1 className="text-5xl font-extrabold tracking-tight text-dark-forest sm:text-7xl lg:text-8xl">
                  Walk.<br />Log.<br />Send.
                </h1>
                <p className="mt-8 text-xl leading-8 text-charcoal/80 max-w-xl mx-auto lg:mx-0">
                  A high-performance, offline-first restocking utility for small retailers. 
                  Zero-latency inventory logging powered by edge-AI document parsing.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                  <a
                    href="https://apps.apple.com/app/restock/id000000000" // TODO: Insert real App Store URL
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    className="inline-flex items-center gap-3 rounded-2xl bg-forest-green px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#217821] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.74 14.556c-.027-2.64 2.162-3.91 2.26-3.969-1.234-1.787-3.163-2.034-3.838-2.063-1.633-.165-3.19.952-4.021.952-.832 0-2.103-.927-3.463-.901-1.79.026-3.448 1.037-4.365 2.627-1.866 3.23-.478 7.99 1.335 10.613.885 1.26 1.93 2.674 3.31 2.627 1.335-.052 1.839-.86 3.455-.86 1.616 0 2.064.86 3.462.832 1.435-.025 2.338-1.276 3.213-2.539.637-.923.899-1.399 1.407-2.446-3.684-1.401-3.558-4.096-3.529-4.32zm-4.13-8.127c.762-.954 1.274-2.287 1.13-3.63-1.093.045-2.412.728-3.189 1.682-.699.832-1.315 2.166-1.082 3.432 1.219.093 2.478-.677 3.14-1.484z"
                      />
                    </svg>
                    Download on the App Store
                  </a>
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px] sm:max-w-[400px]">
                  <div className="absolute -inset-4 bg-forest-green/10 blur-3xl rounded-full" />
                  <Image
                    src="/app-preview-img/home-screen.png"
                    alt="Restock Dashboard"
                    width={400}
                    height={866}
                    className="relative z-10 rounded-[3rem] shadow-2xl border-[8px] border-charcoal/5"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section id="architecture" className="py-24 bg-dark-forest text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 leading-tight">"Client-Heavy, Serverless-Light"</h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Restock 2.0 discards traditional cloud-sync bloat in favor of a lean, 
                  stateless architecture designed for speed and reliability in low-connectivity environments.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Offline-First Persistence",
                      desc: "All session data, supplier lists, and product history are persisted locally via Zustand + AsyncStorage."
                    },
                    {
                      title: "Edge AI Parsing",
                      desc: "Physical catalogs are processed via Groq Vision. Our backend applies a validation layer to ensure data integrity."
                    },
                    {
                      title: "Stateless Backend",
                      desc: "We utilize Cloudflare Workers for extraction and Resend for delivery. No central database is maintained."
                    }
                  ].map((feat, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <h3 className="font-bold text-forest-green mb-2">{feat.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <ArchitectureCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="py-24 bg-forest-green/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold tracking-tight text-dark-forest sm:text-4xl">System Workflow</h2>
              <p className="mt-4 text-charcoal/60">How we handle your data from walk to send.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "1. Zero-Auth Onboarding",
                  desc: "Users bypass sign-up. Personal and store profiles are generated and encrypted locally. App utility starts in < 60 seconds."
                },
                {
                  title: "2. The 'Magic' Flow",
                  desc: "Supports image-only ingestion. Llama-based OCR extracts structured JSON with 95%+ accuracy directly from your photos."
                },
                {
                  title: "3. Grouped Dispatch",
                  desc: "Items are auto-grouped into professional HTML templates. Emails are dispatched via our stateless 'send-email' worker."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-forest-green/10 flex items-center justify-center text-forest-green font-bold text-xl mb-6">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-dark-forest mb-4">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold tracking-tight text-dark-forest mb-16">Engineering & Data Privacy FAQ</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  q: "Why only image uploads? Where is PDF support?",
                  a: "Parsing complex PDFs on the edge is fragile. By requiring high-resolution images, we ensure 100% reliability with the Groq Vision API and eliminate heavy native library bloat."
                },
                {
                  q: "How secure is my PII (Personally Identifiable Information)?",
                  a: "Strict local-first policy. Your details leave the device only in the transient payload sent to the 'send-email' worker. We do not store this data in any database."
                },
                {
                  q: "What happens if I delete the app?",
                  a: "All data (sessions, history, suppliers) is permanently purged from your device. We recommend using the 'Reset All Data' feature in settings for a clean wipe."
                },
                {
                  q: "Does the app track my location or analytics?",
                  a: "No. Restock 2.0 has zero tracking scripts, zero location requests, and zero persistent user-identifiers on our backend."
                }
              ].map((faq, idx) => (
                <div key={idx} className="p-8 bg-white rounded-3xl border border-black/5 hover:border-forest-green/20 transition-colors">
                  <h3 className="text-lg font-bold text-dark-forest">{faq.q}</h3>
                  <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[3rem] bg-forest-green px-8 py-16 text-center text-white sm:px-16 sm:py-24 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight">Technical Support</h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
                  If you encounter parsing errors or network failures, contact our engineering support.
                </p>
                <div className="mt-12 flex flex-col items-center gap-6">
                  <a href="mailto:support@restockapp.help" className="text-3xl font-black hover:text-dark-forest transition-colors sm:text-4xl">
                    support@restockapp.help
                  </a>
                  <p className="text-sm text-white/60 uppercase tracking-widest font-bold">
                    SLA: Response within 48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-black/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <Image
              src="/restock-icon.png"
              alt="Restock Logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-lg font-bold text-dark-forest">Restock 2.0</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-medium text-charcoal/60">
            <Link href="/privacy" className="hover:text-forest-green">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-forest-green">Terms of Service</Link>
          </div>
          <p className="text-xs text-charcoal/40 max-w-2xl mx-auto leading-loose">
            Restock is a stateless utility. Emails are sent via Resend API. 
            No product data is sold, tracked, or cached server-side. 
            © 2026 Restock App.
          </p>
        </div>
      </footer>
    </div>
  );
}

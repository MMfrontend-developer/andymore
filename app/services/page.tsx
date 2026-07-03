import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Andymore Business Concept offers product sourcing, bulk orders, product consultation, Lagos-wide delivery, showroom viewing, full project supply, and after-sales support.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-14 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/products/tiles-cladding-variety.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900/95" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">
            What We Do
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Our Services
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Beyond supplying great products, we offer a range of services designed
            to make your build or renovation as smooth as possible.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-2">
              How We Help
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
              Everything You Need, Under One Roof
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed">
              From your first enquiry to after-sales follow-up, we're with you every
              step of the way. Here's what you can expect when you work with Andymore.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-2">
              Process
            </p>
            <h2 className="font-display text-3xl font-bold text-neutral-900 mb-3">
              How It Works
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-neutral-200 z-0" />
            {[
              { step: "01", title: "Browse or Visit", desc: "Explore our products online or visit our Ojodu Berger showroom to see everything in person." },
              { step: "02", title: "Send an Enquiry", desc: "Reach us via WhatsApp, phone, or email with the product name and your requirements." },
              { step: "03", title: "We Confirm & Quote", desc: "Our team confirms availability and provides full details including delivery options." },
              { step: "04", title: "Receive Your Order", desc: "Pay, schedule delivery or pickup, and receive your items, with our support throughout." },
            ].map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center p-5">
                <div className="w-16 h-16 rounded-full bg-[#c0392b] text-white flex items-center justify-center font-display font-bold text-xl mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT VISUAL BANNER ───────────────────────────────────────────── */}
      <section className="grid md:grid-cols-2 h-80 md:h-72">
        <div className="relative overflow-hidden">
          <Image
            src="/images/products/floor-wall-tiles-showroom.jpg"
            alt="Tile showroom at Andymore"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-white font-display text-2xl font-bold text-center px-4">
              Building Materials<br />
              <span className="text-[#c9a84c] text-lg font-normal">Tiles · Sanitary Ware · Fittings</span>
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/images/products/kitchen-range-hoods.jpg"
            alt="Kitchen appliances at Andymore"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-white font-display text-2xl font-bold text-center px-4">
              Kitchen Appliances<br />
              <span className="text-[#c9a84c] text-lg font-normal">Hoods · Hobs · Accessories</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] mb-6 shadow-lg">
            <MessageCircle size={28} className="text-white" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-500 leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you're buying a single item or supplying an entire development,
            our team is ready to help. Reach us instantly on WhatsApp, we typically
            respond within minutes during business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1da851] transition-colors shadow-lg shadow-green-200"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-800 font-semibold rounded-xl border border-neutral-200 hover:border-[#c0392b] hover:text-[#c0392b] transition-colors"
            >
              All Contact Options <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

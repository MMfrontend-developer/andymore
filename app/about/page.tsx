import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Andymore Business Concept — our story, mission, and what makes us Lagos's most trusted supplier of building materials and kitchen appliances at Ojodu Berger.",
};

const pillars = [
  "Curated selection of proven, quality products",
  "Transparent, no-pressure sales approach",
  "Expert product knowledge from a dedicated team",
  "Bulk supply capability for large developments",
  "Reliable delivery across Lagos State",
  "After-sales support you can count on",
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/products/andymore-storefront.jpg"
            alt=""
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900/95" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">
            Our Story
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
            About Andymore Business Concept
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            A Lagos business built on the belief that every Nigerian home deserves
            quality materials and honest service.
          </p>
        </div>
      </section>

      {/* ── STORY SECTION ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-5">
                Your Trusted Building Materials Partner in Lagos
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Andymore Business Concept was founded with a clear purpose: to give
                  homeowners, contractors, and property developers in Lagos access to
                  premium building materials and kitchen appliances — without the hassle,
                  inflated prices, or uncertainty that plague many supply markets.
                </p>
                <p>
                  Operating from our purpose-built showroom at{" "}
                  <strong className="text-neutral-800">
                    36/75 Yakoyo Road, before Alagbole Road, Ojodu Berger
                  </strong>
                  , we have built a reputation for stocking what we advertise, saying
                  what we mean, and delivering on time. Our shelves carry everything from
                  large-format marble tiles and decorative cladding to whirlpool bathtubs,
                  shower systems, gas hobs, range hoods, and water storage tanks.
                </p>
                <p>
                  We understand the Lagos building market — the timelines, the pressures,
                  the need for reliable stock and honest advice. Whether you're tiling a
                  single bathroom or outfitting a 20-unit apartment block, we treat every
                  client with the same care and professionalism.
                </p>
              </div>
            </div>
            {/* Image mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-56 relative">
                <Image
                  src="/images/products/floor-wall-tiles-showroom.jpg"
                  alt="Andymore tile showroom display"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-56 relative mt-8">
                <Image
                  src="/images/products/shower-systems-faucets.jpg"
                  alt="Shower systems at Andymore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-56 relative -mt-4">
                <Image
                  src="/images/products/decorative-mirrors.jpg"
                  alt="Decorative mirrors at Andymore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-56 relative">
                <Image
                  src="/images/products/ceramic-basins-wc.jpg"
                  alt="Bathroom sanitary ware at Andymore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden h-96 relative order-2 lg:order-1">
              <Image
                src="/images/products/marble-stone-tiles.jpg"
                alt="Premium marble tiles at Andymore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display text-2xl font-bold leading-snug">
                  "Quality you can see. Service you can trust."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-3">
                Our Mission
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-5">
                Building Better Homes, Together
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our mission is to be the most reliable and accessible supplier of
                building materials and kitchen appliances in Lagos — empowering every
                client to build and furnish with confidence. We achieve this by maintaining
                excellent stock, offering unbiased product advice, and honouring every
                commitment we make.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                We envision a Lagos where quality building materials are accessible, not a
                privilege — and where every contractor and homeowner has a supplier they
                genuinely trust.
              </p>
              {/* Pillars */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle size={16} className="text-[#c0392b] mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-2">
              The Difference
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
              What Makes Us Different
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Showroom You Can Walk Into",
                body: "Unlike many suppliers who operate from social media alone, our physical showroom lets you see, compare, and touch every product before you buy. No surprises on site.",
              },
              {
                num: "02",
                title: "Honest, Knowledgeable Team",
                body: "We won't push the most expensive option — we'll recommend what genuinely suits your project and budget. Our team is trained, experienced, and honest.",
              },
              {
                num: "03",
                title: "Ready Stock, Real Delivery",
                body: "We hold real stock of our most popular lines. When we say we'll deliver, we deliver. We've built our reputation on reliability, and we don't take that lightly.",
              },
            ].map((c) => (
              <div key={c.num} className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-100 bg-[#f8f6f3]">
                <span className="font-display text-5xl font-bold text-[#c0392b]/20">{c.num}</span>
                <h3 className="font-semibold text-lg text-neutral-900">{c.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWROOM CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#c0392b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-3">
            Come See Us in Person
          </h2>
          <p className="text-white/80 mb-7">
            Our showroom at Ojodu Berger is open Monday – Saturday, 8 AM – 6 PM.
            No appointment needed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#c0392b] font-bold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Get Directions <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              WhatsApp Us First
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, MessageCircle, Quote, Star } from "lucide-react";
import { whatsappLink, GOOGLE_MAPS_URL } from "@/lib/constants";
import { AnimatedWhyUs, AnimatedTestimonials, HeroTypewriter } from "@/components/AnimatedSections";

export const metadata: Metadata = {
  title: "Andymore Business Concept | Building Materials & Kitchen Appliances Lagos",
  description:
    "Lagos's trusted supplier of premium tiles, sanitary ware, bathtubs, range hoods, gas hobs, mirrors, water tanks, and more. Visit our showroom at Ojodu Berger or inquire via WhatsApp.",
};

const featuredIds = [
  "floor-wall-tiles",
  "marble-porcelain-slabs",
  "shower-systems",
  "bathtubs",
  "kitchen-range-hoods",
  "built-in-gas-hobs",
];

const featured = products.filter((p) => featuredIds.includes(p.id));

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/products/andymore-storefront.jpg"
          alt="Andymore Business Concept showroom in Lagos"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Floating decorative tile strip */}
        <div className="absolute inset-y-0 right-0 w-1/3 hidden lg:flex flex-col overflow-hidden opacity-20">
          <Image
            src="/images/products/marble-porcelain-tiles.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="33vw"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#c9a84c] mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" />
              Ojodu Berger, Lagos 
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Quality Materials.{" "}
              <span className="gradient-text">Beautiful Homes.</span>
            </h1>
            <HeroTypewriter text="Andymore Business Concept is Lagos's trusted supplier of premium building materials and kitchen appliances, tiles, sanitary ware, bathtubs, range hoods, gas hobs, mirrors, water tanks, and more." />
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c0392b] text-white font-semibold rounded-lg hover:bg-[#962d22] transition-colors"
              >
                Browse Products <ArrowRight size={18} />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 border border-white/20 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 text-xs">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="bg-[#f8f6f3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-2">
              Why Andymore
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
              The Andymore Difference
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <AnimatedWhyUs />

        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-2">
                Our Products
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900">
                Featured Products
              </h2>
              <div className="section-divider mt-3" />
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#c0392b] hover:underline shrink-0"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/products/flooring-tile-variety.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">
                About Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5 leading-tight">
                Lagos's Go-To Source for Building Excellence
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Andymore Business Concept was built on a simple promise — deliver genuine
                quality at fair prices and stand behind every product we sell. Our showroom
                at Ojodu Berger carries everything you need to build, renovate, or outfit a
                kitchen in Lagos, with a team that knows the local market inside out.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors font-semibold text-sm"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-48 relative">
                <Image
                  src="/images/products/tiles-cladding-variety.jpg"
                  alt="Wide selection of tiles and cladding at Andymore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-48 relative mt-6">
                <Image
                  src="/images/products/kitchen-range-hoods.jpg"
                  alt="Kitchen range hoods at Andymore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-48 relative -mt-4">
                <Image
                  src="/images/products/whirlpool-bathtub.jpg"
                  alt="Jacuzzi bathtub at Andymore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-48 relative">
                <Image
                  src="/images/products/decorative-gold-mirrors.jpg"
                  alt="Decorative mirrors at Andymore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-2">
              Testimonials
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
              What Our Customers Say
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <AnimatedTestimonials items={testimonials} />

        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c0392b] to-[#962d22]" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/products/marble-stone-tiles.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build or Renovate?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Visit our showroom at Ojodu Berger, or reach us instantly on WhatsApp.
            Our team is ready to help you find the right materials at the right price.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#c0392b] font-bold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Contact Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

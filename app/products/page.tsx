import type { Metadata } from "next";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Andymore's full range of building materials (tiles, sanitary ware, bathtubs, mirrors, water tanks) and kitchen appliances (range hoods, gas hobs) in Lagos. Inquire via WhatsApp.",
};

const buildingMaterials = products.filter((p) => p.category === "Building Materials");
const kitchenAppliances = products.filter((p) => p.category === "Kitchen Appliances");

export default function ProductsPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-14 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/products/flooring-tile-variety.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">
            Catalogue
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Our Products
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Everything you need to build, renovate, or outfit a kitchen — sourced with
            care and available from our showroom in Ojodu Berger.
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            Click <span className="text-[#25D366] font-semibold">"Inquire on WhatsApp"</span> on any product to chat with our team directly.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* ── BUILDING MATERIALS ── */}
        <section aria-labelledby="building-materials-heading">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <h2
                id="building-materials-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-neutral-900"
              >
                Building Materials
              </h2>
              <div className="section-divider mt-2" />
            </div>
            <span className="ml-auto px-3 py-1 bg-red-50 text-[#c0392b] text-xs font-semibold rounded-full border border-red-100">
              {buildingMaterials.length} products
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingMaterials.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-neutral-200" />

        {/* ── KITCHEN APPLIANCES ── */}
        <section aria-labelledby="kitchen-appliances-heading">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <h2
                id="kitchen-appliances-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-neutral-900"
              >
                Kitchen Appliances
              </h2>
              <div className="section-divider mt-2" />
            </div>
            <span className="ml-auto px-3 py-1 bg-red-50 text-[#c0392b] text-xs font-semibold rounded-full border border-red-100">
              {kitchenAppliances.length} products
            </span>
          </div>
          {/* First row: up to 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {kitchenAppliances.slice(0, 3).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          {/* Second row: remaining cards, centered */}
          {kitchenAppliances.length > 3 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:max-w-[calc(66.666%+12px)]">
                {kitchenAppliances.slice(3).map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#f8f6f3] py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            Can't Find What You Need?
          </h2>
          <p className="text-neutral-500 mb-6">
            We source products beyond what's listed here. Send us a WhatsApp message
            with your requirements and we'll do our best to help.
          </p>
          <a
            href={whatsappLink("a specific product")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1da851] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.357.627 4.664 1.815 6.685L2.667 29.333l6.828-1.791A13.28 13.28 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 24.267c-2.152 0-4.257-.578-6.096-1.672l-.436-.259-4.052 1.062 1.081-3.934-.283-.453A10.886 10.886 0 0 1 5.12 16c0-5.999 4.884-10.88 10.883-10.88C22.001 5.12 26.88 10.001 26.88 16c0 5.999-4.879 10.934-10.877 10.934zm5.976-8.178c-.327-.164-1.938-.957-2.238-1.065-.299-.109-.517-.164-.736.164-.218.327-.846 1.065-.037 1.065-.382.436-.627.218-1.065.654-.218.218-.218.218-.436 0-.218-.218-.927-.764-1.756-1.484-.651-.578-1.094-1.296-1.224-1.623-.131-.327.037-.509.164-.645.218-.218.327-.273.49-.49.164-.218.109-.545-.055-.763-.163-.218-.927-2.23-1.27-3.052-.327-.791-.654-.682-.927-.7l-.79-.014c-.218 0-.572.082-.873.409-.3.327-1.143 1.119-1.143 2.73s1.17 3.167 1.334 3.385c.163.218 2.302 3.512 5.577 4.926.78.337 1.388.537 1.862.687.782.25 1.494.214 2.058.13.628-.093 1.938-.792 2.21-1.557.272-.763.272-1.42.19-1.557-.08-.136-.298-.218-.626-.382z" />
            </svg>
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

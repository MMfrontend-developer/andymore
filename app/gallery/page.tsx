import type { Metadata } from "next";
import Image from "next/image";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photos and videos from the Andymore Business Concept showroom — tiles, mirrors, sanitary ware, bathtubs, range hoods, and more on display in our Ojodu Berger store.",
};

const galleryImages = [
  { src: "/images/products/flooring-tile-variety.jpg", alt: "Wide tile and flooring variety on display" },
  { src: "/images/products/marble-stone-tiles.jpg", alt: "Marble and stone tiles collection" },
  { src: "/images/products/marble-porcelain-tiles.jpg", alt: "Marble and porcelain large-format tiles" },
  { src: "/images/products/tiles-cladding-variety.jpg", alt: "Tiles and decorative cladding selection" },
  { src: "/images/products/floor-wall-tiles-showroom.jpg", alt: "Floor and wall tiles showroom display" },
  { src: "/images/products/tile-showroom-display.jpg", alt: "Premium tile showroom display" },
  { src: "/images/products/decorative-mirrors.jpg", alt: "Decorative mirrors — gold and silver frames" },
  { src: "/images/products/decorative-gold-mirrors.jpg", alt: "Gold ornate decorative mirrors" },
  { src: "/images/products/decorative-mirrors-gallery.jpg", alt: "Decorative mirror gallery display" },
  { src: "/images/products/bathroom-mirrors-accessories.jpg", alt: "Bathroom mirrors and accessories" },
  { src: "/images/products/shower-systems-faucets.jpg", alt: "Shower systems and faucets display" },
  { src: "/images/products/shower-panels-columns.jpg", alt: "Shower panels and column systems" },
  { src: "/images/products/whirlpool-bathtub.jpg", alt: "Whirlpool Jacuzzi bathtub" },
  { src: "/images/products/freestanding-bathtubs.jpg", alt: "Freestanding bathtubs" },
  { src: "/images/products/toilet-sets-water-heater.jpg", alt: "Toilet sets and water heaters" },
  { src: "/images/products/ceramic-basins-wc.jpg", alt: "Ceramic basins, WC and vanity units" },
  { src: "/images/products/kitchen-range-hoods.jpg", alt: "Kitchen range hoods" },
  { src: "/images/products/chimney-range-hoods.jpg", alt: "Chimney-style range hoods" },
  { src: "/images/products/built-in-gas-hobs.jpg", alt: "Built-in gas hobs and cooktops" },
  { src: "/images/products/water-tanks.jpg", alt: "Water storage tanks" },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-14 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/products/decorative-mirrors.jpg"
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
            Visual Showcase
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Our Gallery
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Browse our showroom collection. Click any photo to view full size.
          </p>
        </div>
      </section>

      {/* ── PHOTO GRID ────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900">
              Product Photos
            </h2>
            <div className="section-divider mt-2" />
          </div>
          <span className="text-sm text-neutral-400">{galleryImages.length} photos</span>
        </div>
        <GalleryLightbox images={galleryImages} />
      </section>

      {/* ── VIDEOS ────────────────────────────────────────────────────────── */}
      <section className="bg-[#f8f6f3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c0392b] mb-2">
              Videos
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900">
              See Our Showroom in Action
            </h2>
            <div className="section-divider mt-2" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="rounded-2xl overflow-hidden bg-neutral-900 shadow-lg">
              <video
                id="gallery-video-1"
                className="w-full aspect-video"
                controls
                preload="metadata"
                poster="/images/products/floor-wall-tiles-showroom.jpg"
                aria-label="Andymore showroom walkthrough video"
              >
                <source src="/videos/showroom_short_clip.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm">Showroom Walkthrough</h3>
                <p className="text-neutral-400 text-xs mt-1">
                  A tour of our tile, sanitary ware, and bathroom fittings floors.
                </p>
              </div>
            </div>
            {/* Video 2 */}
            <div className="rounded-2xl overflow-hidden bg-neutral-900 shadow-lg">
              <video
                id="gallery-video-2"
                className="w-full aspect-video"
                controls
                preload="metadata"
                poster="/images/products/andymore-storefront.jpg"
                aria-label="Andymore kitchen appliances showcase video"
              >
                <source src="/videos/VID-20260629-WA0035_enhanced (2).mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm">Store Showcase</h3>
                <p className="text-neutral-400 text-xs mt-1">
                  Range hoods, gas hobs, and kitchen fittings on display.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

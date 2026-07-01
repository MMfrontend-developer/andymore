"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: GalleryImage[];
}

export default function GalleryLightbox({ images }: LightboxProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const open = (i: number) => setActiveIdx(i);
  const close = () => setActiveIdx(null);
  const prev = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((i) => (i! - 1 + images.length) % images.length);
  }, [activeIdx, images.length]);
  const next = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((i) => (i! + 1) % images.length);
  }, [activeIdx, images.length]);

  // Keyboard nav
  useEffect(() => {
    if (activeIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIdx, prev, next]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = activeIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIdx]);

  return (
    <>
      {/* ── GRID ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            id={`gallery-img-${i}`}
            onClick={() => open(i)}
            className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#c0392b] focus:ring-offset-2"
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <ZoomIn
                size={28}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
              />
            </div>
          </button>
        ))}
      </div>

      {/* ── LIGHTBOX OVERLAY ── */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            id="lightbox-close"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={close}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            id="lightbox-prev"
            className="absolute left-3 sm:left-6 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-video mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIdx].src}
              alt={images[activeIdx].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            id="lightbox-next"
            className="absolute right-3 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {activeIdx + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}

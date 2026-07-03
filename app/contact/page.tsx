"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  PHONE_1,
  PHONE_2,
  EMAIL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  GOOGLE_MAPS_URL,
  MAPS_EMBED_SRC,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  whatsappLink,
} from "@/lib/constants";

/* ── Inline SVG icons ──────────────────────────────────────────────────────── */
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
    </svg>
  );
}

/* ── Shared easing ─────────────────────────────────────────────────────────── */
const ease = "easeOut" as const;

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-14 bg-neutral-900 overflow-hidden">
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
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Visit our showroom, call us, or send a WhatsApp message.
            We&apos;re here to help Monday–Saturday.
          </p>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 bg-[#f8f6f3]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">

            {/* ── Left column ── */}
            <div className="w-full min-w-0 space-y-5">

              {/* WhatsApp CTA card */}
              <motion.div
                className="w-full min-w-0 bg-[#25D366] rounded-2xl p-5 sm:p-6 text-white shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0, ease }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-lg leading-none">Chat on WhatsApp</h2>
                    <p className="text-white/80 text-sm">Fastest way to reach us</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Send us a message right now, we typically respond within minutes during business hours.
                </p>
                <a
                  id="contact-whatsapp-btn"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1da851] font-bold rounded-lg hover:bg-green-50 transition-colors text-sm"
                >
                  Open WhatsApp Chat <ExternalLink size={14} />
                </a>
              </motion.div>

              {/* Contact details card */}
              <motion.div
                className="w-full min-w-0 bg-white rounded-2xl p-5 sm:p-6 border border-neutral-100 shadow-sm space-y-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08, ease }}
              >
                <h2 className="font-display font-bold text-xl text-neutral-900">Contact Details</h2>

                {/* Phone */}
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#c0392b]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide font-medium mb-1">Phone</p>
                    <a href={`tel:${PHONE_1}`} className="block text-neutral-800 font-medium hover:text-[#c0392b] transition-colors truncate">
                      {PHONE_1}
                    </a>
                    <a href={`tel:${PHONE_2}`} className="block text-neutral-800 font-medium hover:text-[#c0392b] transition-colors truncate">
                      {PHONE_2}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#c0392b]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide font-medium mb-1">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-neutral-800 font-medium hover:text-[#c0392b] transition-colors break-words">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#c0392b]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide font-medium mb-1">Address</p>
                    <p className="text-neutral-800 font-medium">{ADDRESS_LINE1}</p>
                    <p className="text-neutral-800 font-medium">{ADDRESS_LINE2}</p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-[#c0392b] font-semibold hover:underline"
                    >
                      Get Directions <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[#c0392b]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide font-medium mb-1">Opening Hours</p>
                    <p className="text-neutral-800 font-medium">Monday – Saturday</p>
                    <p className="text-neutral-500 text-sm">8:00 AM – 6:00 PM</p>
                    <p className="text-neutral-400 text-sm mt-0.5">Closed Sundays &amp; Public Holidays</p>
                  </div>
                </div>
              </motion.div>

              {/* Social links card */}
              <motion.div
                className="w-full min-w-0 bg-white rounded-2xl p-5 sm:p-6 border border-neutral-100 shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16, ease }}
              >
                <h3 className="font-semibold text-neutral-900 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    id="contact-instagram-link"
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <InstagramIcon size={16} />
                    <span>Instagram</span>
                  </a>
                  <a
                    id="contact-facebook-link"
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg bg-[#1877f2] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <FacebookIcon size={16} />
                    <span>Facebook</span>
                  </a>
                  <a
                    id="contact-tiktok-link"
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <TikTokIcon size={16} />
                    <span>TikTok</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* ── Right column: Map ── */}
            <div className="w-full min-w-0 space-y-4">
              <motion.div
                className="w-full min-w-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05, ease }}
              >
                <div className="p-4 border-b border-neutral-100 flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold text-neutral-900">Find Our Showroom</h2>
                    <p className="text-xs text-neutral-400 mt-0.5 truncate">{ADDRESS_LINE1}, {ADDRESS_LINE2}</p>
                  </div>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#c0392b] font-semibold hover:underline shrink-0"
                  >
                    Open in Maps <ExternalLink size={12} />
                  </a>
                </div>
                {/* Map iframe */}
                <div className="w-full h-[260px] sm:h-[340px] lg:h-[420px]">
                  <iframe
                    id="google-map-embed"
                    src={MAPS_EMBED_SRC}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Andymore Business Concept location on Google Maps"
                    allowFullScreen
                  />
                </div>
              </motion.div>

              {/* Directions card */}
              <motion.div
                className="w-full min-w-0 bg-neutral-900 rounded-2xl p-5 text-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12, ease }}
              >
                <h3 className="font-semibold mb-2">How to Find Us</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  We&apos;re located on{" "}
                  <strong className="text-neutral-200">Yakoyo Road</strong>, before the Alagbole
                  Road junction, in{" "}
                  <strong className="text-neutral-200">Ojodu Berger</strong>. Look for our
                  red-and-white building with the Andymore signage across the front. We&apos;re a
                  short distance from the Berger bus stop.
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#c0392b] text-white text-sm font-semibold rounded-lg hover:bg-[#962d22] transition-colors"
                >
                  <MapPin size={15} />
                  Get Directions on Google Maps
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

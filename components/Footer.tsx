import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

// Inline SVG social icons (not in this version of lucide-react)
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
import {
  BUSINESS_NAME,
  PHONE_1,
  PHONE_2,
  EMAIL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  GOOGLE_MAPS_URL,
} from "@/lib/constants";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// TikTok SVG icon (not in lucide)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="inline-block rounded-xl shadow-sm mb-4">
            <div 
              className="relative overflow-hidden shrink-0" 
              style={{ 
                width: "115px", 
                height: "60px",
              }}
            >
              <Image
                src="/images/products/logo-2.png"
                alt="Andymore Logo"
                width={2000}
                height={887}
                className="absolute max-w-none"
                style={{
                  width: "145.2%",
                  height: "180.1%",
                  left: "-19.6%",
                  top: "-19.1%",
                }}
                priority
              />
            </div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            Your one-stop shop for quality building materials and kitchen appliances
            in Lagos. Trusted by homeowners, contractors, and developers.
          </p>
          {/* Socials */}
          <div className="flex gap-3 mt-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#c0392b] transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#c0392b] transition-colors"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#c0392b] transition-colors"
            >
              <TikTokIcon size={16} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-neutral-400 hover:text-[#e74c3c] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products shortcut */}
        <div>
          <h3 className="text-white font-semibold mb-4">What We Sell</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            {[
              "Floor & Wall Tiles",
              "Marble & Porcelain Slabs",
              "Sanitary Ware & WC Sets",
              "Bathtubs & Jacuzzis",
              "Shower Systems & Faucets",
              "Decorative Mirrors",
              "Kitchen Range Hoods",
              "Built-in Gas Hobs",
              "Water Tanks & Pipes",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5 items-start">
              <MapPin size={16} className="text-[#e74c3c] mt-0.5 shrink-0" />
              <div>
                <p className="hover:text-white">{ADDRESS_LINE1}</p>
                <p className="hover:text-white">{ADDRESS_LINE2}</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e74c3c] text-xs mt-1 inline-block hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={16} className="text-[#e74c3c] shrink-0" />
              <div>
                <a href={`tel:${PHONE_1}`} className="hover:text-white transition-colors block">
                  {PHONE_1}
                </a>
                <a href={`tel:${PHONE_2}`} className="hover:text-white transition-colors block">
                  {PHONE_2}
                </a>
              </div>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail size={16} className="text-[#e74c3c] shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">
                {EMAIL}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-neutral-500">
            Mon – Sat: 8:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>© {year} {BUSINESS_NAME}. All rights reserved.</p>
          <p>Ojodu Berger, Lagos State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}

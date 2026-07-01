"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed px-2 py-1 inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#c0392b] flex items-center justify-center">
            <Image
              src="/images/products/andymore-storefront.jpg"
              alt="Andymore logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="leading-tight">
            <span className="block font-display font-bold text-[#c0392b] text-lg leading-none">
              Andymore
            </span>
            <span className="block text-[10px] text-neutral-500 tracking-widest uppercase">
              Business Concept
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#c0392b] bg-red-50 font-semibold"
                    : "text-neutral-700 hover:text-[#c0392b] hover:bg-red-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-[#c0392b] text-white text-sm font-semibold rounded-md hover:bg-[#962d22] transition-colors"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-100 shadow-lg">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-6 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#c0392b] bg-red-50 font-semibold border-l-2 border-[#c0392b]"
                      : "text-neutral-700 hover:text-[#c0392b] hover:bg-red-50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-2 pb-4">
              <Link
                href="/contact"
                className="block text-center px-4 py-2.5 bg-[#c0392b] text-white text-sm font-semibold rounded-md hover:bg-[#962d22]"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

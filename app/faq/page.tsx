import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faqs } from "@/data/faq";
import FAQAccordion from "@/components/FAQAccordion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Got questions about Andymore? Find answers about bulk orders, delivery, payment, product viewing, returns, and more. Or reach us directly on WhatsApp.",
};

export default function FAQPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-14 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/products/marble-porcelain-tiles.jpg"
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
            Help Centre
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Answers to the questions we hear most often from customers and contractors.
          </p>
        </div>
      </section>

      {/* ── FAQ ACCORDION ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-1">
              Common Questions
            </h2>
            <div className="section-divider" />
            <p className="mt-3 text-sm text-neutral-500">
              Click any question to expand the answer.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 mb-4">
            Still Have a Question?
          </h2>
          <p className="text-neutral-500 mb-8 leading-relaxed">
            If you didn't find what you were looking for, our team is happy to help.
            Reach us on WhatsApp for the fastest response, or visit our contact page
            for all the ways to get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1da851] transition-colors"
            >
              <MessageCircle size={20} />
              Ask on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c0392b] text-white font-semibold rounded-xl hover:bg-[#962d22] transition-colors"
            >
              Contact Page <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

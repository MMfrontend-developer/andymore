"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, Star, Shield, Zap, Users, CheckCircle } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

/* ── Hero Typewriter Component ──────────────────────────────────────────────── */
export function HeroTypewriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 40); // Fast, snappy typewriter effect
    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-lg text-neutral-200 leading-relaxed mb-8 max-w-xl min-h-[5.5rem] relative">
      {displayedText}
      <span className="animate-pulse bg-[#c9a84c] inline-block w-1.5 h-5 ml-1 align-middle" />
    </p>
  );
}

/* ── Why Us data lives here to avoid passing functions as server props ─────── */
const whyUsItems = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Every product in our showroom is quality-checked before it reaches you. We stock only brands and materials that meet our high standards.",
  },
  {
    icon: Zap,
    title: "Lagos-Ready Stock",
    desc: "We maintain ready stock of fast-moving items so you're never left waiting on a building site. Order today, receive quickly.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Our experienced team speaks your language — whether you're a developer, contractor, or homeowner fitting out your first property.",
  },
  {
    icon: CheckCircle,
    title: "One-Stop Shop",
    desc: "From foundation to finishing — tiles, fittings, appliances, and more — all sourced from one trusted supplier in Ojodu Berger.",
  },
];

/* ── Why Us Cards ─────────────────────────────────────────────────────────── */
export function AnimatedWhyUs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {whyUsItems.map(({ icon: Icon, title, desc }, i) => (
        <motion.div
          key={title}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
        >
          <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center mb-4">
            <Icon size={22} className="text-[#c0392b]" />
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2">{title}</h3>
          <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Testimonial Cards ────────────────────────────────────────────────────── */
export function AnimatedTestimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 flex flex-col gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (i % 3) * 0.05, ease: "easeOut" }}
        >
          <Quote size={28} className="text-[#c0392b]/20" />
          <p className="text-neutral-700 text-sm leading-relaxed flex-1 italic">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c0392b] to-[#c9a84c] flex items-center justify-center text-white font-bold text-sm">
              {t.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
              <p className="text-xs text-neutral-400">{t.location}</p>
            </div>
            <div className="ml-auto flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={12} className="text-[#c9a84c] fill-[#c9a84c]" />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

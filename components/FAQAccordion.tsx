"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/data/faq";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? "border-[#c0392b] bg-red-50/50"
                : "border-neutral-200 bg-white hover:border-neutral-300"
            }`}
          >
            <button
              id={`faq-btn-${i}`}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              <span className={`font-medium text-sm sm:text-base ${isOpen ? "text-[#c0392b]" : "text-neutral-800"}`}>
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-neutral-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#c0392b]" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${i}`}
                role="region"
                className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-red-100 pt-3"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

"use client";

import React from "react";
import {
  PackageSearch,
  Boxes,
  MessageSquare,
  Truck,
  Store,
  Building2,
  Headphones,
  Palette,
  Wrench,
} from "lucide-react";
import type { Service } from "@/data/services";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  PackageSearch,
  Boxes,
  MessageSquare,
  Truck,
  Store,
  Building2,
  HeadphonesIcon: Headphones,
  Palette,
  Wrench,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? PackageSearch;

  return (
    <motion.div
      className="group bg-white rounded-xl p-6 border border-neutral-100 hover:border-[#c0392b]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: (index % 3) * 0.05,
        ease: "easeOut",
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-[#c0392b] transition-colors">
        <Icon size={22} className="text-[#c0392b] group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="font-semibold text-neutral-900 text-base mb-1.5">{service.title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { whatsappLink } from "@/lib/constants";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      className="group bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: (index % 3) * 0.05,
        ease: "easeOut",
      }}
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#c0392b] text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-semibold text-neutral-900 text-lg leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-4">
          {product.description}
        </p>
        <a
          id={`inquire-${product.id}`}
          href={whatsappLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-[#1da851] transition-colors"
        >
          <MessageCircle size={16} />
          Inquire on WhatsApp
        </a>
      </div>
    </motion.article>
  );
}

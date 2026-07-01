export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "sourcing-supply",
    title: "Product Sourcing & Supply",
    description:
      "We source premium building materials and kitchen appliances directly from trusted manufacturers, giving you access to quality products that aren't always available on the local market — delivered to your site in Lagos.",
    icon: "PackageSearch",
  },
  {
    id: "bulk-orders",
    title: "Bulk & Trade Orders",
    description:
      "Developers, contractors, and architects can place large-volume orders for tiles, sanitary ware, fittings, and appliances with confidence. We maintain strong stock levels and offer competitive rates for trade buyers.",
    icon: "Boxes",
  },
  {
    id: "product-consultation",
    title: "Product Consultation",
    description:
      "Not sure which tiles match your design brief, or which range hood suits your kitchen layout? Our experienced team will guide you through specifications, finishes, and compatibility — all at no extra charge.",
    icon: "MessageSquare",
  },
  {
    id: "delivery",
    title: "Delivery & Logistics",
    description:
      "We arrange safe, timely delivery of orders across Lagos State and beyond. Heavy items like tiles, bathtubs, and water tanks are handled with care to arrive at your site intact and on schedule.",
    icon: "Truck",
  },
  {
    id: "showroom-viewing",
    title: "Showroom Viewing",
    description:
      "Visit our showroom at Ojodu Berger to see, touch, and compare products in person. Our display floor features live tile layouts, fitted kitchen setups, and bathroom vignettes so you can visualise before you commit.",
    icon: "Store",
  },
  {
    id: "project-supply",
    title: "Full Project Supply",
    description:
      "From the foundation to the finishing touches — tiles, plumbing fittings, sanitary ware, kitchen appliances, mirrors, and water tanks — we can supply everything a residential or commercial project needs from one location.",
    icon: "Building2",
  },
  {
    id: "after-sales",
    title: "After-Sales Support",
    description:
      "Our relationship doesn't end at the sale. If you have concerns about a product after delivery, our team is reachable via WhatsApp, phone, and email to resolve issues promptly and professionally.",
    icon: "HeadphonesIcon",
  },
  {
    id: "interior-referrals",
    title: "Interior Design Referrals",
    description:
      "Need help bringing your vision to life beyond the products? We connect you with trusted interior designers and finishing contractors in Lagos who understand the materials we supply — so your project comes together seamlessly.",
    icon: "Palette",
  },
  {
    id: "installation-support",
    title: "Installation Guidance",
    description:
      "Buying tiles, a bathtub, or a range hood is only half the journey. We provide technical guidance on installation requirements and can connect you with skilled tradespeople who are familiar with the products we stock.",
    icon: "Wrench",
  },
];

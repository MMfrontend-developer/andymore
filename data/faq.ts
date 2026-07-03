import { PHONE_1, PHONE_2, EMAIL } from "../lib/constants";

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How do I place an order?",
    answer:
      "The easiest way is to contact us via WhatsApp or phone. Browse our products online, note the item(s) you're interested in, and send us a message. Our team will confirm availability, discuss your requirements, and arrange delivery or pickup.",
  },
  {
    question: "Do you do bulk orders for contractors and developers?",
    answer:
      "Yes, we actively work with developers, contractors, and architects on large-scale projects. We maintain high stock levels for tiles, sanitary ware, fittings, and appliances, and we offer competitive pricing for trade buyers. Contact us to discuss your project requirements.",
  },
  {
    question: "Do you deliver? What areas do you cover?",
    answer:
      "We deliver across Lagos State and can arrange logistics to other parts of Nigeria for large orders. Delivery costs and timelines vary by order size and location. Contact us with your address and we'll provide a delivery quote.",
  },
  {
    question: "Can I see the products before buying?",
    answer:
      "Absolutely. We have a well-stocked showroom at 36/75 Yakoyo Road, before Alagbole Road, Ojodu Berger, Lagos. You can visit during business hours to see tiles, bathroom fittings, kitchen appliances, mirrors, and more in person before making any decision.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "Our showroom is open Monday to Saturday, 8:00 AM – 6:00 PM. We are closed on Sundays and public holidays. You can also reach us via WhatsApp outside of these hours and we'll respond as soon as possible.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "We supply products only and do not provide installation services directly. However, we can recommend trusted, experienced tradespeople in Lagos who regularly work with our products if you need a reliable installer.",
  },
  {
    question: "Are your tiles and sanitary ware imported or locally made?",
    answer:
      "We stock a curated mix of imported and high-quality locally sourced products. Our imported ranges include Italian-style porcelain tiles, marble slabs, and European sanitary ware. All products are quality-checked before being offered for sale.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "We accept returns or exchanges for items that arrive damaged or are found to be defective. Returns must be reported within 48 hours of delivery with photographic evidence. Custom or special-order items cannot be returned unless faulty. Contact us immediately if you have a concern.",
  },
  {
    question: "Do you have products suitable for outdoor use?",
    answer:
      "Yes. We stock outdoor-rated tiles with anti-slip and frost-resistant properties, as well as UV-resistant water tanks and PVC pipes designed for outdoor plumbing. Let us know your specific use case and we'll recommend the right products.",
  },
  {
    question: "How do I know which tile size is right for my space?",
    answer:
      "This is one of the most common questions, and our team is happy to help. As a general guide, larger tiles (60×60 cm and above) make smaller rooms appear bigger, while smaller mosaic tiles work well for feature walls. Visit our showroom or send us your room dimensions via WhatsApp for a personalised recommendation.",
  },
  {
    question: "Do you sell water tanks in different sizes?",
    answer:
      "Yes. We stock polyethylene water storage tanks in a range of capacities, from 500 litres for residential use up to 10,000 litres for commercial and industrial applications. All tanks are UV-resistant, food-grade safe, and come with fittings.",
  },
  {
    question: "How do I contact Andymore?",
    answer:
      `You can reach us via WhatsApp or phone at ${PHONE_1} or ${PHONE_2}, by email at ${EMAIL}, or by visiting our showroom at 36/75 Yakoyo Road, before Alagbole Road, Ojodu Berger, Lagos State. You can also find us on Instagram, Facebook, and TikTok.`,
  },
];

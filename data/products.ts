export type ProductCategory = "Building Materials" | "Kitchen Appliances";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
}

export const products: Product[] = [
  // ── Building Materials ────────────────────────────────────────────────────
  {
    id: "floor-wall-tiles",
    name: "Floor & Wall Tiles",
    category: "Building Materials",
    description:
      "Premium porcelain and ceramic tiles in marble, stone, mosaic, and wood-effect finishes. Available in multiple sizes for floors, walls, bathrooms, and outdoor spaces, built to last in Lagos's climate.",
    image: "/images/products/flooring-tile-variety.jpg",
  },
  {
    id: "marble-porcelain-slabs",
    name: "Marble & Porcelain Slabs",
    category: "Building Materials",
    description:
      "Large-format polished marble and porcelain slabs for statement floors, feature walls, and countertops. Stunning veining patterns from Calacatta white to dramatic dark tones, imported quality at competitive rates.",
    image: "/images/products/marble-porcelain-tiles.jpg",
  },
  {
    id: "decorative-cladding",
    name: "Decorative Wall Cladding",
    category: "Building Materials",
    description:
      "Textured stone, brick-look, and mosaic cladding panels for interior feature walls and exterior facades. Add depth and character to any building, without the weight of natural stone.",
    image: "/images/products/tiles-cladding-variety.jpg",
  },
  {
    id: "water-tanks",
    name: "Plastic Water Tanks & Pipes",
    category: "Building Materials",
    description:
      "Heavy-duty polyethylene water storage tanks in capacities from 500 L to 10,000 L, plus full ranges of PVC and PPR plumbing pipes. UV-resistant and food-grade safe for residential and commercial builds.",
    image: "/images/products/water-tanks.jpg",
  },
  {
    id: "bathroom-mirrors",
    name: "Bathroom Mirrors",
    category: "Building Materials",
    description:
      "Contemporary and ornate bathroom mirrors, from sleek frameless rectangles to LED-backlit vanity mirrors. Also available in gold-framed baroque and oval styles for a luxurious bathroom aesthetic.",
    image: "/images/products/bathroom-mirrors-accessories.jpg",
  },
  {
    id: "decorative-mirrors",
    name: "Decorative Mirrors",
    category: "Building Materials",
    description:
      "Statement decorative mirrors in silver and gold frames, oval, round, and rectangular designs with hand-carved details. Perfect for living rooms, entryways, and feature alcoves in any Nigerian home.",
    image: "/images/products/decorative-mirrors.jpg",
  },
  {
    id: "sanitary-ware",
    name: "Sanitary Ware & WC Sets",
    category: "Building Materials",
    description:
      "Complete bathroom sanitary ware: close-coupled WC toilet sets, pedestal wash basins, wall-hung units, and wall-mounted water heaters. Modern and classic styles to suit every budget and specification.",
    image: "/images/products/toilet-sets-water-heater.jpg",
  },
  {
    id: "bathtubs",
    name: "Bathtubs & Jacuzzis",
    category: "Building Materials",
    description:
      "Freestanding soaking tubs, built-in bathtubs, and whirlpool Jacuzzi units with multiple jet positions. Available in acrylic and composite materials, turn your bathroom into a private retreat.",
    image: "/images/products/whirlpool-bathtub.jpg",
  },
  {
    id: "shower-systems",
    name: "Shower Systems & Faucets",
    category: "Building Materials",
    description:
      "Full shower systems from rainfall shower heads to thermostatic tower panels with body jets. Also stocking a wide range of kitchen and bathroom faucets in chrome, matte black, and brushed gold finishes.",
    image: "/images/products/shower-systems-faucets.jpg",
  },

  // ── Kitchen Appliances ────────────────────────────────────────────────────
  {
    id: "kitchen-range-hoods",
    name: "Kitchen Range Hoods",
    category: "Kitchen Appliances",
    description:
      "Powerful kitchen extractor hoods in island-mount, wall-mount, and under-cabinet styles. Available in sleek black glass and stainless steel finishes, quiet motors, strong suction, and easy-clean filter systems.",
    image: "/images/products/kitchen-range-hoods.jpg",
  },
  {
    id: "built-in-gas-hobs",
    name: "Built-in Gas Hobs & Cooktops",
    category: "Kitchen Appliances",
    description:
      "Tempered glass and stainless steel built-in gas hobs with 4 and 5 burner configurations. Compatible with LPG and natural gas, these sleek cooktops integrate flush into any modern kitchen worktop design.",
    image: "/images/products/built-in-gas-hobs.jpg",
  },
  {
    id: "chimney-hoods",
    name: "Chimney Range Hoods",
    category: "Kitchen Appliances",
    description:
      "Statement chimney-style extractor hoods in stainless steel and black glass, designed for open-plan kitchens where the hood becomes part of the decor. High-performance motors eliminate smoke, steam, and cooking odours efficiently.",
    image: "/images/products/chimney-range-hoods.jpg",
  },
  {
    id: "kitchen-sinks",
    name: "Burner Tempered Glass Gas Cooktop",
    category: "Kitchen Appliances",
    description:
      "A stylish 3-burner built-in gas cooktop with a premium tempered glass finish, high-efficiency brass burners, sturdy cast-iron supports, and precise flame control. Designed for durability, easy cleaning, and exceptional cooking performance.",
    image: "/images/products/premium-3-burner-gas-cooktop.png",
  },
  {
    id: "kitchen-accessories",
    name: "Tiles & Fittings",
    category: "Kitchen Appliances",
    description:
      "Complete your kitchen with our range of accessories: pull-out basket systems, soft-close drawer fittings, cabinet handles, wall-mounted pot rails, and splash-back panels. Everything needed to finish your kitchen to a professional standard.",
    image: "/images/products/tiles-cladding-variety.jpg",
  },
];

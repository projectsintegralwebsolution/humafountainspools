export interface ProductVariant {
  code: string;
  dimension: string;
  wattage: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  categoryName: string;
  subCategory: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: Record<string, string>;
  variants?: ProductVariant[];
  applications: string[];
  features: string[];
  isFeatured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  productCount: number;
  subCategories: string[];
}

export interface Catalogue {
  id: string;
  title: string;
  filename: string;
  cover: string;
  file: string;
  pages: number;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  mfgSince: string;
  founder: string;
  certification: string;
  address: string;
  phoneNumbers: string[];
  primaryPhone: string;
  email: string;
  website: string;
  businessHours: string;
  catalogues: Catalogue[];
}

export const PRODUCTS: Product[] = [
  {
    "id": "hf00-hf05-surface",
    "code": "HF00 - HF05",
    "name": "Surface Model Swimming Pool Light (SS 304/316)",
    "slug": "surface-model-swimming-pool-light-hf00-hf05",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "Underwater Pool Lights",
    "shortDescription": "Full stainless steel surface-mount swimming pool light engineered for underwater durability and high photometric efficiency.",
    "description": "Manufactured with premium SS 304/316 marine-grade stainless steel or aluminium plate, the HUMA Surface Model Swimming Pool Light delivers reliable, long-lasting illumination for concrete and tiled swimming pools. Features IP68 water ingress protection, high-efficiency Power LED Edison chips, and customizable beam spread angles.",
    "image": "/assets/products/hf04-surface-pool-light.webp",
    "gallery": [
      "/assets/products/hf04-surface-pool-light.webp",
      "/assets/products/hf01-surface-pool-light.webp",
      "/assets/products/hf02-surface-pool-light.webp",
      "/assets/products/hf03-surface-pool-light.webp",
      "/assets/products/hf05-surface-pool-light.webp"
    ],
    "specifications": {
      "Body Material": "SS 304 / 316 / Aluminium Plate Model",
      "Lens": "PC Glass (Impact & UV Resistant)",
      "LED Chip": "Power LED Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Pool Wall Surface Mounting",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Submersible Wire",
      "Color Options": "WW (Warm White), CW (Cool White), RGB, Red, Blue, Green",
      "Available Wattages": "1W, 3W, 6W, 9W, 12W, 18W, 27W, 36W",
      "Dimensions": "Dia 50mm to 6\" (Depth 22mm - 1\")"
    },
    "variants": [
      {
        "code": "HF00",
        "dimension": "Dia 50mm, Depth 1\"",
        "wattage": "1W / 3W"
      },
      {
        "code": "HF01",
        "dimension": "Dia 3\", Depth 22mm",
        "wattage": "3W / 9W"
      },
      {
        "code": "HF02",
        "dimension": "Dia 4\", Depth 22mm",
        "wattage": "6W / 18W"
      },
      {
        "code": "HF03",
        "dimension": "Dia 5\", Depth 1\"",
        "wattage": "9W / 27W"
      },
      {
        "code": "HF04",
        "dimension": "Dia 5\", Depth 1\"",
        "wattage": "12W / 36W"
      },
      {
        "code": "HF05",
        "dimension": "Dia 6\", Depth 1\"",
        "wattage": "18W"
      }
    ],
    "applications": [
      "Residential Swimming Pools",
      "Commercial Pools",
      "Hotels & Resorts",
      "Water Bodies"
    ],
    "features": [
      "Heavy-duty SS 304/316 body resistant to pool chemicals and corrosion",
      "True IP68 hermetically sealed underwater construction",
      "High luminous efficiency with Edison Power LED emitters",
      "Poly Cab submersible-grade marine wiring for long-term safety",
      "Flexible beam angles for tailored pool floor and wall washes"
    ],
    "isFeatured": true
  },
  {
    "id": "hf06-hf010-abs",
    "code": "HF06 - HF010",
    "name": "ABS Body Swimming Pool Light",
    "slug": "abs-body-swimming-pool-light-hf06-hf010",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "LED Pool Lights",
    "shortDescription": "Durable ABS & Polycarbonate swimming pool lights with superior chemical resistance and uniform light distribution.",
    "description": "Constructed from high-grade ABS polymer and UV-stabilized Polycarbonate (PC) glass, this range provides chemical and chlorine resistance without oxidation. Ideal for both chlorinated and saltwater swimming pool installations, offering rich vibrant colors and minimal maintenance.",
    "image": "/assets/products/hf09-abs-pool-light.webp",
    "gallery": [
      "/assets/products/hf09-abs-pool-light.webp",
      "/assets/products/hf06-abs-pool-light.webp",
      "/assets/products/hf07-abs-pool-light.webp",
      "/assets/products/hf08-abs-pool-light.webp",
      "/assets/products/hf010-abs-pool-light.webp"
    ],
    "specifications": {
      "Body Material": "ABS + PC (Chlorine & Saltwater Resistant)",
      "Lens": "PC Glass",
      "LED Chip": "Power LED Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Pool Wall Mounting",
      "Beam Angle": "20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW, CW, RGB, Red, Blue, Green",
      "Available Wattages": "3W, 6W, 9W, 12W, 18W, 27W, 36W",
      "Dimensions": "Dia 5.5\" - 9\" (Depth 40mm)"
    },
    "variants": [
      {
        "code": "HF06",
        "dimension": "Dia 5.5\", Depth 40mm",
        "wattage": "3W / 9W"
      },
      {
        "code": "HF07",
        "dimension": "Dia 6.5\", Depth 40mm",
        "wattage": "6W / 18W"
      },
      {
        "code": "HF08",
        "dimension": "Dia 9\", Depth 40mm",
        "wattage": "9W / 27W"
      },
      {
        "code": "HF09",
        "dimension": "Dia 9\", Depth 40mm",
        "wattage": "12W / 36W"
      },
      {
        "code": "HF010",
        "dimension": "Dia 9\", Depth 40mm",
        "wattage": "18W"
      }
    ],
    "applications": [
      "Residential Pools",
      "Clubhouse Pools",
      "Hotels & Resorts",
      "School Pools"
    ],
    "features": [
      "Corrosion-free ABS composite body suited for high-salinity pools",
      "Robust PC glass lens with anti-glare micro-prism structure",
      "IP68 waterproof certification with precision silicone gaskets",
      "Edison Power LEDs providing vibrant color reproduction",
      "Standard wall bracket for seamless retrofit or new construction"
    ],
    "isFeatured": true
  },
  {
    "id": "hf012-slim-abs",
    "code": "HF012",
    "name": "Ultra-Slim 15mm ABS Swimming Pool Light",
    "slug": "ultra-slim-15mm-abs-swimming-pool-light-hf012",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "LED Pool Lights",
    "shortDescription": "Ultra-low-profile 15mm slim pool light featuring SMD 2835 Cree LEDs for sleek architectural flush wall integration.",
    "description": "With an ultra-thin protrusion of merely 15mm off the finished pool tile wall, the HF012 model delivers an ultra-clean modern aesthetic that prevents accidental foot snagging and streamlines pool maintenance. Powered by cutting-edge SMD 2835 Cree LED arrays for high lumen efficacy and extended operational lifespan.",
    "image": "/assets/products/hf012-slim-abs-pool-light.webp",
    "gallery": [
      "/assets/products/hf012-slim-abs-pool-light.webp"
    ],
    "specifications": {
      "Body Material": "High-Impact ABS + PC",
      "Lens": "PC Glass Clear Diffuser",
      "LED Chip": "SMD 2835 Cree LED Array",
      "Protection Class": "IP68 Submersible Waterproof",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Pool Wall Mounting (Slim Profile)",
      "Beam Angle": "20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "Warm White, Cool White, RGB, Red, Blue, Green",
      "Available Wattages": "12W / 18W / 27W / 36W",
      "Dimensions": "Dia 11\", Depth 15 mm (Ultra Slim)"
    },
    "variants": [
      {
        "code": "HF012-12W",
        "dimension": "Dia 11\", Depth 15mm",
        "wattage": "12 Watt"
      },
      {
        "code": "HF012-18W",
        "dimension": "Dia 11\", Depth 15mm",
        "wattage": "18 Watt"
      },
      {
        "code": "HF012-27W",
        "dimension": "Dia 11\", Depth 15mm",
        "wattage": "27 Watt"
      },
      {
        "code": "HF012-36W",
        "dimension": "Dia 11\", Depth 15mm",
        "wattage": "36 Watt"
      }
    ],
    "applications": [
      "Luxury Residential Pools",
      "Infinity Pools",
      "Hotel Rooftop Pools",
      "Architectural Pools"
    ],
    "features": [
      "Remarkably slim 15mm depth for a seamless architectural wall profile",
      "High-density SMD 2835 Cree chip board for even illumination across water",
      "Zero corrosion polymer construction resistant to UV degradation",
      "Easy clip-on wall mounting bracket with secure locking mechanism",
      "Full IP68 submersible rating with thermal dissipation backing"
    ],
    "isFeatured": true
  },
  {
    "id": "hf011-hf013-abs",
    "code": "HF011 / HF013",
    "name": "Heavy-Duty 11\" ABS Swimming Pool Light",
    "slug": "heavy-duty-11-inch-abs-swimming-pool-light-hf011-hf013",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "Swimming Pool Lights",
    "shortDescription": "High-output 11-inch diameter pool fixture engineered with SMD 2835 Cree LEDs for expansive water coverage.",
    "description": "The HF011 & HF013 series are flagship 11-inch swimming pool lights engineered for medium-to-large residential and commercial pool volumes. Their broad optical surface and Cree SMD arrays cast a wide, luminous blanket across water depth with zero dark spots.",
    "image": "/assets/products/hf011-abs-pool-light.webp",
    "gallery": [
      "/assets/products/hf011-abs-pool-light.webp",
      "/assets/products/hf013-abs-pool-light.webp"
    ],
    "specifications": {
      "Body Material": "ABS + PC Engineered Polymer",
      "Lens": "PC Glass Textured Diffuser",
      "LED Chip": "SMD 2835 Cree",
      "Protection Class": "IP68 Submersible Waterproof",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Pool Wall Mounting",
      "Beam Angle": "20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW, CW, RGB, Red, Blue, Green",
      "Available Wattages": "12W, 18W, 27W, 36W",
      "Dimensions": "Dia 11\", Depth 41 mm"
    },
    "variants": [
      {
        "code": "HF011",
        "dimension": "Dia 11\", Depth 41mm",
        "wattage": "12W / 18W / 27W / 36W"
      },
      {
        "code": "HF013",
        "dimension": "Dia 11\", Depth 41mm",
        "wattage": "12W / 18W / 27W / 36W"
      }
    ],
    "applications": [
      "Commercial Swimming Pools",
      "Olympic & Training Pools",
      "Resort Lagoons",
      "Villa Pools"
    ],
    "features": [
      "Extensive 11-inch beam face for maximum water body dispersion",
      "SMD 2835 Cree LED engine offering up to 36W of intense underwater output",
      "Engineered slotted bezel design for hydrodynamic water flow",
      "IP68 certified underwater protection with reinforced sealing",
      "Supplied with standard Poly Cab marine grade 1-meter wire"
    ],
    "isFeatured": false
  },
  {
    "id": "hf018-color-rim",
    "code": "HF018",
    "name": "Custom Color Rim ABS Swimming Pool Light",
    "slug": "custom-color-rim-abs-swimming-pool-light-hf018",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "Pool Light Fittings",
    "shortDescription": "Designer pool luminaire available in White, Grey, Black, Blue and Red rim options to complement pool tile aesthetics.",
    "description": "Architects and pool designers frequently require lighting hardware that harmonizes with mosaic tile tones, liner colors, and natural stone finishes. The HF018 offers interchangeable designer rim finishes in White, Grey, Anthracite Black, Ocean Blue, and Crimson Red alongside Cree SMD LED performance.",
    "image": "/assets/products/hf018-abs-color-rim-pool-light.webp",
    "gallery": [
      "/assets/products/hf018-abs-color-rim-pool-light.webp",
      "/assets/products/hf018-rim-colorways.webp"
    ],
    "specifications": {
      "Body Material": "ABS + PC (Multiple Color Rims)",
      "Available Rim Colors": "Classic White, Modern Grey, Sleek Black, Deep Blue, Bold Red",
      "Lens": "PC Glass",
      "LED Chip": "SMD 2835 Cree",
      "Protection Class": "IP68 Submersible",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Pool Wall Mounting",
      "Beam Angle": "20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "Warm White, Cool White, RGB, Red, Blue, Green",
      "Available Wattages": "9W / 12W / 18W / 27W / 36W",
      "Dimensions": "Dia 6\" & Dia 9.5\", Depth 30 mm"
    },
    "variants": [
      {
        "code": "HF018-6",
        "dimension": "Dia 6\", Depth 30mm",
        "wattage": "9W / 12W / 18W"
      },
      {
        "code": "HF018-9.5",
        "dimension": "Dia 9.5\", Depth 30mm",
        "wattage": "18W / 27W / 36W"
      }
    ],
    "applications": [
      "Designer Tile Pools",
      "Dark Plaster Pools",
      "Resort Lap Pools",
      "Architectural Water Features"
    ],
    "features": [
      "Choice of 5 architectural rim colors: White, Grey, Black, Blue, Red",
      "Slim 30mm profile reduces protrusion from pool wall",
      "High-grade Cree SMD technology for uniform color distribution",
      "Chemical-resistant polymer prevents discoloration from pool chlorine",
      "Backed by HUMA 2-year manufacturer warranty"
    ],
    "isFeatured": true
  },
  {
    "id": "hf020-hf021-ss",
    "code": "HF020 / HF021",
    "name": "Full SS Body Swimming Pool Light",
    "slug": "full-ss-body-swimming-pool-light-hf020-hf021",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "Underwater Pool Lights",
    "shortDescription": "Marine-grade Stainless Steel swimming pool fixture with optional blue accent bezel ring.",
    "description": "Constructed with solid stainless steel housing and impact-rated PC glass, the HF020 and HF021 series offer industrial-grade robustness and refined visual elegance. Available with decorative aqua blue accent rings or pure polished steel rims.",
    "image": "/assets/products/hf020-ss-pool-light.webp",
    "gallery": [
      "/assets/products/hf020-ss-pool-light.webp",
      "/assets/products/hf021-ss-pool-light.webp"
    ],
    "specifications": {
      "Body Material": "SS 304/316 + PC",
      "Lens": "PC Glass",
      "LED Chip": "Cree / Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Pool Wall Mounting",
      "Beam Angle": "20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW, CW, RGB, Red, Blue, Green",
      "Available Wattages": "6W, 9W, 12W, 18W, 27W, 36W",
      "Dimensions": "Dia 8\", Depth 35 mm"
    },
    "variants": [
      {
        "code": "HF020",
        "dimension": "Dia 8\", Depth 35mm",
        "wattage": "6W / 9W / 18W / 27W"
      },
      {
        "code": "HF021",
        "dimension": "Dia 8\", Depth 35mm",
        "wattage": "12W / 36W"
      }
    ],
    "applications": [
      "Luxury Hotel Pools",
      "Resort Infinity Pools",
      "Private Residential Pools",
      "High-End Spas"
    ],
    "features": [
      "Solid marine grade stainless steel casing for maximum thermal performance",
      "Elegant polished bezel with optional radiant blue accent trim",
      "High power Cree / Edison LEDs with concentrated or wide optical lenses",
      "Heavy-duty internal potting and silicone gaskets for guaranteed IP68 seal",
      "Complies with international low-voltage safety standards"
    ],
    "isFeatured": false
  },
  {
    "id": "hf022-ss-blue-white",
    "code": "HF022",
    "name": "SS Blue / White Rim Swimming Pool Light",
    "slug": "ss-blue-white-rim-swimming-pool-light-hf022",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "Pool Light Fittings",
    "shortDescription": "9-inch diameter stainless steel luminaire with high-output SMD 2835 Cree array and dual-tone rim choices.",
    "description": "The HF022 pairs high-durability stainless steel structure with a choice of high-visibility blue or clean white trim rings. Equipped with a robust stainless steel wall mounting bracket and SMD 2835 Cree/Power LED platform.",
    "image": "/assets/products/hf022-ss-blue-rim-pool-light.webp",
    "gallery": [
      "/assets/products/hf022-ss-blue-rim-pool-light.webp",
      "/assets/products/hf022-ss-white-rim-pool-light.webp"
    ],
    "specifications": {
      "Body Material": "SS + PC Dual Finish",
      "Lens": "PC Glass",
      "LED Chip": "SMD 2835 Cree / Power LED",
      "Protection Class": "IP68 Submersible",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Pool Wall Mounting (SS Bracket)",
      "Beam Angle": "20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW / CW / RGB / Red / Blue / Green",
      "Available Wattages": "9 Watt / 12 Watt / 18 Watt",
      "Dimensions": "Dia 9\", Depth 40 mm"
    },
    "variants": [
      {
        "code": "HF022-Blue",
        "dimension": "Dia 9\", Depth 40mm",
        "wattage": "9W / 12W / 18W"
      },
      {
        "code": "HF022-White",
        "dimension": "Dia 9\", Depth 40mm",
        "wattage": "9W / 12W / 18W"
      }
    ],
    "applications": [
      "Resort Pools",
      "Private Swimming Pools",
      "Commercial Aquatic Centers"
    ],
    "features": [
      "Dual bezel styling available in vibrant blue or pure white rim",
      "Heavy duty stainless steel rear bracket ensures vibration-free mounting",
      "SMD 2835 Cree / Power LED array with uniform beam diffusion",
      "Double-sealed IP68 cable entry point with Poly Cab cable",
      "Tested for continuous 24/7 underwater thermal reliability"
    ],
    "isFeatured": false
  },
  {
    "id": "hf023-hf027-concealed",
    "code": "HF023 - HF027",
    "name": "Concealed / In-Ground Swimming Pool Light",
    "slug": "concealed-in-ground-swimming-pool-light-hf023-hf027",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "Underwater Pool Lights",
    "shortDescription": "Flush-mount recessed stainless steel pool light for steps, shallow decks, coping edges, and submerged wall niches.",
    "description": "Engineered for flush recessing into concrete pool walls, steps, shallow tanning ledges, and swimming pool perimeter walkways. Constructed with SS 304/316 front trim and recessed sleeve housing, ensuring zero protrusion and a clean architectural finish.",
    "image": "/assets/products/hf025-concealed-pool-light.webp",
    "gallery": [
      "/assets/products/hf025-concealed-pool-light.webp",
      "/assets/products/hf023-concealed-pool-light.webp",
      "/assets/products/hf024-concealed-pool-light.webp",
      "/assets/products/hf026-concealed-pool-light.webp",
      "/assets/products/hf027-concealed-pool-light.webp"
    ],
    "specifications": {
      "Body Material": "SS 304 / 316 Trim + Recessed Sleeve",
      "Lens": "Toughened PC Glass",
      "LED Chip": "Power LED Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Swimming Pool Concealed Flush Mounting",
      "Beam Angle": "20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW, CW, RGB, Red, Blue, Green",
      "Available Wattages": "1W, 3W, 6W, 9W, 12W, 18W, 27W, 36W",
      "Cutout Sizes": "Cutout 32mm to 110mm (Outer Dia 45mm to 140mm)"
    },
    "variants": [
      {
        "code": "HF023",
        "dimension": "Outer 45mm, Cutout 32mm, Height 55mm",
        "wattage": "1W / 3W"
      },
      {
        "code": "HF024",
        "dimension": "Outer 65mm, Cutout 60mm, Height 56mm",
        "wattage": "3W / 9W"
      },
      {
        "code": "HF025",
        "dimension": "Outer 110mm, Cutout 85mm, Height 46mm",
        "wattage": "6W / 18W"
      },
      {
        "code": "HF026",
        "dimension": "Outer 140mm, Cutout 110mm, Height 50mm",
        "wattage": "9W / 27W"
      },
      {
        "code": "HF027",
        "dimension": "Outer 140mm, Cutout 110mm, Height 50mm",
        "wattage": "12W / 36W"
      }
    ],
    "applications": [
      "Pool Steps & Risers",
      "Baja Shelves & Tanning Ledges",
      "Perimeter Pool Walkways",
      "Spas & Jacuzzis",
      "Water Fall Basins"
    ],
    "features": [
      "Concealed flush-mount design eliminates trips or snags in shallow water",
      "Machined SS 304/316 face plate withstands foot traffic and pressure",
      "High luminous output from compact Edison Power LED emitters",
      "Supplied with rugged installation sleeve for casting into concrete",
      "IP68 submersible certification with factory-tested water seal"
    ],
    "isFeatured": true
  },
  {
    "id": "hf039-hf042-ss-spot",
    "code": "HF039 - HF042",
    "name": "SS Spot Fountain Light (Heavy Duty)",
    "slug": "ss-spot-fountain-light-hf039-hf042",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Underwater Fountain Lights",
    "shortDescription": "Heavy-duty full stainless steel underwater spot light with 180\u00b0 adjustable stand mount for dynamic fountain jets.",
    "description": "The HUMA HF039\u2013HF042 series spot fountain lights are built for demanding fountain and water display environments. Made from solid SS 304/316 stainless steel with an integrated pivoting bracket, these luminaires can be angled precisely towards water columns, foam jets, and cascades.",
    "image": "/assets/products/hf042-ss-spot-fountain-light.webp",
    "gallery": [
      "/assets/products/hf042-ss-spot-fountain-light.webp",
      "/assets/products/hf039-ss-spot-fountain-light.webp",
      "/assets/products/hf040-ss-spot-fountain-light.webp",
      "/assets/products/hf041-ss-spot-fountain-light.webp"
    ],
    "specifications": {
      "Body Material": "SS 304 / 316 Solid Stainless Steel",
      "Lens": "PC Glass",
      "LED Chip": "Cree / Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Stand Mounted Pivoting System",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW, CW, RGB, Red, Blue, Green",
      "Available Wattages": "3W, 6W, 9W, 12W, 18W, 27W, 36W",
      "Dimensions": "Outer Dia 3.5\" to 140mm"
    },
    "variants": [
      {
        "code": "HF039",
        "dimension": "Back Dia 2.2\", Outer Dia 3.5\"",
        "wattage": "3 Watt / 9 Watt"
      },
      {
        "code": "HF040",
        "dimension": "Back Dia 65mm, Outer Dia 110mm, Length 110mm",
        "wattage": "6 Watt / 18 Watt"
      },
      {
        "code": "HF041",
        "dimension": "Back Dia 85mm, Outer Dia 140mm, Length 110mm",
        "wattage": "9 Watt / 27 Watt"
      },
      {
        "code": "HF042",
        "dimension": "Back Dia 95mm, Outer Dia 140mm, Length 110mm",
        "wattage": "12 Watt / 36 Watt"
      }
    ],
    "applications": [
      "Architectural Fountains",
      "Public Plaza Water Features",
      "Musical Fountains",
      "Pond Water Jets",
      "Resort Fountains"
    ],
    "features": [
      "Heavy-duty marine stainless steel body engineered for high water pressure",
      "Precision-engineered stand bracket allows 180\u00b0 tilt adjustment",
      "Cree & Edison high-flux LED emitters for intense water column punch",
      "Full IP68 submersible certification with double sealed cable entry",
      "Wide variety of optical beam angles from narrow 10\u00b0 spot to wide 90\u00b0 flood"
    ],
    "isFeatured": true
  },
  {
    "id": "hf043-hf047-stand-spot",
    "code": "HF043 - HF047",
    "name": "Spot Fountain Stand Light",
    "slug": "spot-fountain-stand-light-hf043-hf047",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Fountain Lights",
    "shortDescription": "Compact circular stand-mounted fountain spot lights available in multiple diameters and wattages up to 36W.",
    "description": "Constructed from SS 304/316 or aluminium plate model with a sturdy circular disc stand base. Designed for quick placement on fountain basin floors or tiered cascade trays, casting focused or broad illumination on dancing fountains and geysers.",
    "image": "/assets/products/hf046-spot-fountain-stand-light.webp",
    "gallery": [
      "/assets/products/hf046-spot-fountain-stand-light.webp",
      "/assets/products/hf043-spot-fountain-stand-light.webp",
      "/assets/products/hf044-spot-fountain-stand-light.webp",
      "/assets/products/hf045-spot-fountain-stand-light.webp",
      "/assets/products/hf047-spot-fountain-stand-light.webp"
    ],
    "specifications": {
      "Body Material": "SS 304 / 316 / Aluminium (Plate Model)",
      "Lens": "PC Glass",
      "LED Chip": "Power LED Edison",
      "Protection Class": "IP68 Submersible",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Stand Mounted Disc System",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW, CW, RGB, Red, Blue, Green",
      "Available Wattages": "3W, 6W, 9W, 12W, 18W, 27W, 36W",
      "Dimensions": "Dia 3\" to Dia 6\" (Thickness 22mm - 1\")"
    },
    "variants": [
      {
        "code": "HF043",
        "dimension": "Dia 3\", Thickness 22mm",
        "wattage": "3W / 9W"
      },
      {
        "code": "HF044",
        "dimension": "Dia 4\", Thickness 22mm",
        "wattage": "6W / 18W"
      },
      {
        "code": "HF045",
        "dimension": "Back Dia 5\", Depth 1\"",
        "wattage": "9W / 27W"
      },
      {
        "code": "HF046",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "12W / 36W"
      },
      {
        "code": "HF047",
        "dimension": "Dia 6\", Thickness 1\"",
        "wattage": "18W"
      }
    ],
    "applications": [
      "Circular Fountains",
      "Tiered Stone Fountains",
      "Reflecting Pools",
      "Garden Water Features"
    ],
    "features": [
      "Stable base stand allows fast positioning without drilling basin floors",
      "Compact low-profile thickness (22mm to 1\") minimizes water disruption",
      "Edison Power LEDs engineered for maximum photometric output underwater",
      "IP68 submersible protection with chemical-resistant PC glass",
      "Available in monochromatic warm/cool white or dynamic RGB configurations"
    ],
    "isFeatured": false
  },
  {
    "id": "hf052-hf057-nozzle-hole",
    "code": "HF052 - HF057",
    "name": "Nozzle Fountain Light (Center Hole / Thread)",
    "slug": "nozzle-fountain-light-center-hole-hf052-hf057",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Fountain Light Fittings",
    "shortDescription": "Donut-type center-hole fountain light mounted directly onto nozzle supply pipes for 360\u00b0 illuminated water columns.",
    "description": "The center-hole threaded fountain luminaire mounts directly around the fountain nozzle, aligning the light beam symmetrically with the emerging water jet. This ensures 360-degree uniform color infusion directly through the core of the water column.",
    "image": "/assets/products/hf057-nozzle-fountain-light.webp",
    "gallery": [
      "/assets/products/hf057-nozzle-fountain-light.webp",
      "/assets/products/hf052-nozzle-fountain-light.webp",
      "/assets/products/hf053-nozzle-fountain-light.webp",
      "/assets/products/hf054-nozzle-fountain-light.webp",
      "/assets/products/hf055-nozzle-fountain-light.webp",
      "/assets/products/hf056-nozzle-fountain-light.webp"
    ],
    "specifications": {
      "Body Material": "SS 304 / 316 / Aluminium (Plate Model)",
      "Lens": "PC Glass Sealed Ring",
      "LED Chip": "Power LED Edison",
      "Protection Class": "IP68 Submersible",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Threaded Center Hole / Stand Mounted System",
      "Thread Options": "1/2\", 3/4\", 1\" Thread Center Hole",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW, CW, RGB, Red, Blue, Green",
      "Available Wattages": "3W, 4W, 5W, 6W, 9W, 12W, 15W, 18W, 27W, 36W",
      "Dimensions": "Dia 4\", 5\", 6\" (Thickness 32mm)"
    },
    "variants": [
      {
        "code": "HF052",
        "dimension": "Dia 4\", Thread 3/4\", Thickness 32mm",
        "wattage": "3W / 9W"
      },
      {
        "code": "HF053",
        "dimension": "Dia 4\", Thread 1/2\", Thickness 32mm",
        "wattage": "4W / 12W"
      },
      {
        "code": "HF054",
        "dimension": "Dia 4\", Thread 1/2\", Thickness 32mm",
        "wattage": "5W / 15W"
      },
      {
        "code": "HF055",
        "dimension": "Dia 5\", Thread 1\", Thickness 32mm",
        "wattage": "6W / 18W"
      },
      {
        "code": "HF056",
        "dimension": "Dia 5\", Thread 1\", Thickness 32mm",
        "wattage": "9W / 27W"
      },
      {
        "code": "HF057",
        "dimension": "Dia 6\", Thread 1\", Thickness 32mm",
        "wattage": "12W / 36W"
      }
    ],
    "applications": [
      "Dry Deck Fountains",
      "Center Jet Fountains",
      "Musical Fountains",
      "Plaza Fountains"
    ],
    "features": [
      "Center hole allows the water nozzle to pass directly through the luminaire",
      "Perfect optical alignment produces intense internal light piping in the water stream",
      "Compatible with standard 1/2\", 3/4\", and 1\" plumbing threads",
      "Robust SS 304/316 casing with complete IP68 underwater sealing",
      "Available with multi-color DMX/RGB compatibility for sequenced shows"
    ],
    "isFeatured": true
  },
  {
    "id": "hf058-hf061-adjustable-nozzle",
    "code": "HF058 - HF061",
    "name": "Adjustable Center-Hole Nozzle Fountain Light",
    "slug": "adjustable-center-hole-nozzle-fountain-light-hf058-hf061",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "LED Fountain Lights",
    "shortDescription": "Adjustable 1.5\" center hole fountain fixture for angled jets and customized water trajectories.",
    "description": "Featuring an adjustable 1.5-inch center aperture, the HF058\u2013HF061 series permits angling of the nozzle jet while keeping the luminaire firmly seated. Ideal for arching water streams, multi-tier sprays, and dynamic fountain choreography.",
    "image": "/assets/products/hf061-adjustable-nozzle-fountain-light.webp",
    "gallery": [
      "/assets/products/hf061-adjustable-nozzle-fountain-light.webp",
      "/assets/products/hf058-adjustable-nozzle-fountain-light.webp",
      "/assets/products/hf059-adjustable-nozzle-fountain-light.webp",
      "/assets/products/hf060-adjustable-nozzle-fountain-light.webp"
    ],
    "specifications": {
      "Body Material": "SS 304 / 316 / Aluminium (Plate Model)",
      "Lens": "PC Glass",
      "LED Chip": "Power LED Edison",
      "Protection Class": "IP68 Submersible",
      "Warranty": "2 Years Manufacturer Warranty",
      "Mounting": "Stand Mounted System / Center Hole Fit",
      "Center Hole": "1.5\" (Adjustable Mechanism)",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0",
      "Wire": "Poly Cab 1 Metre Wire",
      "Color Options": "WW, CW, RGB, Red, Blue, Green",
      "Available Wattages": "3W, 6W, 9W, 12W, 18W, 27W, 36W",
      "Dimensions": "Outer 5\", Length 2\""
    },
    "variants": [
      {
        "code": "HF058",
        "dimension": "Outer 5\", Center Hole 1.5\", Length 2\"",
        "wattage": "3W / 9W"
      },
      {
        "code": "HF059",
        "dimension": "Outer 5\", Center Hole 1.5\", Length 2\"",
        "wattage": "6W / 18W"
      },
      {
        "code": "HF060",
        "dimension": "Outer 5\", Center Hole 1.5\", Length 2\"",
        "wattage": "9W / 27W"
      },
      {
        "code": "HF061",
        "dimension": "Outer 5\", Center Hole 1.5\", Length 2\"",
        "wattage": "12W / 36W"
      }
    ],
    "applications": [
      "Arching Jet Fountains",
      "Parabolic Water Features",
      "Decorative Fountains",
      "Resort Water Displays"
    ],
    "features": [
      "1.5-inch adjustable center collar allows precise aiming with angled water jets",
      "Power LED Edison emitters generate intense light penetration through aeration",
      "Solid stainless steel construction prevents vibration under high pump pressure",
      "IP68 submersible protection suitable for permanent immersion",
      "2-year warranty backed by HUMA manufacturing expertise"
    ],
    "isFeatured": false
  },
  {
    "id": "hf062-wall-washer",
    "code": "HF062",
    "name": "LED Architectural Wall Washer Light",
    "slug": "led-architectural-wall-washer-light-hf062",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Architectural Water Lighting",
    "shortDescription": "Linear architectural wall washer luminaire in lengths from 1 Ft to 12 Ft, engineered for water walls and facade illumination.",
    "description": "Constructed from heavy-duty die-casting aluminium with an IP65 protection rating, the HF062 LED Wall Washer is tailored for cascading water walls, pool boundary perimeter features, and architectural facades. Operates on safe 12V DC power with Edison Power LEDs across wattages from 9W up to 54W.",
    "image": "/assets/products/hf062-led-wall-washer-light.webp",
    "gallery": [
      "/assets/products/hf062-led-wall-washer-light.webp"
    ],
    "specifications": {
      "Body Material": "Die-Casting Aluminium Housing",
      "Protection Class": "IP65 Weatherproof",
      "LED Chip": "Edison Power LED",
      "Power Input": "12V DC Safe Operating Voltage",
      "Warranty": "2 Years Manufacturer Warranty",
      "Beam Angle": "15\u00b0 - 60\u00b0 Asymmetric / Narrow / Wide",
      "Color Options": "Warm White, Cool White, Green, Red, Blue, RGB, RGBWW, RGBCW",
      "Available Wattages": "09 Watt - 54 Watt",
      "Available Lengths": "1 Foot to 12 Feet (Modular)"
    },
    "variants": [
      {
        "code": "HF062-1FT",
        "dimension": "1 Ft Linear Bar",
        "wattage": "9 Watt"
      },
      {
        "code": "HF062-2FT",
        "dimension": "2 Ft Linear Bar",
        "wattage": "18 Watt"
      },
      {
        "code": "HF062-3FT",
        "dimension": "3 Ft Linear Bar",
        "wattage": "27 Watt"
      },
      {
        "code": "HF062-4FT",
        "dimension": "4 Ft Linear Bar",
        "wattage": "36 Watt"
      },
      {
        "code": "HF062-Custom",
        "dimension": "Up to 12 Ft Modular",
        "wattage": "Up to 54 Watt"
      }
    ],
    "applications": [
      "Cascading Water Walls",
      "Pool Boundary Feature Walls",
      "Hotel Facades",
      "Architectural Water Features",
      "Landscape Retaining Walls"
    ],
    "features": [
      "Modular linear lengths from 1 foot up to 12 feet for uninterrupted wall grazing",
      "Low-voltage 12V DC design for paramount electrical safety around water",
      "Die-casting aluminium housing with high thermal conductivity and corrosion resistance",
      "Available in RGBCW / RGBWW for rich saturated color washes and clean white temperatures",
      "2-year warranty backed by HUMA quality manufacturing"
    ],
    "isFeatured": true
  },
  {
    "id": "hf076-water-cascade",
    "code": "HF076",
    "name": "SS Water Cascade Nozzle (Shear Descent)",
    "slug": "ss-water-cascade-nozzle-hf076",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Water Feature Lights",
    "shortDescription": "Stainless steel shear descent waterfall spillway creating a smooth, crystal-clear curtain of falling water into pools.",
    "description": "Manufactured from high-grade stainless steel, the HF076 Water Cascade Nozzle produces an elegant, unbroken sheet of falling water. Engineered for embedded wall installation in swimming pools, courtyard water features, and luxury landscape walls.",
    "image": "/assets/products/hf076-water-cascade-nozzle.webp",
    "gallery": [
      "/assets/products/hf076-water-cascade-nozzle.webp"
    ],
    "specifications": {
      "Housing": "SS 304 / 316 Stainless Steel",
      "Nozzle Type": "Water Fall / Cascade Spillway",
      "Power / Flow": "As Per Pump (Pressure) Flow",
      "Thread Inlet": "1\" / 1.5\" Connection",
      "Water Effect": "Continuous Crystal Clear Water Curtain",
      "Application": "Pool Feature Walls & Landscape Spouts"
    },
    "variants": [
      {
        "code": "HF076-1IN",
        "dimension": "Width 300mm - 1200mm, Thread 1\"",
        "wattage": "Flow Dependent"
      },
      {
        "code": "HF076-1.5IN",
        "dimension": "Width 300mm - 1200mm, Thread 1.5\"",
        "wattage": "Flow Dependent"
      }
    ],
    "applications": [
      "Swimming Pool Feature Walls",
      "Hotels & Resorts",
      "Courtyard Water Walls",
      "Residential Pools"
    ],
    "features": [
      "Precision-engineered weir lip delivers a smooth, glass-like water sheet",
      "Heavy-duty marine stainless steel construction resistant to pool sanitizers",
      "Integrated internal baffles ensure uniform water flow across full width",
      "Can be backlit with HUMA LED wall washers for dramatic evening illumination"
    ],
    "isFeatured": true
  },
  {
    "id": "hf078-cobra-waterfall",
    "code": "HF078",
    "name": "Stainless Steel Cobra Waterfall Nozzle",
    "slug": "stainless-steel-cobra-waterfall-nozzle-hf078",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Water Feature Lights",
    "shortDescription": "Iconic architectural curved cobra pool waterfall spout crafted in polished stainless steel with a 2-inch inlet.",
    "description": "The Cobra Nozzle is an architectural poolside centerpiece that delivers a therapeutic, wide curtain of cascading water directly into the swimming pool. Engineered from premium stainless steel with polished curvature and standard 2-inch threaded base.",
    "image": "/assets/products/hf078-cobra-waterfall-nozzle.webp",
    "gallery": [
      "/assets/products/hf078-cobra-waterfall-nozzle.webp"
    ],
    "specifications": {
      "Housing": "SS 304 / 316 Polished Stainless Steel",
      "Nozzle Type": "Water Fall / Pool Deck Spout",
      "Power / Flow": "As Per Pump (Pressure) Flow",
      "Thread Connection": "2\" Standard Inlet",
      "Water Pattern": "Wide Curved Cascading Waterfall Curtain",
      "Installation": "Pool Deck Anchor Mounting"
    },
    "variants": [
      {
        "code": "HF078-STD",
        "dimension": "Standard Height 800mm, Width 500mm, Thread 2\"",
        "wattage": "Flow Dependent"
      }
    ],
    "applications": [
      "Resort Swimming Pools",
      "Private Luxury Pool Decks",
      "Hydrotherapy Spas",
      "Clubhouses"
    ],
    "features": [
      "Stunning architectural cobra curve adds luxury presence to any pool edge",
      "High-volume cascade provides invigorating neck and shoulder hydro-massage",
      "Marine-grade stainless steel resisting chlorinated and saltwater corrosion",
      "Sturdy flanged base for secure, rigid poolside installation"
    ],
    "isFeatured": true
  },
  {
    "id": "hf080-acrylic-cobra",
    "code": "HF080",
    "name": "Acrylic Cobra Nozzle with LED Illumination",
    "slug": "acrylic-cobra-nozzle-illuminated-hf080",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Water Feature Lights",
    "shortDescription": "Crystal-clear acrylic cobra waterfall that channels internal LED illumination directly into the flowing water stream.",
    "description": "Crafted from optical-grade transparent acrylic with a heavy-duty mounting base and 2-inch thread connection. Designed to accommodate integrated HUMA underwater LED lighting, which illuminates the entire acrylic arch and transmits vibrant glowing colors through the cascading water sheet.",
    "image": "/assets/products/hf080-acrylic-cobra-nozzle.webp",
    "gallery": [
      "/assets/products/hf080-acrylic-cobra-nozzle.webp"
    ],
    "specifications": {
      "Housing": "Optical-Grade Cast Acrylic + Sealed Flange",
      "Nozzle Type": "Illuminated Waterfall Arc",
      "Power / Flow": "As Per Pump (Pressure) Flow",
      "Thread Inlet": "2\" Plumbing Connection",
      "Lighting Integration": "Supports Internal HUMA LED Emitter",
      "Water Effect": "Internally Illuminated Glowing Cascade"
    },
    "variants": [
      {
        "code": "HF080",
        "dimension": "Cobra Curve, Thread 2\"",
        "wattage": "LED Integrated"
      }
    ],
    "applications": [
      "Modern Designer Pools",
      "Nightclub & Lounge Water Decks",
      "Luxury Resort Pools",
      "Architectural Water Installations"
    ],
    "features": [
      "Crystal-clear transparent acrylic body creates a floating water illusion",
      "Integrated lighting chamber delivers stunning nighttime glow effects",
      "Engineered to withstand continuous outdoor UV exposure and treated pool water",
      "Standard 2-inch plumbing connection for straightforward integration"
    ],
    "isFeatured": true
  },
  {
    "id": "hf063-umbrella-nozzle",
    "code": "HF063",
    "name": "Umbrella Nozzle / Bell Nozzle (Mushroom / Bell)",
    "slug": "umbrella-bell-nozzle-hf063",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Fountain Light Fittings",
    "shortDescription": "Brass with chrome plating fountain nozzle forming a transparent, silent bell or mushroom film of water.",
    "description": "The HF063 creates a smooth, whisper-quiet transparent dome or bell of falling water. Manufactured from chrome-plated brass with a 1-inch thread, height of 8 inches, and adjustable top disc to control bell thickness and diameter.",
    "image": "/assets/products/hf063-umbrella-nozzle.webp",
    "gallery": [
      "/assets/products/hf063-umbrella-nozzle.webp"
    ],
    "specifications": {
      "Housing": "Brass with Chrome Plating",
      "Nozzle Type": "Umbrella Nozzle (Mushroom / Bell)",
      "Power / Flow": "As Per Pump (Pressure) Flow",
      "Thread Connection": "1\" Male Thread",
      "Height": "8 Inch (200 mm)",
      "Effect": "Smooth Glassy Water Dome"
    },
    "variants": [
      {
        "code": "HF063",
        "dimension": "Height 8\", Thread 1\"",
        "wattage": "Flow Dependent"
      }
    ],
    "applications": [
      "Indoor Fountains",
      "Wind-Protected Ponds",
      "Peaceful Garden Water Features",
      "Hotel Lobbies"
    ],
    "features": [
      "Extremely low splash and quiet operation ideal for courtyards and indoor spaces",
      "Heavy-gauge solid brass with mirror chrome plating for decades of service",
      "Adjustable deflection disc to tune dome diameter and film thickness",
      "Pairs seamlessly with HUMA center-hole nozzle fountain lights"
    ],
    "isFeatured": false
  },
  {
    "id": "hf064-foam-nozzle",
    "code": "HF064",
    "name": "Foam Jet Fountain Nozzle",
    "slug": "foam-jet-fountain-nozzle-hf064",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Fountain Light Fittings",
    "shortDescription": "Aerated bubbling foam nozzle that creates a thick, frothy, high-visibility white water column.",
    "description": "Constructed from chrome-plated brass with side air aspiration ports, the HF064 foam nozzle mixes air with water to produce a dense, frothy white water jet that contrasts magnificently against dark surroundings and illuminates with spectacular brilliance under HUMA LED lights.",
    "image": "/assets/products/hf064-foam-nozzle.webp",
    "gallery": [
      "/assets/products/hf064-foam-nozzle.webp"
    ],
    "specifications": {
      "Housing": "Brass with Chrome Plating",
      "Nozzle Type": "Foam Nozzle / Aerated Column",
      "Power / Flow": "As Per Pump (Pressure) Flow",
      "Thread Connection": "1\" Standard Thread",
      "Height": "155 mm",
      "Effect": "Rich White Aerated Geyser Foam"
    },
    "variants": [
      {
        "code": "HF064",
        "dimension": "Height 155mm, Thread 1\"",
        "wattage": "Flow Dependent"
      }
    ],
    "applications": [
      "Plaza Fountains",
      "Commercial Entrances",
      "Windy Outdoor Water Features",
      "Shopping Centers"
    ],
    "features": [
      "Highly aerated water column reflects colored LED light with exceptional brightness",
      "High wind stability due to water-air mixture density",
      "Solid brass construction with protective chrome layer",
      "Height of 155mm with standard 1\" thread for quick manifold mounting"
    ],
    "isFeatured": false
  },
  {
    "id": "hf065-finger-jet",
    "code": "HF065",
    "name": "Finger Jet / Multi-Jet Fountain Nozzle",
    "slug": "finger-jet-multi-jet-fountain-nozzle-hf065",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Fountain Light Fittings",
    "shortDescription": "Precision manifold nozzle with multiple individual finger jets creating a graceful parabolic fan of water rays.",
    "description": "The HF065 Multi-Jet nozzle distributes pumped water into distinct, needle-sharp water streams arrayed in an arc. Features chrome-plated brass body, 1-inch thread connection, 90mm height, and 100mm degree spread.",
    "image": "/assets/products/hf065-finger-jet-nozzle.webp",
    "gallery": [
      "/assets/products/hf065-finger-jet-nozzle.webp"
    ],
    "specifications": {
      "Housing": "Brass with Chrome Plating",
      "Nozzle Type": "Finger Nozzle / Multi-Jet Fan",
      "Power / Flow": "As Per Pump (Pressure) Flow",
      "Thread Connection": "1\" Thread",
      "Height": "90 mm",
      "Degree Spread": "100 mm Arc",
      "Effect": "Multiple Arching Fine Water Rays"
    },
    "variants": [
      {
        "code": "HF065",
        "dimension": "Height 90mm, Degree 100mm, Thread 1\"",
        "wattage": "Flow Dependent"
      }
    ],
    "applications": [
      "Pool Perimeters",
      "Architectural Water Features",
      "Decorative Garden Ponds"
    ],
    "features": [
      "Multiple distinct water streams create lively animated water architecture",
      "Chrome-plated solid brass ensures corrosion resistance",
      "Compact 90mm height fits in shallow water basins and troughs",
      "Easily illuminated from below using HUMA spot fountain lights"
    ],
    "isFeatured": false
  },
  {
    "id": "hf072-revolving-nozzle",
    "code": "HF072",
    "name": "Revolving / Rotational Fountain Nozzle",
    "slug": "revolving-rotational-fountain-nozzle-hf072",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Fountain Light Fittings",
    "shortDescription": "Hydraulic self-rotating multi-arm brass nozzle generating mesmerizing spiraling water choreography.",
    "description": "Driven by hydraulic water pressure without requiring an electric motor, the HF072 revolves smoothly on an internal bearing, spinning multiple curved arms to weave a dynamic, intertwining spiral basket of water in the air.",
    "image": "/assets/products/hf072-revolving-nozzle.webp",
    "gallery": [
      "/assets/products/hf072-revolving-nozzle.webp"
    ],
    "specifications": {
      "Housing": "Solid Brass Construction",
      "Nozzle Type": "Revolving Nozzle / Rotational Dance Jet",
      "Power / Flow": "As Per Pump (Pressure) Flow",
      "Thread Connection": "1\" Standard Thread",
      "Rotation": "Hydraulically Powered Self-Spinning",
      "Effect": "Interlocking Spiral Water Dance"
    },
    "variants": [
      {
        "code": "HF072",
        "dimension": "Multi-Arm Spiral, Thread 1\"",
        "wattage": "Flow Dependent"
      }
    ],
    "applications": [
      "Central Basin Fountains",
      "Musical Water Features",
      "Public Parks & Civic Plazas"
    ],
    "features": [
      "Dynamic motion creates continuous visual interest without complex electrical drives",
      "Precision-machined brass bearing ensures smooth continuous rotation",
      "1-inch inlet fits directly into standard fountain supply pipes",
      "Combines with color-changing RGB underwater lights for dynamic shows"
    ],
    "isFeatured": true
  },
  {
    "id": "hf077-step-blade",
    "code": "HF077",
    "name": "Step Water Blade Nozzle",
    "slug": "step-water-blade-nozzle-hf077",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Water Feature Lights",
    "shortDescription": "Stainless steel stepped manifold delivering multiple parallel streams of cascading water over architectural tiers.",
    "description": "Crafted from heavy-duty stainless steel, the HF077 features segmented water slots that divide descending water into rhythmic, crisp parallel cascades. Ideal for stepped landscape walls and modern pool edge drops.",
    "image": "/assets/products/hf077-step-water-blade-nozzle.webp",
    "gallery": [
      "/assets/products/hf077-step-water-blade-nozzle.webp"
    ],
    "specifications": {
      "Housing": "SS 304 / 316 Stainless Steel",
      "Nozzle Type": "Water Fall / Multi-Spout Step Blade",
      "Power / Flow": "As Per Pump (Pressure) Flow",
      "Thread Connection": "1\" / 1.5\" Plumbing",
      "Water Effect": "Segmented Parallel Ribbon Cascades"
    },
    "variants": [
      {
        "code": "HF077",
        "dimension": "Multi-Tooth Blade, Thread 1\" / 1.5\"",
        "wattage": "Flow Dependent"
      }
    ],
    "applications": [
      "Stepped Landscape Walls",
      "Pool Retaining Walls",
      "Modern Courtyard Cascades"
    ],
    "features": [
      "Distinct architectural finger spouts create captivating visual texture",
      "All-stainless construction ensures lifetime longevity in treated water",
      "Dual thread sizes (1\" and 1.5\") for versatile flow balancing"
    ],
    "isFeatured": false
  }
];

export const CATEGORIES: Category[] = [
  {
    "id": "pool-lighting",
    "name": "Pool Lighting",
    "slug": "pool-lighting",
    "tagline": "Engineered for Swimming Pools & Underwater Aquatic Environments",
    "description": "HUMA manufactures an extensive portfolio of certified IP68 underwater swimming pool lights in marine-grade SS 304/316 and high-impact ABS. Featuring premium Edison and Cree LED technology, multiple colorways, and ultra-slim wall profiles.",
    "image": "/assets/hero/hero-pool-night-luxury.webp",
    "productCount": 8,
    "subCategories": [
      "Underwater Pool Lights",
      "LED Pool Lights",
      "Swimming Pool Lights",
      "Pool Light Fittings"
    ]
  },
  {
    "id": "fountain-lighting",
    "name": "Fountain Lighting",
    "slug": "fountain-lighting",
    "tagline": "Vibrant Underwater Illuminations for Fountains & Water Columns",
    "description": "Transform fountains and dynamic water installations with HUMA high-output spot lights, donut center-hole nozzle lights, and adjustable swivel fixtures. Engineered with IP68 submersible ratings and high-intensity optical punch.",
    "image": "/assets/hero/hero-fountain-grand.webp",
    "productCount": 6,
    "subCategories": [
      "Fountain Lights",
      "Underwater Fountain Lights",
      "LED Fountain Lights",
      "Fountain Light Fittings"
    ]
  },
  {
    "id": "water-feature-lighting",
    "name": "Water Feature Lighting",
    "slug": "water-feature-lighting",
    "tagline": "Architectural Grazing & Illuminated Waterfalls",
    "description": "Architectural water walls, shear cascades, cobra nozzles, and linear LED wall washers engineered for seamless integration across luxury residential and commercial outdoor spaces.",
    "image": "/assets/applications/app-architectural-facade.webp",
    "productCount": 5,
    "subCategories": [
      "Water Feature Lights",
      "Architectural Water Lighting",
      "Decorative Water Lighting"
    ]
  }
];

export const COMPANY: CompanyInfo = {
  "name": "HUMA FOUNTAINS & POOLS",
  "tagline": "Innovative Lighting Solution",
  "mfgSince": "2010",
  "founder": "Nassar Khan",
  "certification": "ISO 9001:2015 CERTIFIED COMPANY",
  "address": "SR NO. 37, H NO. 2/3, Behind A K Industrial Estate, Dhumal Nagar, Vasai East, Vasai-Virar City (M-Corp), PIN Code: 401208, Maharashtra, India",
  "phoneNumbers": [
    "+91 8668466689",
    "+91 9766775542",
    "+91 8180944842",
    "+91 8600955082",
    "+91 8237744663",
    "+91 7410555788",
    "+91 8600955088",
    "+91 9552244668"
  ],
  "primaryPhone": "+91 8668466689",
  "email": "fountainpooled@gmail.com",
  "website": "humafountainspools.com",
  "businessHours": "Monday \u2013 Saturday: 9:00 AM \u2013 7:00 PM IST",
  "catalogues": [
    {
      "id": "pool-catalogue",
      "title": "HUMA Swimming Pool Lighting Catalogue",
      "filename": "huma-swimming-pool-lighting-catalogue-2024.pdf",
      "cover": "/assets/catalogue/catalogue-cover-pool.webp",
      "file": "/assets/catalogue/huma-swimming-pool-lighting-catalogue-2024.pdf",
      "pages": 18,
      "description": "Complete specifications, dimensional drawings, and photometric options for surface, ABS, ultra-slim, full SS, and concealed underwater pool lights."
    },
    {
      "id": "fountain-catalogue",
      "title": "HUMA Fountain Lighting & Equipments Catalogue",
      "filename": "huma-fountain-lighting-catalogue-2024.pdf",
      "cover": "/assets/catalogue/catalogue-cover-fountain.webp",
      "file": "/assets/catalogue/huma-fountain-lighting-catalogue-2024.pdf",
      "pages": 28,
      "description": "Comprehensive guide to spot fountain lights, nozzle-mounted fixtures, linear LED wall washers, architectural fountain nozzles, and waterfall spillways."
    }
  ]
};

// =====================================================
//  PRODUCTS — single source of truth
//  Used by the website AND by the payment function, so the
//  price a customer is charged always comes from this file.
//  Prices are in NAIRA (₦). Edit prices here, nowhere else.
// =====================================================
const PRODUCTS = [
  {
      id: 1,
      name: "The Imperial Silk Tuxedo Gown",
      category: "couture",
      price: 12500,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
      badge: "Haute Couture",
      desc: "Sculpted floor-length coat gown tailored in black double-faced silk crepe with satin lapels.",
      details: ["100% Italian Silk Crepe", "Hand-stitched silk lining", "Bespoke tailor measurement included", "Made in Paris Atelier"]
  },
  {
      id: 2,
      name: "Monogrammed Atelier Tote Bag",
      category: "bags",
      price: 3400,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
      badge: "Limited Edition",
      desc: "Hand-finished calfskin leather tote featuring 24-karat gold-plated champagne hardware.",
      details: ["Full-grain French calfskin", "24K Gold-plated hardware", "Includes custom luggage tag", "Serial numbered piece"]
  },
  {
      id: 3,
      name: "Architectural Wool Trench Coat",
      category: "rtw",
      price: 4800,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
      badge: "Winter Runway",
      desc: "Over-structured shoulders with a dramatic flared waist hem, crafted in heavy melton wool.",
      details: ["100% Virgin Wool", "Horn buttons", "Satin storm flap", "Dry clean only"]
  },
  {
      id: 4,
      name: "Solstice Diamond & Onyx Earring Set",
      category: "jewelry",
      price: 8900,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      badge: "Fine Jewelry",
      desc: "18k yellow gold drops inset with conflict-free black onyx discs and brilliant-cut white diamonds.",
      details: ["18k Solid Yellow Gold", "Natural Black Onyx", "0.85ct White Diamonds", "Certificate of Authenticity"]
  },
  {
      id: 5,
      name: "Nocturne Velvet Evening Jacket",
      category: "rtw",
      price: 3900,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      badge: "Ready-To-Wear",
      desc: "Deep obsidian silk velvet jacket with understated champagne embroidery on cuff trims.",
      details: ["Silk-velvet blend", "Hand-embroidered cuffs", "Bespoke buttons", "Tailored fit"]
  },
  {
      id: 6,
      name: "Elysian Emerald Cut Timepiece",
      category: "watches",
      price: 24000,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
      badge: "Haute Horlogerie",
      desc: "Automatic Swiss mechanical movement set in a slender rose-gold case with alligator strap.",
      details: ["Swiss Made Movement", "18k Rose Gold Case", "Genuine Alligator Strap", "50m Water Resistance"]
  },
  {
      id: 7,
      name: "Aurelia Draped Evening Dress",
      category: "couture",
      price: 9800,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
      badge: "Haute Couture",
      desc: "Fluid one-shoulder column dress in hand-pleated silk satin with a sculpted open back.",
      details: ["Hand-pleated silk satin","Hidden corset boning","Made to your measurements","Delivered in a garment trunk"]
  },
  {
      id: 8,
      name: "Sovereign Peak-Lapel Suit",
      category: "rtw",
      price: 5200,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      badge: "Tailored",
      desc: "Two-piece suit in fine Super 150s wool with a sharp peak lapel and half-canvas construction.",
      details: ["Super 150s Merino wool","Half-canvas construction","Working cuff buttons","Complimentary first alteration"]
  },
  {
      id: 9,
      name: "Cashmere Cloud Knit Sweater",
      category: "rtw",
      price: 1650,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
      badge: "Ready-To-Wear",
      desc: "Featherweight oversized sweater knitted from two-ply Mongolian cashmere.",
      details: ["100% Mongolian cashmere","Ribbed trims","Relaxed oversized fit","Hand wash or dry clean"]
  },
  {
      id: 10,
      name: "Noir Leather Moto Jacket",
      category: "rtw",
      price: 3200,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
      badge: "Signature",
      desc: "Buttery lambskin moto jacket with gold-tone zips and a quilted satin lining.",
      details: ["Lambskin leather","Gold-tone YKK zips","Quilted satin lining","Slim tailored fit"]
  },
  {
      id: 11,
      name: "Silk Charmeuse Wrap Blouse",
      category: "rtw",
      price: 1400,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop",
      badge: "New Season",
      desc: "Wrap-front blouse in washed silk charmeuse with a self-tie waist and mother-of-pearl buttons.",
      details: ["100% silk charmeuse","Mother-of-pearl buttons","Self-tie waist","Dry clean recommended"]
  },
  {
      id: 12,
      name: "Duchesse Structured Handbag",
      category: "bags",
      price: 4600,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
      badge: "Iconic",
      desc: "Top-handle structured handbag in smooth calfskin with a suede-lined interior and detachable strap.",
      details: ["Smooth French calfskin","Suede-lined interior","Detachable shoulder strap","Dust bag included"]
  },
  {
      id: 13,
      name: "Soirée Gold Chain Clutch",
      category: "bags",
      price: 2100,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
      badge: "Evening",
      desc: "Compact envelope clutch in black grained leather with a gold chain strap.",
      details: ["Grained leather","Gold-plated chain","Magnetic closure","Fits phone and cards"]
  },
  {
      id: 14,
      name: "Voyageur Weekender Bag",
      category: "bags",
      price: 5800,
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop",
      badge: "Travel",
      desc: "Generous leather weekender with a reinforced base, brass feet and a luggage-tag keyring.",
      details: ["Full-grain leather","Brass feet and hardware","Padded top handles","Detachable shoulder strap"]
  },
  {
      id: 15,
      name: "Perle Royale Pearl Necklace",
      category: "jewelry",
      price: 6200,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      badge: "Fine Jewelry",
      desc: "Hand-knotted strand of lustrous freshwater pearls with an 18k gold clasp.",
      details: ["Hand-knotted on silk","AAA freshwater pearls","18k gold clasp","Certificate of Authenticity"]
  },
  {
      id: 16,
      name: "Étoile Pavé Diamond Ring",
      category: "jewelry",
      price: 11800,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
      badge: "Fine Jewelry",
      desc: "Platinum band set with a pavé of brilliant-cut diamonds around a central solitaire.",
      details: ["Platinum 950","1.20ct total diamond weight","Ethically sourced stones","Complimentary resizing"]
  },
  {
      id: 17,
      name: "Cléo Gold Cuff Bracelet",
      category: "jewelry",
      price: 3900,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
      badge: "Statement",
      desc: "Sculpted 18k gold-vermeil cuff with a hand-polished finish and an open back for easy wear.",
      details: ["18k gold vermeil","Hand-polished finish","Adjustable open back","Presented in a velvet box"]
  },
  {
      id: 18,
      name: "Lumière Layered Gold Necklace",
      category: "jewelry",
      price: 2400,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
      badge: "Everyday Luxe",
      desc: "Three delicate gold chains of graduated length joined by a single pendant clasp.",
      details: ["14k gold-filled chains","Graduated lengths","Lobster clasp","Hypoallergenic"]
  },
  {
      id: 19,
      name: "Argent Chronograph Timepiece",
      category: "watches",
      price: 18500,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
      badge: "Haute Horlogerie",
      desc: "Stainless steel chronograph with a sunray dial, sapphire crystal and a leather strap.",
      details: ["Automatic movement","Sapphire crystal","Steel case","100m water resistance"]
  },
  {
      id: 20,
      name: "Classique Gold Dress Watch",
      category: "watches",
      price: 14200,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop",
      badge: "Heritage",
      desc: "Slim dress watch with a champagne dial and gold-tone case on a refined leather strap.",
      details: ["Slim 8mm case","Champagne sunray dial","Gold-tone case","Interchangeable strap"]
  },
  {
      id: 21,
      name: "Stiletto Satin Evening Pump",
      category: "footwear",
      price: 1450,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
      badge: "Evening",
      desc: "Pointed-toe pump in satin with a 90mm sculpted heel and padded leather insole.",
      details: ["Satin upper","90mm heel","Leather sole and insole","Made in Italy"]
  },
  {
      id: 22,
      name: "Heritage Leather Loafer",
      category: "footwear",
      price: 1250,
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop",
      badge: "Classic",
      desc: "Hand-stitched calf leather loafer with a flexible leather sole and a cushioned footbed.",
      details: ["Calf leather","Hand-stitched apron","Cushioned footbed","Resoleable"]
  }
];

if (typeof module !== 'undefined') module.exports = PRODUCTS;

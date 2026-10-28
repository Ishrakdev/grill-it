export const SIGNATURE_DISHES = [
  // --- STARTERS ---
  {
    id: 'truffle-scallops',
    name: 'Truffle Scallops',
    subname: 'Saint-Jacques au Truffe Noire',
    price: 48,
    category: 'starters',
    isPrimary: true,
    tag: 'Chef Signature',
    description: 'Pan-seared Hokkaido sea scallops, Périgord black truffle emulsion, cauliflower velvet, crispy guanciale, and micro chervil.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Hokkaido, Japan',
      pairing: '2021 Louis Latour Meursault Premier Cru',
      allergens: 'Shellfish, Dairy',
      prepTime: 'Flash-seared at 450°F'
    }
  },
  {
    id: 'lobster-bisque',
    name: 'Lobster Bisque',
    subname: 'Bisque de Homard Flambée',
    price: 36,
    category: 'starters',
    isPrimary: true,
    tag: 'House Classic',
    description: 'Butter-poached Maine lobster claw, VSOP Cognac flambé, Kashmiri saffron velvet, fresh tarragon oil, and artisanal charcoal brioche crisp.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Gulf of Maine, USA',
      pairing: '2020 Dom Pérignon Brut Vintage',
      allergens: 'Shellfish, Dairy, Gluten',
      prepTime: 'Simmered 14 hours'
    }
  },
  {
    id: 'wagyu-tartare',
    name: 'Wagyu Beef Tartare',
    subname: 'Tartare de Boeuf Wagyu A5',
    price: 34,
    category: 'starters',
    isPrimary: false,
    tag: 'Hand-Cut Raw',
    description: 'Hand-minced Miyazaki A5, cured golden egg yolk, shallot brunoise, caperberries, and toasted bone marrow milk bread.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Miyazaki Prefecture, Japan',
      pairing: '2022 Sancerre Domaine Vacheron',
      allergens: 'Egg, Gluten',
      prepTime: 'Hand-cut to order'
    }
  },
  {
    id: 'charred-octopus',
    name: 'Charred Robata Octopus',
    subname: 'Poulpe Grillé aux Braises',
    price: 32,
    category: 'starters',
    isPrimary: false,
    tag: 'Wood-Fired',
    description: 'Spanish octopus tentacle blistered over binchotan, smoked pimentón emulsion, marble potatoes, and pickled saffron shallots.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Galicia, Spain',
      pairing: '2021 Albariño de Fefiñanes',
      allergens: 'Mollusks',
      prepTime: 'Braised 4h, seared over fire'
    }
  },

  // --- PRIME WOOD-FIRED CUTS ---
  {
    id: 'wagyu-tenderloin',
    name: 'Wagyu Tenderloin',
    subname: 'Miyazaki A5 BMS 11+',
    price: 145,
    category: 'steaks',
    isPrimary: true,
    tag: 'Michelin Star Highlight',
    description: 'Japanese A5 Miyazaki Wagyu, smoked bone marrow butter, 25-year aged black garlic glaze, grilled king oyster mushroom, and flaked Maldon sea salt.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Miyazaki Prefecture, Japan',
      pairing: '2018 Château Pontet-Canet Pauillac',
      allergens: 'Dairy',
      prepTime: 'Binchotan Wood Fire seared'
    }
  },
  {
    id: 'tomahawk-reserve',
    name: '45-Day Dry-Aged Tomahawk',
    subname: 'Prime Black Angus 38oz',
    price: 195,
    category: 'steaks',
    isPrimary: false,
    tag: 'Table Feast',
    description: 'Carved tableside. Dry-aged in our Himalayan pink salt chamber, basted with rosemary wagyu tallow and smoked sea salt.',
    image: 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Greater Omaha, Nebraska',
      pairing: '2019 Opus One, Napa Valley',
      allergens: 'None',
      prepTime: 'Cooked over White Oak charcoal'
    }
  },
  {
    id: 'miyazaki-striploin',
    name: 'Miyazaki A5 Striploin',
    subname: 'Japanese Wagyu 10oz',
    price: 165,
    category: 'steaks',
    isPrimary: false,
    tag: 'Marble Score 12',
    description: 'Unctuous marbling seared at 1,000°F. Served with charred wasabi root, smoked sea salt crystals, and Cabernet beef reduction.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Kagoshima & Miyazaki, Japan',
      pairing: '2017 Caymus Special Selection Cabernet',
      allergens: 'None',
      prepTime: 'Quick-seared on White Oak'
    }
  },
  {
    id: 'smoked-ribeye',
    name: 'Dry-Aged Bone-In Ribeye',
    subname: 'Prime Reserve 22oz',
    price: 130,
    category: 'steaks',
    isPrimary: false,
    tag: 'Himalayan Salt Cured',
    description: 'Aged 50 days in pink salt. Intense beefy depth, herb butter baste, roasted garlic head, and bone marrow emulsion.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Snake River Farms, Idaho',
      pairing: '2019 Silver Oak Alexander Valley',
      allergens: 'Dairy',
      prepTime: 'Wood-fired over Hickory'
    }
  },

  // --- DESSERTS ---
  {
    id: 'chocolate-delice',
    name: 'Chocolate Délice',
    subname: 'Grand Cru Valrhona 72%',
    price: 24,
    category: 'desserts',
    isPrimary: true,
    tag: 'Artisanal Dessert',
    description: 'Valrhona 72% Araguani chocolate ganache, 24k edible gold leaf, roasted Piedmont hazelnut praline, and smoked Tahitian vanilla bean gelato.',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Valrhona Grand Cru, France',
      pairing: 'Taylor Fladgate 30 Year Tawny Port',
      allergens: 'Dairy, Tree Nuts, Gluten',
      prepTime: 'Tempered in-house daily'
    }
  },
  {
    id: 'roasted-fig-tart',
    name: 'Roasted Fig Mille-Feuille',
    subname: 'Feuilletage Inversé au Caramel',
    price: 22,
    category: 'desserts',
    isPrimary: false,
    tag: 'Pâtisserie',
    description: 'Crispy caramelized puff pastry, Bourbon vanilla diplomat cream, black mission figs roasted in lavender honey, and fig leaf oil.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Provence, France',
      pairing: '2018 Château d’Yquem Sauternes',
      allergens: 'Dairy, Gluten',
      prepTime: 'Baked fresh every evening'
    }
  },
  {
    id: 'charred-cheesecake',
    name: 'Charred Basque Cheesecake',
    subname: 'San Sebastián Tarta de Queso',
    price: 20,
    category: 'desserts',
    isPrimary: false,
    tag: 'House Favorite',
    description: 'Burnt caramelized exterior with an ultra-creamy molten center, infused with Madagascar vanilla bean and flaked sea salt.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Basque Country, Spain',
      pairing: 'Pedro Ximénez Sherry',
      allergens: 'Dairy, Eggs',
      prepTime: 'Slow-baked at high heat'
    }
  },

  // --- DRINKS (BEVERAGES) ---
  {
    id: 'smoked-old-fashioned',
    name: 'Smoked Amber Old Fashioned',
    subname: 'Crafted with Hibiki Japanese Harmony',
    price: 28,
    category: 'drinks',
    isPrimary: false,
    tag: 'Signature Cocktail',
    description: 'Hibiki Harmony Whisky, smoked cherrywood infusion, raw demerara, angostura bitters, flamed orange peel, and crystal ice sphere.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Suntory Distillery, Japan',
      pairing: 'Pairs with all prime wood-fired cuts',
      allergens: 'None',
      prepTime: 'Smoked tableside in glass cloche'
    }
  },
  {
    id: 'truffle-manhattan',
    name: 'Black Truffle Manhattan',
    subname: 'WhistlePig 10 Rye Reserve',
    price: 30,
    category: 'drinks',
    isPrimary: false,
    tag: 'Rare Blend',
    description: 'Small-batch 10-year rye whiskey, Carpano Antica vermouth infused with Périgord black truffles, and a 24k gold leaf Luxardo cherry.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Shoreham, Vermont',
      pairing: 'Rich red meats & dry aged cuts',
      allergens: 'None',
      prepTime: 'Stirred to -2°C'
    }
  },
  {
    id: 'yuzu-blossom',
    name: 'Royal Yuzu Blossom',
    subname: 'Artisanal Botanical Elixir (Non-Alcoholic)',
    price: 18,
    category: 'drinks',
    isPrimary: false,
    tag: 'Craft Mocktail',
    description: 'Fresh Kochi yuzu citrus, sparkling mountain spring water, elderflower cordial, smoked rosemary sprig, and edible gold dust.',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=85',
    details: {
      origin: 'Kochi Prefecture, Japan',
      pairing: 'Refreshing palate cleanser',
      allergens: 'None',
      prepTime: 'Shaken with hand-carved ice'
    }
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'Our Creations' },
  { id: 'steaks', label: 'Prime Wood-Fired Cuts' },
  { id: 'starters', label: 'Starters' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Grill It delivers an extraordinary masterclass in wood-fired perfection. The A5 Miyazaki tenderloin is sublime—tender beyond belief and kissed with pristine smoke.",
    author: "Michelin Guide Review 2024",
    role: "Culinary Inspection Report",
    rating: 5,
    stars: "★★★★★"
  },
  {
    id: 2,
    quote: "A temple of fire, craftsmanship, and quiet luxury. From the Himalayan salt dry-aging room to the sommelier's pairings, it is an unforgettable dining spectacle.",
    author: "The New York Times",
    role: "Dining Critic",
    rating: 5,
    stars: "★★★★★"
  },
  {
    id: 3,
    quote: "The single most decadent Wagyu experience in the country. The Truffle Scallops and 45-day Tomahawk are unforgettable benchmarks of fine dining.",
    author: "Bloomberg Pursuits",
    role: "Luxury Lifestyle Editor",
    rating: 5,
    stars: "★★★★★"
  }
];

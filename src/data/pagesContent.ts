import { PageMeta } from '../types';

export const PAGES_SEO: Record<string, PageMeta> = {
  home: {
    title: "Haute Parfumerie Journal | L'ARGENT NOIR",
    metaTitle: "Haute Parfumerie Journal | L'ARGENT NOIR",
    metaDescription: "Explore haute parfumerie through our fine fragrance journal. Uncover honest evaluations, olfactory chemistry, and rare flacons tested on skin. Read now.",
    canonicalPath: '/',
    h1: 'Haute Parfumerie: The Fine Fragrance Journal & Compendium',
    mainKeyword: 'haute parfumerie',
    relatedKeywords: ['fine fragrance journal', 'luxury perfume compendium'],
    intent: 'Navigational/Informational',
    questionAnswered: 'What is haute parfumerie, and where can I read serious fragrance writing?',
    image: '/images/haute-parfumerie-flacon-hero.webp',
    imageAlt: 'Smoked black obsidian perfume flacon with sterling silver cap on graphite pedestal for haute parfumerie journal',
    breadcrumbs: [{ name: 'Home', url: '/' }],
    faqs: [
      {
        question: 'What defines haute parfumerie compared to commercial designer fragrances?',
        answer: 'Haute parfumerie represents the pinnacle of olfactory craftsmanship. Unlike mass-market designer scents formulated to satisfy broad consumer panels using low-cost synthetic bases, haute parfumerie prioritizes creative liberty, exceptional raw botanical extracts (such as Grasse rose de mai or authentic agarwood), and intricate molecular compositions designed to evolve organically on skin.',
      },
      {
        question: 'Where can fragrance enthusiasts find serious, unbiased fragrance writing?',
        answer: 'L’ARGENT NOIR was established precisely to serve as an independent fine fragrance journal. Our evaluators avoid commercial sponsorship to deliver honest critiques of sillage, longevity, concentration ethics, and ingredient authenticity across both heritage French houses and avant-garde artisanal perfumers.',
      },
      {
        question: 'How should one begin navigating this luxury perfume compendium?',
        answer: 'We recommend starting with our Scent Notes Masterclass to understand the volatility pyramid, followed by our Concentration Guide to decipher oil-to-alcohol ratios, and finally consulting our curated reviews and recommendations categorized by season, gender, and aesthetic profile.',
      },
      {
        question: 'Are all luxury perfumes featured in haute parfumerie long-lasting?',
        answer: 'Longevity is governed by chemistry rather than prestige. While many haute parfumerie extraits endure for 14+ hours due to heavy natural resinoids, airy citrus colognes will naturally disperse faster. Our longevity guides detail how skin hydration and molecular fixatives dictate actual tenacity.',
      },
    ],
  },
  perfumeReviews: {
    title: "Niche Perfume Reviews | L'ARGENT NOIR",
    metaTitle: "Niche Perfume Reviews | L'ARGENT NOIR",
    metaDescription: "Read in-depth niche perfume reviews with honest fragrance reviews of iconic flacons, sillage ratings, and skin chemistry evaluations. Discover your scent.",
    canonicalPath: '/niche-perfume-reviews',
    h1: 'Niche Perfume Reviews: Honest Fragrance Evaluations on Skin',
    mainKeyword: 'niche perfume reviews',
    relatedKeywords: ['honest fragrance reviews', 'oud perfume review'],
    intent: 'Informational/Commercial',
    questionAnswered: 'Is this niche perfume worth buying, and how does it smell on skin?',
    image: '/images/sauvage-elixir-dior-men-flacon.webp',
    imageAlt: 'Midnight blue glass flacon with brushed gunmetal silver cap on charred oak for a niche perfume review',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Niche Perfume Reviews', url: '/niche-perfume-reviews' },
    ],
    faqs: [
      {
        question: 'Why are niche perfume reviews more reliable when tested on skin rather than paper?',
        answer: 'Paper blotters are neutral and cool, whereas human skin possesses warmth, moisture, and unique natural sebum lipids. Testing on dermis is the only method to evaluate how delicate top notes transition into dense heart accords over 8 to 12 hours.',
      },
      {
        question: 'What makes an oud perfume review genuinely authentic?',
        answer: 'An honest oud perfume review distinguishes between synthetic chemical woody bases (such as generic ambermax or timberol) and authentic wild or cultivated Aquilaria agarwood resin, evaluating the scent for animalic, balsamic, or smoky medicinal depth.',
      },
      {
        question: 'How do you determine if an expensive niche flacon is worth the investment?',
        answer: 'We evaluate price-to-performance by assessing ingredient quality, formulation complexity, skin endurance, versatility across occasions, and the uniqueness of the olfactory profile relative to existing market benchmarks.',
      },
      {
        question: 'Can you recommend niche houses that consistently deliver excellent sillage?',
        answer: 'Ateliers such as Maison Francis Kurkdjian, Nishane Istanbul, Amouage, and Parfums de Marly consistently excel in both projection and tenacity due to high oil concentrations and masterful fixative structures.',
      },
    ],
  },
  scentNotes: {
    title: "Perfume Notes Explained | L'ARGENT NOIR",
    metaTitle: "Perfume Notes Explained | L'ARGENT NOIR",
    metaDescription: "Perfume notes explained clearly: learn how top middle and base notes evaporate on warm skin, and master fragrance structure. Read our olfactory guide.",
    canonicalPath: '/perfume-notes-explained',
    h1: 'Perfume Notes Explained: Top, Middle, and Base Notes in Harmony',
    mainKeyword: 'perfume notes explained',
    relatedKeywords: ['top middle and base notes', 'what is a perfume accord'],
    intent: 'Informational',
    questionAnswered: 'What do top, heart and base notes mean?',
    image: '/images/perfume-notes-botanical-pyramid.webp',
    imageAlt: 'Artisanal perfume bottle with bergamot peel, bourbon vanilla pods, and sandalwood illustrating perfume notes explained',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Perfume Notes Explained', url: '/perfume-notes-explained' },
    ],
    faqs: [
      {
        question: 'What do top, heart, and base notes actually mean in perfumery?',
        answer: 'Top notes are volatile aromatic compounds that provide the immediate 15-minute impression. Heart (middle) notes form the true thematic core of the fragrance for 3 to 5 hours. Base notes consist of heavy macromolecules (resins, woods, and musks) that anchor the composition to your skin for 8 to 24 hours.',
      },
      {
        question: 'What is a perfume accord and how is it constructed?',
        answer: 'A perfume accord is a balanced combination of two or more distinct aroma ingredients that fuse together to produce an entirely new, single olfactory impression—analogous to a musical chord where individual notes create harmony.',
      },
      {
        question: 'Why do certain top notes disappear faster than others?',
        answer: 'Evaporation is dictated by molecular weight and vapor pressure. Monoterpenes found in citrus rinds have tiny, light molecular structures that boil off at room temperature quickly, whereas heavy sesquiterpenes in vetiver remain stable on warm skin.',
      },
      {
        question: 'Can a perfume smell great without following the classic pyramid structure?',
        answer: 'Yes. Linear perfumes are intentionally formulated to deliver a uniform, unshifting aroma from opening spray to drydown, popular in modern minimalist and molecular compositions like Escentric Molecules.',
      },
    ],
  },
  longevityGuide: {
    title: "How to Make Perfume Last Longer | L'ARGENT NOIR",
    metaTitle: "How to Make Perfume Last Longer | L'ARGENT NOIR",
    metaDescription: "Learn how to make perfume last longer with science-backed rules. Discover perfumes that last all day and master pulse-point lipid layering. Read more.",
    canonicalPath: '/how-to-make-perfume-last-longer',
    h1: 'How to Make Perfume Last Longer: The Science of All-Day Tenacity',
    mainKeyword: 'how to make perfume last longer',
    relatedKeywords: ['how long does perfume last', 'perfumes that last all day'],
    intent: 'Informational',
    questionAnswered: 'Why does my perfume fade, and how do I make it last longer?',
    image: '/images/perfume-atomizer-longevity-mist.webp',
    imageAlt: 'Polished silver perfume atomizer spraying crystalline mist demonstrating how to make perfume last longer',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'How to Make Perfume Last Longer', url: '/how-to-make-perfume-last-longer' },
    ],
    faqs: [
      {
        question: 'Why does my perfume fade so quickly on my skin?',
        answer: 'Fragrance fades primarily because dry skin lacks surface lipids. When alcohol evaporates, volatile perfume oils are absorbed deep into microscopic epidermis fissures rather than radiating into the surrounding air.',
      },
      {
        question: 'How long does perfume last on average across different concentrations?',
        answer: 'Eau de Toilette typically lasts 4 to 6 hours; Eau de Parfum endures 8 to 10 hours; and Extrait de Parfum or pure Parfum will routinely persist for 12 to 18+ hours under normal ambient conditions.',
      },
      {
        question: 'Does applying moisturizer or petroleum jelly really extend wear time?',
        answer: 'Yes. Applying an unscented lipid-rich balm (like squalane, ceramide cream, or Vaseline) creates a hydrophobic barrier that slows solvent absorption, extending scent longevity by up to 40%.',
      },
      {
        question: 'Why is rubbing wrists together considered harmful to fragrance?',
        answer: 'Friction creates sudden thermal spikes that shatter fragile top-note chemical bonds, prematurely evaporating zesty citrus and delicate florals before they have the chance to develop naturally.',
      },
    ],
  },
  recommendations: {
    title: "Best Long Lasting Niche Perfumes | L'ARGENT NOIR",
    metaTitle: "Best Long Lasting Niche Perfumes | L'ARGENT NOIR",
    metaDescription: "Discover the best long lasting niche perfumes of 2026. Find the best signature scent for men and women with verified 12-hour sillage. Explore the list.",
    canonicalPath: '/best-long-lasting-niche-perfumes',
    h1: 'Best Long Lasting Niche Perfumes: The Curated Compendium',
    mainKeyword: 'best long lasting niche perfumes',
    relatedKeywords: ['best signature scent for men', 'best niche perfumes for women'],
    intent: 'Commercial',
    questionAnswered: 'Which niche perfumes are worth buying for my taste and budget?',
    image: '/images/another-13-le-labo-perfume-lifestyle.webp',
    imageAlt: 'Trio of luxury perfume bottles representing the best long lasting niche perfumes for men and women',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Best Long Lasting Niche Perfumes', url: '/best-long-lasting-niche-perfumes' },
    ],
    faqs: [
      {
        question: 'What is currently the best signature scent for men seeking executive elegance?',
        answer: 'For a versatile executive presence, Dior Sauvage Elixir and Nishane Hacivat lead modern rankings due to their harmonious balance of fresh citrus, rich woods, and 12+ hour stamina.',
      },
      {
        question: 'What are the best niche perfumes for women looking for memorable sillage?',
        answer: 'Baccarat Rouge 540 Extrait de Parfum by Maison Francis Kurkdjian and Delina Exclusif by Parfums de Marly offer unparalleled compliments, luxurious vanillic amber warmth, and legendary projection.',
      },
      {
        question: 'Are there affordable perfumes that match high-end niche performance?',
        answer: 'Yes. Masterpiece formulations like Lalique Encre Noire (by Nathalie Lorson) and Armaf Club de Nuit Intense Man deliver niche-grade complexity and all-day sillage under $60.',
      },
      {
        question: 'How many sprays of high-concentration niche perfume should be applied?',
        answer: 'With pure extraits and rich eau de parfums, 2 to 3 strategic sprays (base of throat and nape of neck) are sufficient to project an intoxicating sillage without overwhelming closed rooms.',
      },
    ],
  },
  concentrationGuide: {
    title: "Eau de Parfum vs Parfum | L'ARGENT NOIR",
    metaTitle: "Eau de Parfum vs Parfum | L'ARGENT NOIR",
    metaDescription: "Master eau de parfum vs parfum differences. Learn the real difference between EDT and EDP in oil concentration, sillage, and skin longevity. Read now.",
    canonicalPath: '/eau-de-parfum-vs-parfum',
    h1: 'Eau de Parfum vs Parfum: Concentration Architecture Demystified',
    mainKeyword: 'eau de parfum vs parfum',
    relatedKeywords: ['extrait de parfum meaning', 'difference between EDT and EDP'],
    intent: 'Informational',
    questionAnswered: 'What is the difference between EDT, EDP and parfum?',
    image: '/images/eau-de-parfum-vs-parfum-flacons.webp',
    imageAlt: 'Two crystal perfume bottles on dark basalt comparing eau de parfum vs parfum concentrations',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Eau de Parfum vs Parfum', url: '/eau-de-parfum-vs-parfum' },
    ],
    faqs: [
      {
        question: 'What is the exact difference between EDT and EDP in oil percentage?',
        answer: 'Eau de Toilette (EDT) contains between 5% and 15% pure aromatic perfume oils dissolved in 85% to 95% alcohol, whereas Eau de Parfum (EDP) features a richer 15% to 20% oil concentration, lasting 8 to 10 hours on skin.',
      },
      {
        question: 'What is the true extrait de parfum meaning in luxury perfumery?',
        answer: 'Extrait de Parfum (also known as Pure Parfum or Grand Extrait) represents the highest tier of concentration, usually containing 20% to 40% fragrant essence. It possesses the lowest percentage of evaporating alcohol, resulting in an intimate, velvety skin persistence of 14 to 24+ hours.',
      },
      {
        question: 'Why does an Eau de Toilette sometimes project louder than a pure Parfum?',
        answer: 'Alcohol acts as the volatile vehicle that lifts perfume molecules into the atmosphere. Because EDTs contain more alcohol, top notes explode rapidly across the room. Parfums contain heavy oils that cling closely to skin, radiating through gentle body warmth rather than alcohol vaporization.',
      },
      {
        question: 'Are EDP and EDT editions of the same perfume always the same formula?',
        answer: 'Rarely. Master perfumers regularly rebalance the olfactory pyramid when formulating different concentrations—for instance, boosting sparkling aldehydes in the EDT while intensifying vanilla, amber, or sandalwood in the EDP version.',
      },
    ],
  },
  fragranceFamilies: {
    title: "Woody Oriental Fragrance Family | L'ARGENT NOIR",
    metaTitle: "Woody Oriental Fragrance Family | L'ARGENT NOIR",
    metaDescription: "Explore the woody oriental fragrance family and discover opulent amber vanilla perfumes crafted with rare resins, spices, and cedar. Find your signature.",
    canonicalPath: '/woody-oriental-fragrance-family',
    h1: 'Woody Oriental Fragrance Family: The Olfactory Wheel & Profiles',
    mainKeyword: 'woody oriental fragrance family',
    relatedKeywords: ['amber vanilla perfumes', 'leather perfumes for men'],
    intent: 'Informational/Commercial',
    questionAnswered: 'Which fragrance family suits my taste?',
    image: '/images/oud-wood-tom-ford-agarwood.webp',
    imageAlt: 'Ornate onyx perfume bottle surrounded by agarwood chips and resin for the woody oriental fragrance family',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Woody Oriental Fragrance Family', url: '/woody-oriental-fragrance-family' },
    ],
    faqs: [
      {
        question: 'What distinguishes the woody oriental fragrance family from other families?',
        answer: 'The woody oriental family (frequently referred to as Woody Amber) marries the opulent, resinous warmth of incense, benzoin, and vanilla with dry, architectural woods like cedar, sandalwood, patchouli, and agarwood (oud). It delivers profound depth and warmth.',
      },
      {
        question: 'When should someone wear amber vanilla perfumes?',
        answer: 'Amber vanilla perfumes flourish in autumn and winter or during romantic evening occasions. The enveloping sweetness of Madagascar vanilla combined with crystalline amber provides comforting, sensual sillage in cooler temperatures.',
      },
      {
        question: 'What characterizes classic leather perfumes for men?',
        answer: 'Leather perfumes evoke the aroma of tanned hides, equestrian saddles, birch tar, and rich tobacco. Modern masculine iterations pair smoky castoreum or suede accords with crisp cardamom or violet leaf to create an assertive, sophisticated presence.',
      },
      {
        question: 'How do I choose the best fragrance family for my personal lifestyle?',
        answer: 'Consider your daily environment: corporate offices suit crisp Fresh and Woody Citrus scents; creative and evening settings welcome opulent Woody Orientals and warm Gourmands; while outdoor warm weather brings out the beauty of Mineral Chypres and Florals.',
      },
    ],
  },
};

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PAGES_SEO } from '../src/data/pagesContent.ts';
import { ARTICLES } from '../src/data/articles.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');
const siteOrigin = 'https://ais-pre-pa6dhaaajptpkebllww2yj-701409644146.asia-northeast1.run.app';

interface RouteDefinition {
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  leadParagraph: string;
  image?: string;
  h2s: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  breadcrumbs: { name: string; url: string }[];
  isArticle?: boolean;
  publishedDate?: string;
  updatedDate?: string;
  authorName?: string;
  authorTitle?: string;
}

const routes: RouteDefinition[] = [
  {
    path: '/',
    metaTitle: PAGES_SEO.home.metaTitle,
    metaDescription: PAGES_SEO.home.metaDescription,
    h1: PAGES_SEO.home.h1,
    leadParagraph: "Haute parfumerie is the rarefied art of crafting fine fragrance without industrial compromise. Where commercial designer marketing prioritizes fleeting synthetic top notes to trigger instant department store transactions, haute parfumerie treats the olfactory spectrum as high art—distilling hand-harvested Grasse botanicals, rare resinoids, and complex molecular accords. For connoisseurs searching for serious fragrance writing, our fine fragrance journal and curated luxury perfume compendium provide exhaustive, independent critiques rooted in chemistry and sensory truth.",
    image: PAGES_SEO.home.image,
    h2s: [
      {
        title: "What Defines Haute Parfumerie in Modern Scent Architecture?",
        body: "To understand haute parfumerie, one must step beyond commercial brand marketing and examine the physics of the perfume flacon. Commercial fragrance houses often manufacture colognes with over 80% industrial solvent, leaning heavily on aggressive top notes that vanish within twenty minutes. In contrast, haute parfumerie treats formulation as musical counterpoint.",
      },
      {
        title: "A Serious Fine Fragrance Journal for Discerning Connoisseurs",
        body: "Serious fragrance writing requires ruthless objectivity. For decades, beauty journalism was beholden to advertising budgets, resulting in generic superlatives. L’ARGENT NOIR operates as an autonomous archival compendium. We examine how formulations behave across diverse dermal lipid profiles, how climate alters molecular dispersion, and whether expensive flacons genuinely justify their luxury investment.",
      },
      {
        title: "The Luxury Perfume Compendium: From Grasse to Niche Ateliers",
        body: "Our luxury perfume compendium documents both legendary heritage masterpieces and avant-garde artisanal releases. Whether evaluating the smoky agarwood resins of the Middle East, the aristocratic leather chypres of Grasse, or the crystalline amber-woods of modern Paris, each entry deconstructs the fragrance pyramid into its raw botanical truth.",
      },
    ],
    faqs: PAGES_SEO.home.faqs,
    breadcrumbs: PAGES_SEO.home.breadcrumbs,
  },
  {
    path: '/niche-perfume-reviews',
    metaTitle: PAGES_SEO.perfumeReviews.metaTitle,
    metaDescription: PAGES_SEO.perfumeReviews.metaDescription,
    h1: PAGES_SEO.perfumeReviews.h1,
    leadParagraph: "When investing upwards of $300 in artisanal flacons, readers frequently ask: is this niche perfume worth buying, and how does it smell on skin? In our niche perfume reviews, we evaluate formulations over a full 12-hour dermal wear cycle rather than relying on superficial paper test strips. On living skin, body warmth and natural lipids unlock the true heart accords—transforming raw botanical extracts into intimate, multi-dimensional sillage trails.",
    image: PAGES_SEO.perfumeReviews.image,
    h2s: [
      {
        title: "Honest Fragrance Reviews: Why Skin Chemistry Outweighs Paper Strips",
        body: "Too many commercial perfume reviews are conducted in the sterile air of retail boutique counters, where a single spray onto cardstock paper is judged as the definitive scent signature. In our honest fragrance reviews, we dismantle this misleading practice. Paper blotters lack body temperature, epidermal pH, and skin lipids.",
      },
      {
        title: "The Definitive Oud Perfume Review & Agarwood Evaluation",
        body: "Among all luxury genres, none generates more consumer hesitation and fascination than oud. In our comprehensive oud perfume review monographs, we examine how master perfumers handle authentic agarwood resin—a substance worth more than gold by weight.",
      },
      {
        title: "Evaluating Niche Fragrances: Sillage, Tenacity & Price Ethics",
        body: "Not every $400 flacon justifies its price tag. In evaluating luxury niche houses, we scrutinize ingredient ethics, the balance of the top middle and base notes, and how the scent projects in various settings.",
      },
    ],
    faqs: PAGES_SEO.perfumeReviews.faqs,
    breadcrumbs: PAGES_SEO.perfumeReviews.breadcrumbs,
  },
  {
    path: '/perfume-notes-explained',
    metaTitle: PAGES_SEO.scentNotes.metaTitle,
    metaDescription: PAGES_SEO.scentNotes.metaDescription,
    h1: PAGES_SEO.scentNotes.h1,
    leadParagraph: "When exploring fragrance chemistry, perfume lovers frequently ask: what do top, heart, and base notes actually mean? With perfume notes explained through molecular physics, fragrance is revealed as a chronological three-act symphony. Top notes are lightweight volatile aroma compounds that sparkle during the initial fifteen minutes; heart or middle notes form the emotional soul of the blend lasting three to five hours; and base notes are dense macromolecules that anchor the scent to human skin for twelve to twenty-four hours.",
    image: PAGES_SEO.scentNotes.image,
    h2s: [
      {
        title: "Demystifying Top Middle and Base Notes in Modern Formulation",
        body: "In nineteenth-century Grasse, master perfumer Jean Carles formalized the Olfactory Pyramid to prevent perfumes from collapsing into an overwhelming burst of scent that vanishes abruptly. By layering top middle and base notes, perfumers engineer a controlled, staged evaporation curve.",
      },
      {
        title: "What Is a Perfume Accord and How Do Master Noses Build Them?",
        body: "One of the most frequently asked questions in our ateliers is: what is a perfume accord? In olfactory composition, an accord is the harmonious synthesis of two or more distinct aroma ingredients that meld together to create an entirely new, unified scent identity.",
      },
      {
        title: "Volatility Mechanics: How Concentration Alters the Note Progression",
        body: "The speed at which notes transition is intimately tied to the ratio of perfume oil to denatured ethanol. In an Eau de Toilette with 10% oil, alcohol flashes off rapidly, carrying top notes far into the air.",
      },
    ],
    faqs: PAGES_SEO.scentNotes.faqs,
    breadcrumbs: PAGES_SEO.scentNotes.breadcrumbs,
  },
  {
    path: '/how-to-make-perfume-last-longer',
    metaTitle: PAGES_SEO.longevityGuide.metaTitle,
    metaDescription: PAGES_SEO.longevityGuide.metaDescription,
    h1: PAGES_SEO.longevityGuide.h1,
    leadParagraph: "If you have ever sprayed an expensive flacon only to wonder why does my perfume fade, and how do I make it last longer?, the answer lies in thermodynamic bio-chemistry. Scent fades because dry skin rapidly absorbs alcohol solvents down into pores, leaving delicate aroma oils stranded without surface lipids to anchor them. Learning how to make perfume last longer requires creating an artificial lipid barrier with squalane or ceramide balms, spraying arterial pulse points for thermal convection, and never rubbing your wrists together.",
    image: PAGES_SEO.longevityGuide.image,
    h2s: [
      {
        title: "The Biology of Evaporation: How Long Does Perfume Last on Skin?",
        body: "Clients often ask our evaluators: how long does perfume last on average? The answer depends on three interconnected variables: the concentration of pure fragrant oil, the ambient room temperature, and the moisture level of your stratum corneum.",
      },
      {
        title: "Eight Proven Rules on How to Make Perfume Last Longer All Day",
        body: "Pre-hydrate with lipid balms, target arterial pulse points, never rub wrists together, and mist natural cashmere and wool scarf fibers for persistent 48-hour sillage.",
      },
      {
        title: "Selecting Perfumes That Last All Day: Molecular Weight & Bases",
        body: "If your routine demands unrelenting endurance from morning boardrooms to midnight dinners, seek out perfumes that last all day formulated with heavy fixatives like natural agarwood, Somalian frankincense, oakmoss, and ambergris.",
      },
    ],
    faqs: PAGES_SEO.longevityGuide.faqs,
    breadcrumbs: PAGES_SEO.longevityGuide.breadcrumbs,
  },
  {
    path: '/best-long-lasting-niche-perfumes',
    metaTitle: PAGES_SEO.recommendations.metaTitle,
    metaDescription: PAGES_SEO.recommendations.metaDescription,
    h1: PAGES_SEO.recommendations.h1,
    leadParagraph: "When curating a high-end fragrance wardrobe, connoisseurs inevitably ask: which niche perfumes are worth buying for my taste and budget? To eliminate regretful blind buys, our critics have benchmarked the best long lasting niche perfumes on global skin trials. From authoritative spiced vetivers and smoky agarwood elixirs to ethereal crystalline ambers, each recommended flacon combines extraordinary craftsmanship with proven twelve-hour sillage.",
    image: PAGES_SEO.recommendations.image,
    h2s: [
      {
        title: "The Best Signature Scent for Men: Authority, Woods & Spices",
        body: "Selecting the best signature scent for men requires balancing corporate versatility with charismatic evening presence. In modern perfumery, generic aquatic calone blasts have been replaced by structured mineral woods and spicy aromatics like Dior Sauvage Elixir and Nishane Hacivat.",
      },
      {
        title: "The Best Niche Perfumes for Women: Luminous Florals & Silken Ambers",
        body: "In evaluating the best niche perfumes for women, our panel looks beyond sweet caramel cliches to identify perfumes with multidimensional emotional resonance like Baccarat Rouge 540 Extrait and Delina Exclusif.",
      },
      {
        title: "Benchmarking the Best Long Lasting Niche Perfumes Across Budgets",
        body: "A prevalent misconception is that you must spend $500 to enjoy artisanal performance. Masterpieces like Lalique Encre Noire and Zara Sand Desert At Sunset prove that high-value fragrances deliver niche-grade complexity under $60.",
      },
    ],
    faqs: PAGES_SEO.recommendations.faqs,
    breadcrumbs: PAGES_SEO.recommendations.breadcrumbs,
  },
  {
    path: '/eau-de-parfum-vs-parfum',
    metaTitle: PAGES_SEO.concentrationGuide.metaTitle,
    metaDescription: PAGES_SEO.concentrationGuide.metaDescription,
    h1: PAGES_SEO.concentrationGuide.h1,
    leadParagraph: "When examining luxury flacon labels, perfume lovers frequently ask: what is the difference between EDT, EDP, and parfum? In the debate of eau de parfum vs parfum, the distinction is fundamentally mathematical. Eau de Toilette (5%–15% oil) prioritizes explosive initial projection lasting four to six hours; Eau de Parfum (15%–20% oil) showcases velvety heart accords lasting eight to ten hours; while pure Parfum or Extrait (20%–40% oil) delivers intimate, magnetic skin cling that persists for fourteen to twenty-four hours.",
    image: PAGES_SEO.concentrationGuide.image,
    h2s: [
      {
        title: "The Essential Difference Between EDT and EDP in Modern Parfumerie",
        body: "Understanding the difference between EDT and EDP is crucial for any fragrance enthusiast. Master perfumers in Grasse and Paris virtually always rebalance the formula when adapting a fragrance across concentrations.",
      },
      {
        title: "Extrait de Parfum Meaning: Pure Essence, Sillage & Cling",
        body: "What is the true extrait de parfum meaning in haute parfumerie? Also designated as Pure Parfum, Parfum Concentré, or Grand Extrait, this represents the absolute zenith of fragrance formulation.",
      },
      {
        title: "Scientific Breakdown: Eau de Parfum vs Parfum Longevity Dynamics",
        body: "When deciding between eau de parfum vs parfum, consider your daily routine and sensory environment. An Eau de Parfum balances office discretion with evening projection.",
      },
    ],
    faqs: PAGES_SEO.concentrationGuide.faqs,
    breadcrumbs: PAGES_SEO.concentrationGuide.breadcrumbs,
  },
  {
    path: '/woody-oriental-fragrance-family',
    metaTitle: PAGES_SEO.fragranceFamilies.metaTitle,
    metaDescription: PAGES_SEO.fragranceFamilies.metaDescription,
    h1: PAGES_SEO.fragranceFamilies.h1,
    leadParagraph: "When seeking an authentic signature scent, enthusiasts naturally wonder: which fragrance family suits my taste? In classical perfumery, all scents are organized around the Fragrance Wheel, with the woody oriental fragrance family reigning as the most prestigious genre. Whether your aesthetic aligns with smoldering agarwood, cozy amber gourmands, crisp aromatic fougères, or assertive leathers, understanding fragrance families allows you to select perfumes that harmonize effortlessly with your lifestyle, wardrobe, and climate.",
    image: PAGES_SEO.fragranceFamilies.image,
    h2s: [
      {
        title: "Exploring the Regal Woody Oriental Fragrance Family",
        body: "The woody oriental fragrance family stands as the quintessential embodiment of luxury perfumery, marrying the resinous warmth of incense and benzoin with dry woods like cedar, sandalwood, and oud.",
      },
      {
        title: "The Intoxicating Charm of Amber Vanilla Perfumes",
        body: "Within the broader oriental family, amber vanilla perfumes deliver dark, smoky, and comforting warmth suited for cold winter evenings and romantic milestones.",
      },
      {
        title: "Classic and Contemporary Leather Perfumes for Men",
        body: "For gentlemen seeking an uncompromising statement of authority, leather perfumes for men evoke Russian birch tar, equestrian saddles, and fine calfskin suede.",
      },
    ],
    faqs: PAGES_SEO.fragranceFamilies.faqs,
    breadcrumbs: PAGES_SEO.fragranceFamilies.breadcrumbs,
  },
  {
    path: '/blog',
    metaTitle: PAGES_SEO.blog.metaTitle,
    metaDescription: PAGES_SEO.blog.metaDescription,
    h1: PAGES_SEO.blog.h1,
    leadParagraph: "Explore our haute parfumerie blog, featuring ten in-depth editorial monographs, scent note masterclasses, and buying recommendations independently tested across living skin.",
    image: PAGES_SEO.blog.image,
    h2s: [
      {
        title: "Editorial Fragrance Monographs & Guides",
        body: "From the top 10 best perfumes for men in 2026 to our definitive 12-hour longevity secrets, read serious fragrance journalism without commercial marketing bias.",
      },
      {
        title: "Deciphering Olfactory Notes, Accords & Sillage",
        body: "Every article breaks down top, middle, and base notes with chemical precision, evaluating projection, tenacity, and raw botanical sourcing.",
      },
    ],
    faqs: PAGES_SEO.blog.faqs,
    breadcrumbs: PAGES_SEO.blog.breadcrumbs,
  },
];

// Add all 10 blog clean article pages AND review monograph clean pages
ARTICLES.forEach((art) => {
  // 1. Primary Clean Blog URL
  routes.push({
    path: art.slug,
    metaTitle: art.metaTitle,
    metaDescription: art.metaDescription,
    h1: art.title,
    leadParagraph: art.excerpt,
    image: art.heroImage,
    h2s: art.sections.map((s) => ({
      title: s.heading,
      body: s.paragraphs[0] || '',
    })),
    faqs: art.faqs,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: art.title, url: art.slug },
    ],
    isArticle: true,
    publishedDate: art.publishedDate,
    updatedDate: art.updatedDate,
    authorName: art.author.name,
    authorTitle: art.author.title,
  });

  // 2. Direct Review Monograph URL
  if (art.reviewSlug && art.reviewSlug !== art.slug) {
    routes.push({
      path: art.reviewSlug,
      metaTitle: art.metaTitle,
      metaDescription: art.metaDescription,
      h1: art.title,
      leadParagraph: art.excerpt,
      image: art.heroImage,
      h2s: art.sections.map((s) => ({
        title: s.heading,
        body: s.paragraphs[0] || '',
      })),
      faqs: art.faqs,
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Niche Perfume Reviews', url: '/niche-perfume-reviews' },
        { name: art.title, url: art.reviewSlug },
      ],
      isArticle: true,
      publishedDate: art.publishedDate,
      updatedDate: art.updatedDate,
      authorName: art.author.name,
      authorTitle: art.author.title,
    });
  }
});

console.log(`Starting static pre-rendering for ${routes.length} routes...`);

routes.forEach((route) => {
  let html = templateHtml;

  // Title: Under 60 characters with brand name at the end
  const finalTitle = route.metaTitle.endsWith("L'ARGENT NOIR")
    ? route.metaTitle
    : `${route.metaTitle} | L'ARGENT NOIR`;
  html = html.replace(/<title>.*?<\/title>/i, `<title>${finalTitle}</title>`);

  // Meta description: 140-155 characters
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.metaDescription}" />`
  );

  // Canonical URL
  const canonicalUrl = `${siteOrigin}${route.path}`;
  if (html.includes('rel="canonical"')) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `    <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
    );
  }

  // Open Graph and Twitter cards
  const imageUrl = `${siteOrigin}${route.image || '/images/haute-parfumerie-flacon-hero.webp'}`;

  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${finalTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.metaDescription}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${finalTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.metaDescription}" />`
  );

  // Replace or inject og:url and og:image
  const extraMetas = `
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta name="twitter:image" content="${imageUrl}" />
  `;
  html = html.replace('</head>', `${extraMetas}\n  </head>`);

  // JSON-LD structured data
  const isHomePage = route.path === '/';
  const jsonLdScripts: string[] = [];

  if (isHomePage) {
    const jsonLdOrg = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: "L'ARGENT NOIR",
      url: siteOrigin,
      logo: `${siteOrigin}/favicon.ico`,
      description: 'An independent fine fragrance journal and luxury perfume compendium.',
    };

    const jsonLdWebSite = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: "L'ARGENT NOIR",
      url: siteOrigin,
      description: 'A haute parfumerie journal and luxury perfume compendium.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteOrigin}/?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };

    jsonLdScripts.push(`<script type="application/ld+json">${JSON.stringify(jsonLdOrg)}</script>`);
    jsonLdScripts.push(`<script type="application/ld+json">${JSON.stringify(jsonLdWebSite)}</script>`);
  } else {
    const jsonLdBreadcrumbs = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: `${siteOrigin}${b.url}`,
      })),
    };
    jsonLdScripts.push(`<script type="application/ld+json">${JSON.stringify(jsonLdBreadcrumbs)}</script>`);
  }

  if (route.faqs && route.faqs.length > 0) {
    const jsonLdFaq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: route.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };
    jsonLdScripts.push(`<script type="application/ld+json">${JSON.stringify(jsonLdFaq)}</script>`);
  }

  if (route.isArticle) {
    const jsonLdArticle = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: route.h1,
      description: route.metaDescription,
      image: imageUrl,
      datePublished: route.publishedDate,
      dateModified: route.updatedDate,
      author: {
        '@type': 'Person',
        name: route.authorName,
        jobTitle: route.authorTitle,
      },
      publisher: {
        '@type': 'Organization',
        name: "L'ARGENT NOIR",
        logo: {
          '@type': 'ImageObject',
          url: `${siteOrigin}/favicon.ico`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
    };
    jsonLdScripts.push(`<script type="application/ld+json">${JSON.stringify(jsonLdArticle)}</script>`);
  }

  html = html.replace('</head>', `${jsonLdScripts.join('\n')}\n  </head>`);

  // Pre-rendered crawlable semantic HTML markup injected into <div id="root">
  const preRenderedContent = `
    <header class="sr-only">
      <nav aria-label="Breadcrumb">
        <ol>
          ${route.breadcrumbs.map((b) => `<li><a href="${b.url}">${b.name}</a></li>`).join('')}
        </ol>
      </nav>
      <nav aria-label="Main Navigation">
        <a href="/">Haute Parfumerie</a>
        <a href="/niche-perfume-reviews">Niche Perfume Reviews</a>
        <a href="/perfume-notes-explained">Perfume Notes Explained</a>
        <a href="/how-to-make-perfume-last-longer">How to Make Perfume Last Longer</a>
        <a href="/best-long-lasting-niche-perfumes">Best Long Lasting Niche Perfumes</a>
        <a href="/eau-de-parfum-vs-parfum">Eau de Parfum vs Parfum</a>
        <a href="/woody-oriental-fragrance-family">Woody Oriental Fragrance Family</a>
      </nav>
    </header>
    <main>
      <article>
        <h1>${route.h1}</h1>
        <p class="lead">${route.leadParagraph}</p>
        ${route.h2s.map((h2) => `
          <section>
            <h2>${h2.title}</h2>
            <p>${h2.body}</p>
          </section>
        `).join('')}
        ${route.faqs.length > 0 ? `
          <section id="faq">
            <h2>Frequently Asked Questions</h2>
            ${route.faqs.map((f) => `
              <div class="faq-item">
                <h3>${f.question}</h3>
                <p>${f.answer}</p>
              </div>
            `).join('')}
          </section>
        ` : ''}
      </article>
    </main>
    <footer class="sr-only">
      <p>&copy; 2026 L'ARGENT NOIR. All rights reserved.</p>
      <a href="/">Haute Parfumerie</a>
      <a href="/niche-perfume-reviews">Honest Fragrance Reviews</a>
      <a href="/how-to-make-perfume-last-longer">Perfumes That Last All Day</a>
      <a href="/perfume-notes-explained">Top Middle and Base Notes</a>
      <a href="/eau-de-parfum-vs-parfum">Difference Between EDT and EDP</a>
      <a href="/woody-oriental-fragrance-family">Amber Vanilla Perfumes</a>
      <a href="/best-long-lasting-niche-perfumes">Best Long Lasting Niche Perfumes</a>
    </footer>
  `;

  // Inject into root
  html = html.replace('<div id="root"></div>', `<div id="root">${preRenderedContent}</div>`);

  // Target directory
  let targetPath = '';
  if (route.path === '/') {
    targetPath = path.join(distDir, 'index.html');
  } else {
    const cleanPath = route.path.replace(/^\//, '');
    const targetFolder = path.join(distDir, cleanPath);
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }
    targetPath = path.join(targetFolder, 'index.html');
  }

  fs.writeFileSync(targetPath, html, 'utf-8');
});

// Also pre-render custom 404.html
const notFoundHtml = templateHtml
  .replace(/<title>.*?<\/title>/i, `<title>Page Not Found | L'ARGENT NOIR</title>`)
  .replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="The requested perfume monograph or fragrance guide was not found. Explore our luxury compendium." />`
  )
  .replace(
    '<div id="root"></div>',
    `<div id="root">
      <main style="padding: 3rem; text-align: center; color: #e2e4e9;">
        <h1>404: Olfactory Monograph Not Found</h1>
        <p>The monograph or fragrance page you requested is unavailable. Return to our primary editorial guides:</p>
        <nav>
          <p><a href="/" style="color: #ffffff;">Haute Parfumerie Home</a></p>
          <p><a href="/niche-perfume-reviews" style="color: #ffffff;">Niche Perfume Reviews</a></p>
          <p><a href="/perfume-notes-explained" style="color: #ffffff;">Perfume Notes Explained</a></p>
          <p><a href="/how-to-make-perfume-last-longer" style="color: #ffffff;">How to Make Perfume Last Longer</a></p>
          <p><a href="/best-long-lasting-niche-perfumes" style="color: #ffffff;">Best Long Lasting Niche Perfumes</a></p>
          <p><a href="/eau-de-parfum-vs-parfum" style="color: #ffffff;">Eau de Parfum vs Parfum</a></p>
          <p><a href="/woody-oriental-fragrance-family" style="color: #ffffff;">Woody Oriental Fragrance Family</a></p>
        </nav>
      </main>
    </div>`
  );
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');

// Ensure sitemap.xml and robots.txt exist in dist
const publicSitemap = path.resolve(__dirname, '../public/sitemap.xml');
const publicRobots = path.resolve(__dirname, '../public/robots.txt');
const distSitemap = path.join(distDir, 'sitemap.xml');
const distRobots = path.join(distDir, 'robots.txt');

if (fs.existsSync(publicSitemap)) {
  fs.copyFileSync(publicSitemap, distSitemap);
}
if (fs.existsSync(publicRobots)) {
  fs.copyFileSync(publicRobots, distRobots);
}

console.log('Static pre-rendering complete. All 17 clean pages, 404 page, and monographs generated with full crawlable semantic HTML, H1/H2s, FAQs, and JSON-LD.');

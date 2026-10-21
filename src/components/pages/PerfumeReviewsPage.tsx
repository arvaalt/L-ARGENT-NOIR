import { Breadcrumbs } from '../Breadcrumbs';
import { FAQSection } from '../FAQSection';
import { PAGES_SEO } from '../../data/pagesContent';
import { Article } from '../../types';
import { ArticleCard } from '../ArticleCard';
import { ShieldCheck, Award, Star, ArrowRight } from 'lucide-react';

interface PerfumeReviewsPageProps {
  articles: Article[];
  onNavigate: (url: string) => void;
  onSelectArticle: (article: Article) => void;
  savedIds: string[];
  onToggleSave: (id: string, e?: React.MouseEvent) => void;
}

export function PerfumeReviewsPage({
  articles,
  onNavigate,
  onSelectArticle,
  savedIds,
  onToggleSave,
}: PerfumeReviewsPageProps) {
  const seo = PAGES_SEO.perfumeReviews;

  // Filter review-focused articles
  const reviewArticles = articles.filter((a) =>
    a.category === "Men's Parfumerie" ||
    a.category === "Women's Parfumerie" ||
    a.category === "Oud & Niche Collectibles" ||
    a.id === 'best-oud-perfumes' ||
    a.id === 'top-10-men-2026' ||
    a.id === 'women-long-lasting'
  );

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={seo.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
          <span>Independent Dermal Evaluations</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
          {seo.h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          When investing upwards of $300 in artisanal flacons, readers frequently ask: <em>is this niche perfume worth buying, and how does it smell on skin?</em> In our <strong>niche perfume reviews</strong>, we evaluate formulations over a full 12-hour dermal wear cycle rather than relying on superficial paper test strips. On living skin, body warmth and natural lipids unlock the true heart accords—transforming raw botanical extracts into intimate, multi-dimensional sillage trails.
        </p>
      </header>

      {/* Hero Image */}
      <section className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-xl">
        <div className="relative aspect-[16/8] max-h-[420px] w-full overflow-hidden">
          <img
            src={seo.image}
            alt={seo.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/30 to-transparent" />
        </div>
      </section>

      {/* Long-Form In-Depth Editorial Copy (600-900 words) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Honest Fragrance Reviews: Why Skin Chemistry Outweighs Paper Strips
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Too many commercial perfume reviews are conducted in the sterile air of retail boutique counters, where a single spray onto cardstock paper is judged as the definitive scent signature. In our <strong className="text-white">honest fragrance reviews</strong>, we dismantle this misleading practice. Paper blotters lack body temperature, epidermal pH, and skin lipids. On paper, sparkling top notes like Calabrian bergamot or aldehydes linger artificially for hours, while deep resinous base notes remain dormant.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              When applied to arterial pulse points, that exact same juice undergoes a dramatic chemical evolution. Our master evaluators track the perfume across three distinct phases: the 15-minute opening burst, the 4-hour heart bloom, and the 8-to-14-hour drydown. To understand how concentration percentages dictate this tenacity, consult our comprehensive <button type="button" onClick={() => onNavigate('/concentration-guide')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">difference between EDT and EDP</button> guide.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              The Definitive Oud Perfume Review & Agarwood Evaluation
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Among all luxury genres, none generates more consumer hesitation and fascination than oud. In our comprehensive <strong className="text-white">oud perfume review</strong> monographs, we examine how master perfumers handle authentic agarwood resin—a substance worth more than gold by weight. We evaluate whether a creation relies on synthetic woody bases (such as norlimbanol or ambermax) or genuine wild distilled Aquilaria wood from Assam, Vietnam, or Cambodia.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Masterpieces like <em>Oud Satin Mood</em> by Maison Francis Kurkdjian marry Laotian agarwood with French violet and Bulgarian rose, delivering an opulent, spun-silk aura that persists for 16+ hours. In contrast, <em>Amouage Interlude Man</em> pairs smoky frankincense with medicinal oud smoke to create an unstoppable nocturnal armor. For readers exploring warm resins, compare these with our <button type="button" onClick={() => onNavigate('/fragrance-families')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">woody oriental fragrance family</button> profiles.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Evaluating Niche Fragrances: Sillage, Tenacity & Price Ethics
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Not every $400 flacon justifies its price tag. In evaluating luxury niche houses, we scrutinize ingredient ethics, the balance of the <button type="button" onClick={() => onNavigate('/scent-notes')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">top middle and base notes</button>, and how the scent projects in various settings. If a fragrance disappears within two hours without artistic justification, our critics state so directly.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Conversely, when a house achieves miraculous balance—such as Nishane Hacivat's effervescent pineapple-oakmoss chypre or Frédéric Malle's rose-incense monument Portrait of a Lady—we celebrate it as a generational achievement. If you struggle with fragrances evaporating prematurely, read our masterclass on <button type="button" onClick={() => onNavigate('/longevity-guide')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">how to make perfume last longer</button> to master skin hydration and lipid anchoring.
            </p>
          </div>
        </div>

        {/* Sidebar Review Standards */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Our Review Protocol
            </span>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">1. 14-Day Dermal Trial</span>
                <span>Evaluated across varied skin temperatures, ambient humidity, and physical routines.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">2. Sillage & Radius Metrics</span>
                <span>Measured at 1m, 2m, and 5m projection distances across consecutive wear hours.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">3. Zero Sponsored Influence</span>
                <span>All bottles purchased directly or acquired via independent European olfactory archives.</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/recommendations')}
              className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs text-white uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>See Top Rated Recommendations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      </section>

      {/* Curated Reviews Grid */}
      <section className="pt-8 border-t border-zinc-800">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Reviewed Flacons
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
              Detailed Perfume Review Monographs
            </h2>
          </div>
          <span className="text-xs text-zinc-400 font-mono">
            {reviewArticles.length} Detailed Studies
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewArticles.map((art) => (
            <ArticleCard
              key={art.id}
              article={art}
              onSelect={onSelectArticle}
              isSaved={savedIds.includes(art.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={seo.faqs}
        title="Frequently Asked Questions: Niche Perfume Evaluations"
        subtitle="Addressing common consumer questions regarding skin chemistry, oud authenticity, and price-to-performance."
      />
    </article>
  );
}

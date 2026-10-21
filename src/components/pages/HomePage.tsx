import { Sparkles, ArrowRight, BookOpen, Layers, Award, Clock } from 'lucide-react';
import { PAGES_SEO } from '../../data/pagesContent';
import { FAQSection } from '../FAQSection';
import { Article } from '../../types';
import { ArticleCard } from '../ArticleCard';

interface HomePageProps {
  articles: Article[];
  onNavigate: (url: string) => void;
  onSelectArticle: (article: Article) => void;
  onOpenFinder: () => void;
  savedIds: string[];
  onToggleSave: (id: string, e?: React.MouseEvent) => void;
}

export function HomePage({
  articles,
  onNavigate,
  onSelectArticle,
  onOpenFinder,
  savedIds,
  onToggleSave,
}: HomePageProps) {
  const seo = PAGES_SEO.home;
  const featured = articles[0];

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Editorial Hero Header */}
      <header className="relative pt-6 pb-12 border-b border-zinc-800/80 overflow-hidden">
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-400 font-medium">
            <span>Haute Parfumerie Journal</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Vol. XIV Archive</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
            {seo.h1}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            <strong>Haute parfumerie</strong> is the rarefied art of crafting fine fragrance without industrial compromise. Where commercial designer marketing prioritizes fleeting synthetic top notes to trigger instant department store transactions, haute parfumerie treats the olfactory spectrum as high art—distilling hand-harvested Grasse botanicals, rare resinoids, and complex molecular accords. For connoisseurs searching for serious fragrance writing, our <button type="button" onClick={() => onNavigate('/niche-perfume-reviews')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">fine fragrance journal</button> and curated <button type="button" onClick={() => onNavigate('/best-long-lasting-niche-perfumes')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">luxury perfume compendium</button> provide exhaustive, independent critiques rooted in chemistry and sensory truth.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenFinder}
              className="px-6 py-3 rounded-xl bg-zinc-200 text-black hover:bg-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Scent Concierge</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/perfume-notes-explained')}
              className="px-6 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Scent Notes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Showcase Image */}
      <section className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
        <div className="relative aspect-[16/9] max-h-[500px] w-full overflow-hidden">
          <img
            src={seo.image}
            alt={seo.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/30 to-transparent" />
        </div>
        <div className="p-6 sm:p-8 bg-zinc-950/90 border-t border-zinc-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-zinc-400">Atelier Monograph</span>
            <p className="font-serif text-xl sm:text-2xl text-white">The Flacon Architecture of L'ARGENT NOIR</p>
            <p className="text-xs text-zinc-400 max-w-xl">
              Smoked obsidian glass paired with hand-turned sterling silver hardware, designed to protect sensitive botanical terpenes from light oxidation.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/eau-de-parfum-vs-parfum')}
            className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs uppercase tracking-wider text-zinc-200 hover:text-white transition-colors cursor-pointer shrink-0 self-start md:self-auto"
          >
            Read Concentration Guide →
          </button>
        </div>
      </section>

      {/* Long-Form Editorial Section (600-900 words copy) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              What Defines Haute Parfumerie in Modern Scent Architecture?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              To understand haute parfumerie, one must step beyond commercial brand marketing and examine the physics of the perfume flacon. Commercial fragrance houses often manufacture colognes with over 80% industrial solvent, leaning heavily on aggressive top notes that vanish within twenty minutes. In contrast, haute parfumerie treats formulation as musical counterpoint.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Every formula documented in our <strong className="text-white">fine fragrance journal</strong> is assessed against strict olfactory criteria: the purity of solvent extraction, the integration of botanical absolutes (such as Florentine orris and May rose), and the tenacity of slow-evaporating fixatives. When investigating <button type="button" onClick={() => onNavigate('/eau-de-parfum-vs-parfum')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">eau de parfum vs parfum</button>, one uncovers how lipid saturation dictates whether a scent remains an intimate whisper or an imposing aura.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              A Serious Fine Fragrance Journal for Discerning Connoisseurs
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Serious fragrance writing requires ruthless objectivity. For decades, beauty journalism was beholden to advertising budgets, resulting in generic superlatives. L’ARGENT NOIR operates as an autonomous archival compendium. We examine how formulations behave across diverse dermal lipid profiles, how climate alters molecular dispersion, and whether expensive flacons genuinely justify their luxury investment.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Within our extensive archive, readers can delve into our detailed <button type="button" onClick={() => onNavigate('/niche-perfume-reviews')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">niche perfume reviews</button>, explore our chemistry masterclass on <button type="button" onClick={() => onNavigate('/perfume-notes-explained')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">perfume notes explained</button>, or master the bio-chemical mechanisms of <button type="button" onClick={() => onNavigate('/how-to-make-perfume-last-longer')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">how to make perfume last longer</button> on warm skin.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              The Luxury Perfume Compendium: From Grasse to Niche Ateliers
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Our <strong className="text-white">luxury perfume compendium</strong> documents both legendary heritage masterpieces and avant-garde artisanal releases. Whether evaluating the smoky agarwood resins of the Middle East, the aristocratic leather chypres of Grasse, or the crystalline amber-woods of modern Paris, each entry deconstructs the fragrance pyramid into its raw botanical truth.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              If you are curating a personal wardrobe or exploring our <button type="button" onClick={() => onNavigate('/woody-oriental-fragrance-family')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">woody oriental fragrance family</button> compendium, our editorial team provides verified recommendations designed to help you discover a transcendent olfactory signature.
            </p>
          </div>
        </div>

        {/* Sidebar Pillars */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Core Compendium Pillars
            </span>
            <ul className="space-y-3 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/niche-perfume-reviews')}
                  className="w-full text-left p-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <span className="font-medium text-white block">Niche Perfume Reviews</span>
                    <span className="text-zinc-400 text-[11px]">Honest evaluations on dermal wear</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/perfume-notes-explained')}
                  className="w-full text-left p-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <span className="font-medium text-white block">Scent Notes Masterclass</span>
                    <span className="text-zinc-400 text-[11px]">Top, middle & base notes decoded</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/how-to-make-perfume-last-longer')}
                  className="w-full text-left p-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <span className="font-medium text-white block">Longevity Guides</span>
                    <span className="text-zinc-400 text-[11px]">Science of 12-hour sillage</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/eau-de-parfum-vs-parfum')}
                  className="w-full text-left p-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <span className="font-medium text-white block">Concentration Guide</span>
                    <span className="text-zinc-400 text-[11px]">EDT vs EDP vs Extrait de Parfum</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/woody-oriental-fragrance-family')}
                  className="w-full text-left p-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <span className="font-medium text-white block">Fragrance Families</span>
                    <span className="text-zinc-400 text-[11px]">Woody oriental, amber & leather</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* Featured Cover Masterclass Spotlight */}
      {featured && (
        <section className="pt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
                Editor's Choice
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                Featured Editorial Monograph
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/best-long-lasting-niche-perfumes')}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-1.5"
            >
              <span>View All Selections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <ArticleCard
            article={featured}
            onSelect={onSelectArticle}
            featured={true}
            isSaved={savedIds.includes(featured.id)}
            onToggleSave={onToggleSave}
          />
        </section>
      )}

      {/* Curated 10 Editorial Volumes Grid */}
      <section className="pt-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              The Archive
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
              Complete Editorial Volumes
            </h2>
          </div>
          <span className="text-xs text-zinc-400 font-mono">10 Monographs</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((art) => (
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
        title="Frequently Asked Questions About Haute Parfumerie"
        subtitle="Authoritative answers exploring fragrance concentration, artisanal formulation, and independent evaluation ethics."
      />
    </article>
  );
}

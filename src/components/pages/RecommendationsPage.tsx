import { Breadcrumbs } from '../Breadcrumbs';
import { FAQSection } from '../FAQSection';
import { PAGES_SEO } from '../../data/pagesContent';
import { Article } from '../../types';
import { ArticleCard } from '../ArticleCard';
import { Award, Sparkles, Star, ArrowRight, ShieldCheck } from 'lucide-react';

interface RecommendationsPageProps {
  articles: Article[];
  onNavigate: (url: string) => void;
  onSelectArticle: (article: Article) => void;
  savedIds: string[];
  onToggleSave: (id: string, e?: React.MouseEvent) => void;
}

export function RecommendationsPage({
  articles,
  onNavigate,
  onSelectArticle,
  savedIds,
  onToggleSave,
}: RecommendationsPageProps) {
  const seo = PAGES_SEO.recommendations;

  // Filter recommendations & buying guide articles
  const recommendedArticles = articles.filter((a) =>
    a.id === 'top-10-men-2026' ||
    a.id === 'women-long-lasting' ||
    a.id === 'summer-perfumes' ||
    a.id === 'perfume-gifting-occasions' ||
    a.id === 'affordable-perfumes-smell-expensive' ||
    a.id === 'choose-perfume-personality-lifestyle'
  );

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={seo.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <Award className="w-3.5 h-3.5 text-zinc-400" />
          <span>Curated Compendium Selections</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
          {seo.h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          When curating a high-end fragrance wardrobe, connoisseurs inevitably ask: <em>which niche perfumes are worth buying for my taste and budget?</em> To eliminate regretful blind buys, our critics have benchmarked the <strong>best long lasting niche perfumes</strong> on global skin trials. From authoritative spiced vetivers and smoky agarwood elixirs to ethereal crystalline ambers, each recommended flacon combines extraordinary craftsmanship with proven twelve-hour sillage.
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
              The Best Signature Scent for Men: Authority, Woods & Spices
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Selecting the <strong className="text-white">best signature scent for men</strong> requires balancing corporate versatility with charismatic evening presence. In modern perfumery, generic aquatic calone blasts have been replaced by structured mineral woods and spicy aromatics. <em>Dior Sauvage Elixir</em> redefines masculine projection by blending organic French lavender with dark nutmeg, licorice, and sandalwood—yielding a beastmode 14-hour skin persistence.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              For professionals desiring effortless daytime prestige, <em>Terre d’Hermès Eau Givrée</em> offers iced citron and flinty mineral vetiver that commands boardrooms without overwhelming colleagues. Alternatively, <em>Nishane Hacivat</em> utilizes Extrait concentration to project radiant pineapple, dry oakmoss, and clearwood across all four seasons. To understand the concentration differences between these flacons, see our guide on <button type="button" onClick={() => onNavigate('/concentration-guide')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">eau de parfum vs parfum</button>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              The Best Niche Perfumes for Women: Luminous Florals & Silken Ambers
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              In evaluating the <strong className="text-white">best niche perfumes for women</strong>, our panel looks beyond sweet caramel cliches to identify perfumes with multidimensional emotional resonance. <em>Baccarat Rouge 540 Extrait</em> by Maison Francis Kurkdjian remains the gold standard in crystalline luxury—infusing Moroccan bitter almond, grandiflorum jasmine, and ambergris into an ethereal silken aura that remains detectable on coats for weeks.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              For an intellectual, dramatic presence, Frédéric Malle’s <em>Portrait of a Lady</em> blends an unprecedented four hundred Turkish roses per bottle with Somalian incense, ripe blackcurrant, and fractionalized patchouli. If your heart yearns for romantic royal elegance, Parfums de Marly’s <em>Delina Exclusif</em> pairs tart lychee and damascena rose with bourbon vanilla and soft oud. For guidance on how these accords behave on skin, read our masterclass on <button type="button" onClick={() => onNavigate('/scent-notes')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">perfume notes explained</button>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Benchmarking the Best Long Lasting Niche Perfumes Across Budgets
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              A prevalent misconception is that you must spend $500 to enjoy artisanal performance. While royal flacons from Amouage, Kilian, and Creed offer exceptional presentation and rare resins, master perfumers regularly compose affordable gems. <em>Lalique Encre Noire</em> (composed by Nathalie Lorson) costs under $45 yet rivals $300 avant-garde niche fragrances in its smoky cypress-vetiver complexity.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Similarly, Zara’s master-perfumer collaborations like <em>Sand Desert At Sunset</em> (by Benoist Lapouza, creator of Kilian Angels’ Share) prove that warm cinnamon, chocolate, and tonka bean can be accessible. Regardless of price tier, applying our proven rules on <button type="button" onClick={() => onNavigate('/longevity-guide')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">how to make perfume last longer</button> will ensure your chosen scent endures from dawn until dusk.
            </p>
          </div>
        </div>

        {/* Sidebar Buying Matrix */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Selection Criteria
            </span>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">10+ Hour Skin Longevity</span>
                <span>All recommendations must sustain recognizable drydowns past 10 hours.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">Harmonious Sillage</span>
                <span>Projection that radiates elegantly without causing olfactory fatigue.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">Formula Authenticity</span>
                <span>High-grade botanical absolutes, sustainably sourced woods, and clean fixatives.</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/perfume-reviews')}
              className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs text-white uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Read Individual Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      </section>

      {/* Curated Recommendations Cards Grid */}
      <section className="pt-8 border-t border-zinc-800">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Curated Guides
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
              Top Ranked Buying Monographs
            </h2>
          </div>
          <span className="text-xs text-zinc-400 font-mono">
            {recommendedArticles.length} Curated Editions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedArticles.map((art) => (
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
        title="Frequently Asked Questions: Niche Perfume Recommendations"
        subtitle="Addressing budget considerations, signature scent versatility, and spray application etiquette."
      />
    </article>
  );
}

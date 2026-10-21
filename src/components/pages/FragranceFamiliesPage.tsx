import { Breadcrumbs } from '../Breadcrumbs';
import { FAQSection } from '../FAQSection';
import { PAGES_SEO } from '../../data/pagesContent';
import { Compass, Flame, Trees, Sparkles, Feather, ArrowRight } from 'lucide-react';

interface FragranceFamiliesPageProps {
  onNavigate: (url: string) => void;
}

export function FragranceFamiliesPage({ onNavigate }: FragranceFamiliesPageProps) {
  const seo = PAGES_SEO.fragranceFamilies;

  const families = [
    {
      id: 'woody-oriental',
      name: 'Woody Oriental (Woody Amber)',
      icon: Flame,
      keyNotes: 'Agarwood (Oud), Sandalwood, Frankincense, Benzoin, Patchouli',
      character: 'Opulent, regal, smoldering, and deeply comforting',
      bestFor: 'Autumn and winter galas, executive meetings, nocturnal romance',
    },
    {
      id: 'amber-vanilla',
      name: 'Amber Vanilla (Gourmand Oriental)',
      icon: Sparkles,
      keyNotes: 'Madagascar Vanilla, Tonka Bean, Praline, Amber Resin, Cinnamon',
      character: 'Sensual, intoxicating, warm, and delightfully velvety',
      bestFor: 'Cozy evenings, anniversary milestones, cold-weather dates',
    },
    {
      id: 'leather-fougère',
      name: 'Leather & Aromatic Fougère',
      icon: Trees,
      keyNotes: 'Birch Tar, Italian Suede, French Lavender, Oakmoss, Clary Sage',
      character: 'Authoritative, equestrian, crisp, and charismatic',
      bestFor: 'Tailored suits, executive boardrooms, year-round masculine poise',
    },
    {
      id: 'floral-chypre',
      name: 'Luminous Floral & Modern Chypre',
      icon: Feather,
      keyNotes: 'Turkish Damask Rose, Jasmine Grandiflorum, Florentine Orris, Bergamot',
      character: 'Radiant, romantic, elegant, and ethereal',
      bestFor: 'Springtime weddings, garden soirees, daytime professional wear',
    },
  ];

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={seo.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <Compass className="w-3.5 h-3.5 text-zinc-400" />
          <span>The Olfactory Wheel & Classification</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
          {seo.h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          When seeking an authentic signature scent, enthusiasts naturally wonder: <em>which fragrance family suits my taste?</em> In classical perfumery, all scents are organized around the Fragrance Wheel, with the <strong>woody oriental fragrance family</strong> reigning as the most prestigious genre. Whether your aesthetic aligns with smoldering agarwood, cozy amber gourmands, crisp aromatic fougères, or assertive leathers, understanding fragrance families allows you to select perfumes that harmonize effortlessly with your lifestyle, wardrobe, and climate.
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

      {/* Fragrance Families Interactive Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {families.map((fam) => {
          const IconComponent = fam.icon;
          return (
            <div
              key={fam.id}
              className="p-6 sm:p-7 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-4 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    {fam.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">
                    Signature Notes
                  </span>
                  <span className="text-zinc-300">{fam.keyNotes}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">
                    Aesthetic Character
                  </span>
                  <span className="text-zinc-300">{fam.character}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">
                    Best Setting
                  </span>
                  <span className="text-zinc-200 font-medium">{fam.bestFor}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Long-Form In-Depth Editorial Copy (600-900 words) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Exploring the Regal Woody Oriental Fragrance Family
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              The <strong className="text-white">woody oriental fragrance family</strong> (also designated as Woody Amber) stands as the quintessential embodiment of luxury perfumery. By marrying the spiritual, resinous warmth of Middle Eastern frankincense, myrrh, and benzoin with architectural forest woods—such as rare agarwood (oud), Mysore sandalwood, cedarwood, and earthy patchouli—perfumers construct scents of monumental dignity.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Unlike fresh citrus blends that disperse quickly into ambient air, woody oriental compositions are anchored by dense, slow-evaporating molecules. When applied to warm skin, they evolve gracefully over twelve to eighteen hours, releasing warm spices like cardamom, nutmeg, and clove before settling into a smoldering balsamic drydown. To understand how notes unfold, review our masterclass on <button type="button" onClick={() => onNavigate('/scent-notes')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">top middle and base notes</button>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              The Intoxicating Charm of Amber Vanilla Perfumes
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Within the broader oriental family, <strong className="text-white">amber vanilla perfumes</strong> have captured the devotion of modern connoisseurs. When composed with high-grade natural absolutes rather than cloying synthetic ethyl maltol, vanilla reveals a dark, smoky, and alcoholic complexity.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Iconic masterpieces like Kilian’s <em>Angels’ Share</em> pair oak-aged French cognac essence with cinnamon bark, praline, and Madagascar vanilla, evoking the warm atmosphere of a private Parisian club. Similarly, Tom Ford’s <em>Tobacco Vanille</em> infuses aromatic tobacco leaves with roasted tonka bean and dried fruits. If you seek fragrances that radiate throughout cold winter evenings, explore our curated list of the <button type="button" onClick={() => onNavigate('/recommendations')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">best long lasting niche perfumes</button>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Classic and Contemporary Leather Perfumes for Men
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              For gentlemen seeking an uncompromising statement of authority, <strong className="text-white">leather perfumes for men</strong> offer unmatched gravitas. Originating in the historic tannery guilds of sixteenth-century Grasse—where scented gloves were infused with civet, musk, and floral oils to mask animalic odors—leather fragrances evoke Russian birch tar, equestrian saddles, and fine calfskin suede.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Contemporary masculine leather perfumes balance smoke with crisp violet leaf, black tea, or saffron, resulting in a refined aroma that complements cashmere coats and tailored evening wear. To maximize the longevity of leather and resin accords, remember to follow our eight science-backed rules on <button type="button" onClick={() => onNavigate('/longevity-guide')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">how to make perfume last longer</button>.
            </p>
          </div>
        </div>

        {/* Sidebar Family Matcher */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Which Family Fits You?
            </span>

            <div className="space-y-3 text-xs text-zinc-400">
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">Executive & Minimalist</span>
                <span>Choose Fresh Aromatic or Dry Cedar Fougères for quiet boardroom confidence.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">Nocturnal & Mysterious</span>
                <span>Opt for Woody Oriental or Smoky Oud compositions that captivate after dark.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">Warm & Sensual</span>
                <span>Select Amber Vanilla and Spiced Gourmands that leave comforting silken trails.</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/concentration-guide')}
              className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs text-white uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Learn About Concentrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={seo.faqs}
        title="Frequently Asked Questions: Fragrance Families"
        subtitle="Clarifications on the Michael Edwards fragrance wheel, seasonal transitions, and personal scent profiling."
      />
    </article>
  );
}

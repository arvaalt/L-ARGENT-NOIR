import { Breadcrumbs } from '../Breadcrumbs';
import { FAQSection } from '../FAQSection';
import { PAGES_SEO } from '../../data/pagesContent';
import { Clock, ShieldAlert, Sparkles, ArrowRight, Check } from 'lucide-react';

interface LongevityGuidePageProps {
  onNavigate: (url: string) => void;
}

export function LongevityGuidePage({ onNavigate }: LongevityGuidePageProps) {
  const seo = PAGES_SEO.longevityGuide;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={seo.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          <span>Olfactory Bio-Chemistry Masterclass</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
          {seo.h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          If you have ever sprayed an expensive flacon only to wonder <em>why does my perfume fade, and how do I make it last longer?</em>, the answer lies in thermodynamic bio-chemistry. Scent fades because dry skin rapidly absorbs alcohol solvents down into pores, leaving delicate aroma oils stranded without surface lipids to anchor them. Learning <strong>how to make perfume last longer</strong> requires creating an artificial lipid barrier with squalane or ceramide balms, spraying arterial pulse points for thermal convection, and never rubbing your wrists together.
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
              The Biology of Evaporation: How Long Does Perfume Last on Skin?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Clients often ask our evaluators: <strong className="text-white">how long does perfume last</strong> on average? The answer depends on three interconnected variables: the concentration of pure fragrant oil, the ambient room temperature, and the moisture level of your stratum corneum. An Eau de Cologne (2–4% oil) evaporates in two hours; an Eau de Toilette (5–15%) endures four to six hours; while a pure Extrait de Parfum (20–40%) remains anchored for twelve to twenty-four hours.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              However, even a $400 flacon will evaporate prematurely if applied to parched dermis in winter. Dry skin acts like an arid sponge—drawing ethanol into dermal pores where scent molecules cannot radiate into the air. By understanding the <button type="button" onClick={() => onNavigate('/concentration-guide')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">difference between EDT and EDP</button>, you can match concentration to your day's schedule.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Eight Proven Rules on How to Make Perfume Last Longer All Day
            </h2>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-zinc-300 font-light">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <span className="text-xs uppercase tracking-widest text-zinc-200 font-semibold block">
                  Rule 1: Pre-Hydrate with Lipid Balms
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Apply an unscented botanical squalane oil, shea butter, or pure petrolatum to pulse points 3 minutes before spraying. Perfume oils bond with lipids, cutting evaporation rates in half.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <span className="text-xs uppercase tracking-widest text-zinc-200 font-semibold block">
                  Rule 2: Never Rub Your Wrists Together
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Friction generates instant localized heat spikes that shatter delicate <button type="button" onClick={() => onNavigate('/scent-notes')} className="text-zinc-200 underline hover:text-white cursor-pointer">top middle and base notes</button>, prematurely vaporizing sparkling bergamot and floral aldehydes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <span className="text-xs uppercase tracking-widest text-zinc-200 font-semibold block">
                  Rule 3: Target Arterial Pulse Points
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Spray the base of your throat (carotid artery), the dip of the clavicle, and the nape of your neck. Body heat acts like an ultrasonic diffuser, steadily radiating sillage throughout the day.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <span className="text-xs uppercase tracking-widest text-zinc-200 font-semibold block">
                  Rule 4: Mist Natural Cashmere and Wool Scarf Fibers
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Unlike human skin, natural woolen textiles and cashmere do not produce acidic sweat enzymes or sebum. Misting an autumn scarf can preserve heart and base notes for over 48 hours.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Selecting Perfumes That Last All Day: Molecular Weight & Bases
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              If your routine demands unrelenting endurance from morning boardrooms to midnight dinners, seek out <strong className="text-white">perfumes that last all day</strong> formulated with heavy fixatives. Fragrances anchored in natural agarwood, Somalian frankincense, oakmoss, and ambergris inherently resist vaporization.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Explore our verified selections of the <button type="button" onClick={() => onNavigate('/recommendations')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">best long lasting niche perfumes</button>, or discover how resinous accords in the <button type="button" onClick={() => onNavigate('/fragrance-families')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">woody oriental fragrance family</button> outperform light citrus colognes in longevity.
            </p>
          </div>
        </div>

        {/* Sidebar Quick Checklist */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Longevity Routine
            </span>
            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Shower with gentle, unfragranced soap.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Apply squalane oil to pulse points while skin is damp.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Apply 2-3 sprays of EDP or Extrait at 8 inches distance.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Allow mist to settle naturally without rubbing.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Store flacons away from bathroom humidity and sunlight.</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => onNavigate('/concentration-guide')}
              className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs text-white uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Concentration Ratios</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={seo.faqs}
        title="Frequently Asked Questions: Fragrance Longevity & Sillage"
        subtitle="Addressing common inquiries on skin moisture, olfactory fatigue (nose blindness), and fabric application."
      />
    </article>
  );
}

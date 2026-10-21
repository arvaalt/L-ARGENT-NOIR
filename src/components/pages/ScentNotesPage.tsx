import { Breadcrumbs } from '../Breadcrumbs';
import { FAQSection } from '../FAQSection';
import { PAGES_SEO } from '../../data/pagesContent';
import { NoteExplorer } from '../NoteExplorer';
import { Layers, Sparkles, ArrowRight } from 'lucide-react';

interface ScentNotesPageProps {
  onNavigate: (url: string) => void;
  selectedNote: string | null;
  onSelectNote: (note: string | null) => void;
}

export function ScentNotesPage({
  onNavigate,
  selectedNote,
  onSelectNote,
}: ScentNotesPageProps) {
  const seo = PAGES_SEO.scentNotes;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={seo.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <Layers className="w-3.5 h-3.5 text-zinc-400" />
          <span>Olfactory Chemistry Masterclass</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
          {seo.h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          When exploring fragrance chemistry, perfume lovers frequently ask: <em>what do top, heart, and base notes actually mean?</em> With <strong>perfume notes explained</strong> through molecular physics, fragrance is revealed as a chronological three-act symphony. Top notes are lightweight volatile aroma compounds that sparkle during the initial fifteen minutes; heart or middle notes form the emotional soul of the blend lasting three to five hours; and base notes are dense macromolecules that anchor the scent to human skin for twelve to twenty-four hours.
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
              Demystifying Top Middle and Base Notes in Modern Formulation
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              In nineteenth-century Grasse, master perfumer Jean Carles formalized the Olfactory Pyramid to prevent perfumes from collapsing into an overwhelming burst of scent that vanishes abruptly. By layering <strong className="text-white">top middle and base notes</strong>, perfumers engineer a controlled, staged evaporation curve.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              <strong>Act I: Top Notes (Head Accords)</strong> are composed of volatile monoterpenes—such as Calabrian bergamot, pink pepper, and aldehydes. Because their vapor pressure is high, they evaporate rapidly, introducing the aesthetic theme. <strong>Act II: Middle Notes (Heart Accords)</strong> take center stage as the citrus dissipates, revealing rich floral absolutes (Turkish rose, jasmine grandiflorum), spices, and green teas. <strong>Act III: Base Notes (Foundation)</strong> consist of heavy sesquiterpenes, resins, and synthetic fixatives (benzoin, sandalwood, ambroxan, and natural agarwood) that bond directly with skin lipids. If your skin is dry, read our guide on <button type="button" onClick={() => onNavigate('/how-to-make-perfume-last-longer')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">how to make perfume last longer</button> to prevent rapid evaporation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              What Is a Perfume Accord and How Do Master Noses Build Them?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              One of the most frequently asked questions in our ateliers is: <strong className="text-white">what is a perfume accord</strong>? In olfactory composition, an accord is the harmonious synthesis of two or more distinct aroma ingredients that meld together to create an entirely new, unified scent identity—analogous to a chord in music where individual notes produce a singular, beautiful harmony.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              For example, there is no single natural flower that produces the classic "amber" scent. Instead, the iconic amber accord is constructed by blending rich Madagascar vanilla, warm benzoin tears, and labdanum resin. Similarly, the classic chypre accord balances sparkling bergamot with floral labdanum and earthy oakmoss. To discover which accord profile suits your personality, explore our guide to the <button type="button" onClick={() => onNavigate('/woody-oriental-fragrance-family')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">woody oriental fragrance family</button>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Volatility Mechanics: How Concentration Alters the Note Progression
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              The speed at which notes transition is intimately tied to the ratio of perfume oil to denatured ethanol. In an Eau de Toilette with 10% oil, alcohol flashes off rapidly, carrying top notes far into the air. In an Extrait de Parfum featuring 30% pure oil, the heavier lipid matrix slows molecular diffusion, keeping middle and base notes anchored in intimate proximity.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              To learn more about oil ratios and how they influence the perception of heart accords, consult our masterclass on <button type="button" onClick={() => onNavigate('/eau-de-parfum-vs-parfum')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">eau de parfum vs parfum</button>, or read our reviews of the <button type="button" onClick={() => onNavigate('/best-long-lasting-niche-perfumes')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">best long lasting niche perfumes</button>.
            </p>
          </div>
        </div>

        {/* Sidebar Infographic Panel */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              The Olfactory Pyramid
            </span>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center justify-between text-zinc-200 font-medium mb-1">
                  <span>Top Notes (Head)</span>
                  <span className="font-mono text-zinc-500">15 – 30 Min</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Calabrian bergamot, lemon, mint, aldehydes, pink pepper. Highly volatile monoterpenes.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center justify-between text-zinc-200 font-medium mb-1">
                  <span>Heart Notes (Core)</span>
                  <span className="font-mono text-zinc-500">3 – 5 Hours</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Turkish damask rose, Egyptian jasmine, cardamom, oolong tea, lavender. Medium molecular mass.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center justify-between text-zinc-200 font-medium mb-1">
                  <span>Base Notes (Foundation)</span>
                  <span className="font-mono text-zinc-500">8 – 24+ Hours</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Agarwood (oud), Mysore sandalwood, bourbon vanilla, oakmoss, benzoin. Heavy fixative resins.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/perfume-reviews')}
              className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs text-white uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Read Flacon Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      </section>

      {/* Interactive Notes Explorer */}
      <NoteExplorer selectedNote={selectedNote} onSelectNote={onSelectNote} />

      {/* FAQ Section */}
      <FAQSection
        faqs={seo.faqs}
        title="Frequently Asked Questions: Perfume Notes & Accords"
        subtitle="Exploring the chemistry of volatility, synthetic aroma chemicals, and linear fragrance formulation."
      />
    </article>
  );
}

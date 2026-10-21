import { Breadcrumbs } from '../Breadcrumbs';
import { FAQSection } from '../FAQSection';
import { PAGES_SEO } from '../../data/pagesContent';
import { Layers, Droplets, Clock, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface ConcentrationGuidePageProps {
  onNavigate: (url: string) => void;
}

export function ConcentrationGuidePage({ onNavigate }: ConcentrationGuidePageProps) {
  const seo = PAGES_SEO.concentrationGuide;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={seo.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <Droplets className="w-3.5 h-3.5 text-zinc-400" />
          <span>Concentration & Solvent Architecture</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
          {seo.h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
          When examining luxury flacon labels, perfume lovers frequently ask: <em>what is the difference between EDT, EDP, and parfum?</em> In the debate of <strong>eau de parfum vs parfum</strong>, the distinction is fundamentally mathematical. Eau de Toilette (5%–15% oil) prioritizes explosive initial projection lasting four to six hours; Eau de Parfum (15%–20% oil) showcases velvety heart accords lasting eight to ten hours; while pure Parfum or Extrait (20%–40% oil) delivers intimate, magnetic skin cling that persists for fourteen to twenty-four hours.
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

      {/* Concentration Matrix Table */}
      <section className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-x-auto shadow-xl">
        <div className="min-w-[640px]">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block mb-4">
            The Official Fragrance Concentration Spectrum
          </span>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase tracking-wider">
                <th className="py-3 px-4">Designation</th>
                <th className="py-3 px-4">Oil Concentration</th>
                <th className="py-3 px-4">Alcohol Content</th>
                <th className="py-3 px-4">Average Longevity</th>
                <th className="py-3 px-4">Sillage Projection</th>
                <th className="py-3 px-4">Ideal Setting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 text-zinc-300 font-light">
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-3.5 px-4 font-medium text-white">Eau de Cologne (EDC)</td>
                <td className="py-3.5 px-4 font-mono text-zinc-400">2% – 4%</td>
                <td className="py-3.5 px-4 font-mono text-zinc-500">96% – 98%</td>
                <td className="py-3.5 px-4">2 Hours</td>
                <td className="py-3.5 px-4">Light Splash</td>
                <td className="py-3.5 px-4">Post-shower, warm gym mornings</td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors">
                <td className="py-3.5 px-4 font-medium text-white">Eau de Toilette (EDT)</td>
                <td className="py-3.5 px-4 font-mono text-zinc-400">5% – 15%</td>
                <td className="py-3.5 px-4 font-mono text-zinc-500">85% – 95%</td>
                <td className="py-3.5 px-4">4 – 6 Hours</td>
                <td className="py-3.5 px-4">Airy & Sparkling</td>
                <td className="py-3.5 px-4">Office daytime, casual spring/summer</td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors bg-zinc-900/20">
                <td className="py-3.5 px-4 font-medium text-white">Eau de Parfum (EDP)</td>
                <td className="py-3.5 px-4 font-mono text-zinc-200">15% – 20%</td>
                <td className="py-3.5 px-4 font-mono text-zinc-500">80% – 85%</td>
                <td className="py-3.5 px-4">8 – 10 Hours</td>
                <td className="py-3.5 px-4">Radiant & Noticeable</td>
                <td className="py-3.5 px-4">All-day signature, boardroom, dinner</td>
              </tr>
              <tr className="hover:bg-zinc-900/30 transition-colors bg-zinc-900/40">
                <td className="py-3.5 px-4 font-medium text-white">Parfum / Extrait</td>
                <td className="py-3.5 px-4 font-mono text-zinc-100 font-semibold">20% – 40%</td>
                <td className="py-3.5 px-4 font-mono text-zinc-500">60% – 80%</td>
                <td className="py-3.5 px-4 text-emerald-400 font-medium">14 – 24+ Hours</td>
                <td className="py-3.5 px-4">Velvety & Intimate Aura</td>
                <td className="py-3.5 px-4">Galas, romantic milestones, black tie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Long-Form In-Depth Editorial Copy (600-900 words) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              The Essential Difference Between EDT and EDP in Modern Parfumerie
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Understanding the <strong className="text-white">difference between EDT and EDP</strong> is crucial for any fragrance enthusiast. Many consumers mistakenly assume that an Eau de Parfum is simply an Eau de Toilette with less water. In reality, master perfumers in Grasse and Paris virtually always rebalance the formula when adapting a fragrance across concentrations.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Because an Eau de Toilette contains 85% to 95% denatured ethanol, the high alcohol ratio acts as a rocket fuel for volatile molecules. The initial thirty minutes of an EDT feel explosive, pushing zesty citrus and aldehyde top notes across the room. Conversely, an Eau de Parfum carries heavier botanical resinoids, which suppresses rapid evaporation and anchors the fragrance firmly in the heart notes—such as Turkish rose, iris, and spices—for up to ten hours. To learn how notes evaporate, read our masterclass on <button type="button" onClick={() => onNavigate('/scent-notes')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">top middle and base notes</button>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Extrait de Parfum Meaning: Pure Essence, Sillage & Cling
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              What is the true <strong className="text-white">extrait de parfum meaning</strong> in haute parfumerie? Also designated as Pure Parfum, Parfum Concentré, or Grand Extrait, this represents the absolute zenith of fragrance formulation. Containing between 20% and 40% pure fragrance compounds, extraits possess the lowest alcohol ratio in perfumery.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Curiously, an extrait does not usually fill an entire room the moment you enter. Because the heavy perfume oils do not evaporate rapidly into vapor, the sillage stays closer to the body—creating an alluring, magnetic scent bubble that reveals itself when someone leans in for an embrace. On textiles and hair, extraits can easily endure for several days. If you wish to experience legendary extraits, explore our reviews of the <button type="button" onClick={() => onNavigate('/recommendations')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">best long lasting niche perfumes</button>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Scientific Breakdown: Eau de Parfum vs Parfum Longevity Dynamics
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              When deciding between <strong className="text-white">eau de parfum vs parfum</strong>, consider your daily routine and sensory environment. In an enclosed office, an Eau de Parfum provides the ideal balance: prominent enough to project elegance during morning meetings without causing headaches for sensitive colleagues.
            </p>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              For evening celebrations, opera galas, or cold winter evenings, a Parfum or Extrait reigns supreme. The dense concentration of base fixatives—such as Madagascar vanilla, natural oud, and benzoin—resists cold air currents effortlessly. For optimal performance, always follow our guidelines on <button type="button" onClick={() => onNavigate('/longevity-guide')} className="text-zinc-200 underline hover:text-white cursor-pointer font-medium">how to make perfume last longer</button> by applying an unscented lipid moisturizer prior to spraying.
            </p>
          </div>
        </div>

        {/* Sidebar Practical Buying Tips */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Application Rules by Type
            </span>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">Eau de Toilette (EDT)</span>
                <span className="text-zinc-400">Apply 4–5 sprays generously to skin and clothing hems for refreshing daily projection.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">Eau de Parfum (EDP)</span>
                <span className="text-zinc-400">Apply 2–3 sprays to the sides of the neck and chest for all-day office performance.</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <span className="text-zinc-200 font-medium block">Extrait de Parfum</span>
                <span className="text-zinc-400">Apply 1–2 drops or sprays to pulse points. Extremely dense oil; a little goes a very long way.</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/fragrance-families')}
              className="w-full py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs text-white uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Fragrance Families</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={seo.faqs}
        title="Frequently Asked Questions: Fragrance Concentrations"
        subtitle="Exploring oil dilution ratios, projection differences, and formula reformulations between EDT and EDP."
      />
    </article>
  );
}

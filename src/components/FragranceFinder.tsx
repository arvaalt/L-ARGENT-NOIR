import { useState } from 'react';
import { Sparkles, X, ArrowRight, RotateCcw } from 'lucide-react';
import { Article } from '../types';

interface FragranceFinderProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export function FragranceFinder({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}: FragranceFinderProps) {
  const [step, setStep] = useState(1);
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [selectedIntensity, setSelectedIntensity] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);

  if (!isOpen) return null;

  const vibes = [
    { id: 'fresh', title: 'Crisp Citrus & Mineral Breeze', desc: 'Sparkling Italian bergamot, sea salt, neroli, iced tea' },
    { id: 'woody', title: 'Architectural Woods & Smoky Vetiver', desc: 'Smoky cedar, cypress, charred oak, earthy roots' },
    { id: 'oud', title: 'Rich Arabian Oud & Royal Resins', desc: 'Primeval agarwood, Somalian frankincense, dark amber' },
    { id: 'floral-amber', title: 'Eternal Florals & Spun Vanilla', desc: 'Turkish damascena rose, white jasmine, bourbon vanilla' },
  ];

  const intensities = [
    { id: 'intimate', title: 'Intimate Second Skin (EDT / Subtle EDP)', desc: 'Noticeable only within arm’s reach; perfect for offices' },
    { id: 'radiant', title: 'Radiant Magnetic Trail (EDP)', desc: 'Leaves a distinguished sillage trail as you move through rooms' },
    { id: 'beastmode', title: 'Monumental Extrait (14+ Hours)', desc: 'Maximum concentration oil density that clings past midnight' },
  ];

  const seasons = [
    { id: 'warm', title: 'High Summer & Warm Sun', desc: 'Need refreshing, non-cloying notes that resist high heat' },
    { id: 'cold', title: 'Crisp Autumn & Deep Winter', desc: 'Craving warm spices, boozy resins, and cashmere woods' },
    { id: 'all-year', title: 'Year-Round Signature Flacon', desc: 'Versatile masterpiece for day, night, office, and events' },
  ];

  const handleReset = () => {
    setStep(1);
    setSelectedVibe(null);
    setSelectedIntensity(null);
    setSelectedSeason(null);
  };

  // Compute recommendation
  const getRecommendation = () => {
    if (selectedVibe === 'oud') {
      return {
        article: articles.find((a) => a.id === 'best-oud-perfumes') || articles[0],
        perfume: 'Oud Satin Mood by Maison Francis Kurkdjian',
        rationale: 'Your affinity for royal resins and deep woods calls for the sublime alchemy of authentic agarwood and French rose.',
      };
    }
    if (selectedSeason === 'warm' || selectedVibe === 'fresh') {
      return {
        article: articles.find((a) => a.id === 'summer-perfumes') || articles[0],
        perfume: 'Wūlóng Chá by Nishane Istanbul',
        rationale: 'Cold oolong tea and sparkling Mediterranean citrus will deliver refreshing elegance without boiling off in warm ambient heat.',
      };
    }
    if (selectedIntensity === 'beastmode') {
      return {
        article: articles.find((a) => a.id === 'women-long-lasting') || articles[0],
        perfume: 'Baccarat Rouge 540 Extrait de Parfum',
        rationale: 'With a 35% concentration of pure perfume oils, this crystalline amber will anchor to your skin for 16+ hours effortlessly.',
      };
    }
    if (selectedVibe === 'woody') {
      return {
        article: articles.find((a) => a.id === 'top-10-men-2026') || articles[0],
        perfume: 'Dior Sauvage Elixir / Terre d’Hermès',
        rationale: 'Architectural vetiver and spiced lavender create an authoritative, grounded presence that commands quiet respect.',
      };
    }
    return {
      article: articles.find((a) => a.id === 'choose-perfume-personality-lifestyle') || articles[0],
      perfume: 'Another 13 by Le Labo Fragrances',
      rationale: 'A minimalist masterpiece of clean ambroxan and cedarwood that adapts uniquely to your personal skin chemistry.',
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0f1115] border border-zinc-700/80 shadow-2xl p-6 sm:p-8 text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-zinc-300" />
            <span className="font-display-luxury text-sm tracking-widest text-zinc-200">
              Olfactory Concierge
            </span>
          </div>

          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                onClick={handleReset}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
          <span className="font-mono text-zinc-300">Phase 0{step} / 03</span>
          <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-300 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Vibe */}
        {step === 1 && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-serif text-2xl text-white font-normal">
                What olfactory mood speaks to you today?
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Select your desired scent profile archetype.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {vibes.map((v) => (
                <button
                  key={v.id}
                  onClick={() => {
                    setSelectedVibe(v.id);
                    setStep(2);
                  }}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedVibe === v.id
                      ? 'border-zinc-300 bg-zinc-800'
                      : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-800/40'
                  }`}
                >
                  <span className="font-serif text-base text-zinc-100 block mb-1">
                    {v.title}
                  </span>
                  <span className="text-xs text-zinc-400 block leading-relaxed">
                    {v.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Intensity */}
        {step === 2 && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-serif text-2xl text-white font-normal">
                How much presence do you want to project?
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Balancing close-proximity intimacy with room-filling projection.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {intensities.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedIntensity(item.id);
                    setStep(3);
                  }}
                  className="w-full p-4 rounded-xl text-left border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-800/40 transition-all cursor-pointer"
                >
                  <span className="font-serif text-base text-zinc-100 block mb-1">
                    {item.title}
                  </span>
                  <span className="text-xs text-zinc-400 block leading-relaxed">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Season / Setting */}
        {step === 3 && !selectedSeason && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-serif text-2xl text-white font-normal">
                What season or environment are you dressing for?
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Ambient air temperature dictates molecular evaporation rates.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {seasons.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSeason(s.id)}
                  className="w-full p-4 rounded-xl text-left border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-800/40 transition-all cursor-pointer"
                >
                  <span className="font-serif text-base text-zinc-100 block mb-1">
                    {s.title}
                  </span>
                  <span className="text-xs text-zinc-400 block leading-relaxed">
                    {s.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 Completed: Final Recommendation */}
        {step === 3 && selectedSeason && (
          <div className="mt-6 space-y-6">
            <div className="p-6 rounded-xl bg-zinc-900/80 border border-zinc-700/80 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                <span>Bespoke Olfactory Prescription</span>
              </div>

              <div>
                <h4 className="font-serif text-2xl text-white font-normal">
                  {recommendation.perfume}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  {recommendation.rationale}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 block">
                    Recommended Reading
                  </span>
                  <span className="text-xs font-serif text-zinc-200">
                    {recommendation.article.title}
                  </span>
                </div>

                <button
                  onClick={() => {
                    onSelectArticle(recommendation.article);
                    onClose();
                  }}
                  className="px-4 py-2 rounded-lg bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Read Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

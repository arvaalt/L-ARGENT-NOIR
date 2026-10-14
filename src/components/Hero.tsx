import { Search, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/articles';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onOpenFinder: () => void;
}

export function Hero({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onOpenFinder,
}: HeroProps) {
  return (
    <section className="relative pt-12 pb-10 border-b border-zinc-800/80 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-zinc-700/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          {/* Unboxed Kicker */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-400 font-medium mb-3">
            <span>Haute Parfumerie Journal</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Vol. XIV Archive</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
            The Architecture of <span className="silver-gradient-text italic font-serif">Scent & Memory</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
            In-depth fragrance critiques, olfactory chemistry masterclasses, longevity benchmarks, and curated guides across Parisian, Arabian, and niche perfumerie.
          </p>

          {/* Interactive Search & Finder Control Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search notes, perfumes (e.g. Dior, Oud, Vanilla)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={onOpenFinder}
              className="px-5 py-2.5 rounded-xl bg-zinc-200 text-black hover:bg-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-zinc-700/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scent Concierge</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="mt-12 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer font-medium ${
                  isActive
                    ? 'bg-zinc-200 text-black shadow-sm font-semibold'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/60 border border-zinc-800'
                }`}
              >
                {cat.name}
                <span className={`ml-2 text-[10px] ${isActive ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

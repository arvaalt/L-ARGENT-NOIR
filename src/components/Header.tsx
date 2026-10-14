import { useState } from 'react';
import { Search, Bookmark, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: () => void;
  onOpenSearch: () => void;
  onOpenFinder: () => void;
  onSelectCategory: (categoryId: string) => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  currentSlug: string | null;
}

export function Header({
  onNavigateHome,
  onOpenSearch,
  onOpenFinder,
  onSelectCategory,
  savedCount,
  onOpenBookmarks,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0c0e]/90 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={onNavigateHome}
          className="group flex flex-col items-start text-left shrink-0 cursor-pointer focus:outline-none"
        >
          <span className="font-display-luxury text-xl sm:text-2xl font-bold tracking-[0.2em] text-white transition-opacity group-hover:opacity-80">
            L'ARGENT NOIR
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-400 font-sans -mt-1">
            Haute Parfumerie
          </span>
        </button>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-zinc-300">
          <button
            onClick={() => {
              onNavigateHome();
              onSelectCategory('all');
            }}
            className="hover:text-white transition-colors cursor-pointer py-1 border-b border-transparent hover:border-zinc-400"
          >
            Articles
          </button>
          <button
            onClick={() => {
              onNavigateHome();
              onSelectCategory('guides');
            }}
            className="hover:text-white transition-colors cursor-pointer py-1 border-b border-transparent hover:border-zinc-400"
          >
            Notes & Science
          </button>
          <button
            onClick={() => {
              onNavigateHome();
              onSelectCategory('men');
            }}
            className="hover:text-white transition-colors cursor-pointer py-1 border-b border-transparent hover:border-zinc-400"
          >
            Men
          </button>
          <button
            onClick={() => {
              onNavigateHome();
              onSelectCategory('women');
            }}
            className="hover:text-white transition-colors cursor-pointer py-1 border-b border-transparent hover:border-zinc-400"
          >
            Women
          </button>
          <button
            onClick={() => {
              onNavigateHome();
              onSelectCategory('luxury-oud');
            }}
            className="hover:text-white transition-colors cursor-pointer py-1 border-b border-transparent hover:border-zinc-400"
          >
            Oud & Niche
          </button>
        </nav>

        {/* Zone 3: Interactive Affordances (Search, Finder, Bookmarks) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Scent Finder CTA */}
          <button
            onClick={onOpenFinder}
            className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700 hover:border-zinc-400 bg-zinc-900/60 text-xs font-medium text-zinc-200 hover:text-white transition-all cursor-pointer"
            title="Launch Scent Finder Quiz"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span className="tracking-wide">Scent Finder</span>
          </button>

          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            aria-label="Search articles"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-mono text-zinc-500">Search ⌘K</span>
          </button>

          {/* Saved Articles */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Saved articles"
            title="View saved articles"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-200 text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1014] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm uppercase tracking-widest text-zinc-300">
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory('all');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-zinc-800/50 hover:text-white"
            >
              All Articles
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory('guides');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-zinc-800/50 hover:text-white"
            >
              Notes & Perfume Science
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory('men');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-zinc-800/50 hover:text-white"
            >
              Men’s Fragrances
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory('women');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-zinc-800/50 hover:text-white"
            >
              Women’s Fragrances
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory('luxury-oud');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-zinc-800/50 hover:text-white"
            >
              Oud & Niche
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                onSelectCategory('lifestyle-value');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-zinc-800/50 hover:text-white"
            >
              Gifting & Curations
            </button>
          </div>
          <button
            onClick={() => {
              onOpenFinder();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-zinc-800 text-white text-xs uppercase tracking-widest font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Launch Scent Finder
          </button>
        </div>
      )}
    </header>
  );
}

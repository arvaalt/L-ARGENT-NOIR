import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Clock, FileText } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? articles.filter((a) => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.productRecommendations.some(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.house.toLowerCase().includes(q) ||
              p.notes.top.some((n) => n.toLowerCase().includes(q)) ||
              p.notes.base.some((n) => n.toLowerCase().includes(q))
          )
        );
      })
    : articles;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0e1014] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by perfume, fragrance note (e.g. Oud, Iris), or topic..."
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-zinc-500 hover:text-white text-xs px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-500 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-zinc-500">
              <p className="text-sm">No masterclasses or perfumes found for "{query}".</p>
              <p className="text-xs mt-1 text-zinc-600">
                Try searching for "Oud", "Summer", "Longevity", "EDP", or "Dior".
              </p>
            </div>
          ) : (
            filtered.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="group p-3.5 rounded-xl bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-700/80 transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-900 shrink-0 border border-zinc-800 hidden sm:block">
                    <img
                      src={art.heroImage}
                      alt={art.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-400">
                      <span>{art.category}</span>
                      <span>·</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h4 className="font-serif text-sm sm:text-base text-white font-normal truncate group-hover:text-zinc-200 mt-0.5">
                      {art.title}
                    </h4>
                    <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-900 text-[11px] text-zinc-500 flex items-center justify-between">
          <span>{filtered.length} masterclass articles available</span>
          <span className="font-mono">ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}

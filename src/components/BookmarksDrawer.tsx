import { X, ArrowRight, Trash2, Bookmark } from 'lucide-react';
import { Article } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export function BookmarksDrawer({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}: BookmarksDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fade-in flex justify-end">
      <div className="w-full max-w-md bg-[#0d0e12] border-l border-zinc-800 h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-zinc-300" />
            <h3 className="font-display-luxury text-sm uppercase tracking-widest text-white">
              Personal Scent Library
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="py-20 text-center text-zinc-500 space-y-3">
              <Bookmark className="w-8 h-8 text-zinc-700 mx-auto" />
              <p className="text-sm text-zinc-400">Your library is currently empty.</p>
              <p className="text-xs text-zinc-600 max-w-xs mx-auto">
                Click the bookmark icon on any masterclass card to save it for offline reference.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="group p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                    <span>{art.category}</span>
                    <button
                      onClick={() => onRemoveBookmark(art.id)}
                      className="text-zinc-600 hover:text-red-400 p-1"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="font-serif text-base text-white hover:text-zinc-300 cursor-pointer transition-colors"
                  >
                    {art.title}
                  </h4>
                  <p className="text-xs text-zinc-500 line-clamp-2 mt-1">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">{art.readTime}</span>
                  <button
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="text-xs text-zinc-300 hover:text-white flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedArticles.length > 0 && (
          <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between text-xs text-zinc-400">
            <span>{savedArticles.length} articles bookmarked</span>
            <button
              onClick={onClearAll}
              className="text-zinc-500 hover:text-red-400 cursor-pointer"
            >
              Clear Library
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

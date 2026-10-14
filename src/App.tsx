import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { ArticleDetail } from './components/ArticleDetail';
import { NoteExplorer } from './components/NoteExplorer';
import { FragranceFinder } from './components/FragranceFinder';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { ARTICLES } from './data/articles';
import { Article } from './types';
import { Sparkles, SlidersHorizontal, BookOpen } from 'lucide-react';

export default function App() {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('argent_noir_bookmarks');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Synchronize routing with browser history
  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname;
      if (currentPath && currentPath.startsWith('/blog/')) {
        const found = ARTICLES.find((a) => a.slug === currentPath);
        if (found) {
          setCurrentArticle(found);
          return;
        }
      }
      setCurrentArticle(null);
    };

    // Initial load check
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Save bookmarks to localStorage
  const handleToggleSave = (articleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedIds((prev) => {
      const updated = prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId];
      try {
        localStorage.setItem('argent_noir_bookmarks', JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  const handleClearAllBookmarks = () => {
    setSavedIds([]);
    try {
      localStorage.removeItem('argent_noir_bookmarks');
    } catch {
      // ignore
    }
  };

  const handleSelectArticle = (article: Article) => {
    setCurrentArticle(article);
    window.history.pushState({}, '', article.slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentArticle(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered articles for home view
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'men' && article.category !== "Men's Parfumerie") return false;
        if (selectedCategory === 'women' && article.category !== "Women's Parfumerie") return false;
        if (selectedCategory === 'guides' && article.category !== 'Perfume Science & Notes') return false;
        if (selectedCategory === 'luxury-oud' && article.category !== 'Oud & Niche Collectibles') return false;
        if (selectedCategory === 'lifestyle-value' && article.category !== 'Curations & Gifting') return false;
      }

      // Note tag filter
      if (selectedNote) {
        const noteMatch =
          article.tags.some((t) => t.toLowerCase().includes(selectedNote.toLowerCase())) ||
          article.productRecommendations.some((p) =>
            p.notes.top.concat(p.notes.heart, p.notes.base).some((n) =>
              n.toLowerCase().includes(selectedNote.toLowerCase())
            )
          );
        if (!noteMatch) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.category.toLowerCase().includes(q) ||
          article.tags.some((t) => t.toLowerCase().includes(q)) ||
          article.productRecommendations.some(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.house.toLowerCase().includes(q)
          );
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedNote, searchQuery]);

  const savedArticlesList = useMemo(() => {
    return ARTICLES.filter((a) => savedIds.includes(a.id));
  }, [savedIds]);

  // Featured cover article (Article 1)
  const featuredArticle = ARTICLES[0];
  const gridArticles = filteredArticles.filter((a) => a.id !== featuredArticle.id || searchQuery || selectedCategory !== 'all' || selectedNote);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e2e4e9] flex flex-col font-sans selection:bg-zinc-700 selection:text-white">
      {/* Dynamic SEO Meta & Schema.org JSON-LD */}
      <SEOHead article={currentArticle} />

      {/* Global Header */}
      <Header
        onNavigateHome={handleNavigateHome}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFinder={() => setIsFinderOpen(true)}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
        savedCount={savedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        currentSlug={currentArticle ? currentArticle.slug : null}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentArticle ? (
          <ArticleDetail
            article={currentArticle}
            allArticles={ARTICLES}
            onBack={handleNavigateHome}
            onSelectArticle={handleSelectArticle}
            isSaved={savedIds.includes(currentArticle.id)}
            onToggleSave={() => handleToggleSave(currentArticle.id)}
          />
        ) : (
          <div className="space-y-12 pb-16">
            {/* Hero Showcase with Category Tabs */}
            <Hero
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onOpenFinder={() => setIsFinderOpen(true)}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              {/* Active Filter Pill Alert if Note or Search is active */}
              {(selectedNote || searchQuery) && (
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-zinc-400" />
                    <span>
                      Filtering by:{' '}
                      {selectedNote && <strong className="text-white">Note: {selectedNote} </strong>}
                      {searchQuery && <strong className="text-white">Query: "{searchQuery}"</strong>}
                    </span>
                    <span className="text-zinc-500">({filteredArticles.length} results)</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedNote(null);
                      setSearchQuery('');
                    }}
                    className="text-zinc-400 hover:text-white underline cursor-pointer"
                  >
                    Reset all filters
                  </button>
                </div>
              )}

              {/* Cover Feature Spotlight (when no search/sub-filter is applied) */}
              {selectedCategory === 'all' && !searchQuery && !selectedNote && (
                <section>
                  <div className="flex items-center justify-between mb-4 text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                      Featured Masterclass Edition
                    </span>
                    <span className="text-zinc-400">Editor's Selection</span>
                  </div>

                  <ArticleCard
                    article={featuredArticle}
                    onSelect={handleSelectArticle}
                    isSaved={savedIds.includes(featuredArticle.id)}
                    onToggleSave={(id, e) => handleToggleSave(id, e)}
                    featured={true}
                  />
                </section>
              )}

              {/* Masterclass Compendium Grid (All 10 Articles) */}
              <section>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium block">
                      Archival Compendium
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                      {selectedCategory === 'all'
                        ? 'The Complete 10 Masterclass Volumes'
                        : `${filteredArticles.length} Editorial Studies`}
                    </h2>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">
                    Showing {filteredArticles.length} of 10 Studies
                  </span>
                </div>

                {filteredArticles.length === 0 ? (
                  <div className="py-20 text-center text-zinc-500 bg-zinc-950/40 rounded-xl border border-zinc-900">
                    <BookOpen className="w-8 h-8 text-zinc-700 mx-auto mb-3" />
                    <p className="text-sm text-zinc-300">No articles match your exact filter combination.</p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedNote(null);
                        setSearchQuery('');
                      }}
                      className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 text-xs text-white uppercase tracking-wider font-medium hover:bg-zinc-700 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(selectedCategory === 'all' && !searchQuery && !selectedNote
                      ? gridArticles
                      : filteredArticles
                    ).map((art) => (
                      <ArticleCard
                        key={art.id}
                        article={art}
                        onSelect={handleSelectArticle}
                        isSaved={savedIds.includes(art.id)}
                        onToggleSave={(id, e) => handleToggleSave(id, e)}
                      />
                    ))}
                  </div>
                )}
              </section>

              {/* Olfactory Notes Compendium & Interactive Filter */}
              <NoteExplorer
                selectedNote={selectedNote}
                onSelectNote={(note) => setSelectedNote(note)}
              />
            </div>
          </div>
        )}
      </main>

      {/* Global Interactive Overlays */}
      <FragranceFinder
        isOpen={isFinderOpen}
        onClose={() => setIsFinderOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleSelectArticle}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleSelectArticle}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedArticles={savedArticlesList}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={(id) => handleToggleSave(id)}
        onClearAll={handleClearAllBookmarks}
      />

      {/* Global Footer */}
      <Footer
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          handleNavigateHome();
        }}
        onNavigateHome={handleNavigateHome}
      />
    </div>
  );
}

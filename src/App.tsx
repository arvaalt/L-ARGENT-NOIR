import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { FragranceFinder } from './components/FragranceFinder';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { ArticleDetail } from './components/ArticleDetail';

// Page components
import { HomePage } from './components/pages/HomePage';
import { PerfumeReviewsPage } from './components/pages/PerfumeReviewsPage';
import { ScentNotesPage } from './components/pages/ScentNotesPage';
import { LongevityGuidePage } from './components/pages/LongevityGuidePage';
import { RecommendationsPage } from './components/pages/RecommendationsPage';
import { ConcentrationGuidePage } from './components/pages/ConcentrationGuidePage';
import { FragranceFamiliesPage } from './components/pages/FragranceFamiliesPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

import { ARTICLES } from './data/articles';
import { PAGES_SEO } from './data/pagesContent';
import { Article } from './types';

// Map legacy / alternate paths to canonical clean URLs
const REDIRECT_MAP: Record<string, string> = {
  '/perfume-reviews': '/niche-perfume-reviews',
  '/scent-notes': '/perfume-notes-explained',
  '/longevity-guide': '/how-to-make-perfume-last-longer',
  '/recommendations': '/best-long-lasting-niche-perfumes',
  '/concentration-guide': '/eau-de-parfum-vs-parfum',
  '/fragrance-families': '/woody-oriental-fragrance-family',
  '/blog/top-10-best-perfumes-for-men-in-2026': '/niche-perfume-reviews/sauvage-elixir-dior',
  '/blog/best-long-lasting-perfumes-for-women': '/niche-perfume-reviews/baccarat-rouge-540-maison-francis-kurkdjian',
  '/blog/eau-de-parfum-vs-eau-de-toilette-difference': '/niche-perfume-reviews/bleu-de-chanel-edp-chanel',
  '/blog/best-perfumes-for-summer-fresh-fragrances': '/niche-perfume-reviews/wulong-cha-nishane',
  '/blog/best-perfumes-to-gift-special-occasions': '/niche-perfume-reviews/angels-share-kilian-paris',
  '/blog/beginners-guide-perfume-notes-top-middle-base': '/niche-perfume-reviews/shalimar-guerlain-paris',
  '/blog/how-to-make-perfume-last-longer-all-day': '/niche-perfume-reviews/molecule-01-escentric-molecules',
  '/blog/best-oud-perfumes-woody-luxurious-scents': '/niche-perfume-reviews/oud-wood-tom-ford',
  '/blog/best-affordable-perfumes-that-smell-expensive': '/niche-perfume-reviews/encre-noire-lalique',
  '/blog/how-to-choose-perfume-personality-lifestyle': '/niche-perfume-reviews/another-13-le-labo',
};

const VALID_STATIC_PATHS = new Set([
  '/',
  '/niche-perfume-reviews',
  '/perfume-notes-explained',
  '/how-to-make-perfume-last-longer',
  '/best-long-lasting-niche-perfumes',
  '/eau-de-parfum-vs-parfum',
  '/woody-oriental-fragrance-family',
]);

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [is404, setIs404] = useState<boolean>(false);
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

  // Resolve routing from window.location.pathname
  const resolveRoute = (path: string) => {
    // Normalize trailing slash (except root '/')
    let cleanPath = path;
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }

    // Check 301 client-side redirect map
    if (REDIRECT_MAP[cleanPath]) {
      const dest = REDIRECT_MAP[cleanPath];
      window.history.replaceState({}, '', dest);
      cleanPath = dest;
    }

    setCurrentPath(cleanPath);

    // Check if path matches an individual monograph
    const foundArticle = ARTICLES.find((a) => a.slug === cleanPath);
    if (foundArticle) {
      setCurrentArticle(foundArticle);
      setIs404(false);
      return;
    }

    setCurrentArticle(null);

    // Check if path matches static pillars
    if (VALID_STATIC_PATHS.has(cleanPath)) {
      setIs404(false);
    } else {
      setIs404(true);
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      resolveRoute(window.location.pathname || '/');
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Programmatic navigation
  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    resolveRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: Article) => {
    window.history.pushState({}, '', article.slug);
    setCurrentPath(article.slug);
    setCurrentArticle(article);
    setIs404(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Bookmark actions
  const handleToggleSave = (articleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedIds((prev) => {
      const updated = prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId];
      try {
        localStorage.setItem('argent_noir_bookmarks', JSON.stringify(updated));
      } catch {
        // ignore
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

  // Match SEO metadata
  const getPageMeta = () => {
    if (currentArticle) return null;
    if (currentPath === '/niche-perfume-reviews') return PAGES_SEO.perfumeReviews;
    if (currentPath === '/perfume-notes-explained') return PAGES_SEO.scentNotes;
    if (currentPath === '/how-to-make-perfume-last-longer') return PAGES_SEO.longevityGuide;
    if (currentPath === '/best-long-lasting-niche-perfumes') return PAGES_SEO.recommendations;
    if (currentPath === '/eau-de-parfum-vs-parfum') return PAGES_SEO.concentrationGuide;
    if (currentPath === '/woody-oriental-fragrance-family') return PAGES_SEO.fragranceFamilies;
    if (is404) {
      return {
        title: "Page Not Found | L'ARGENT NOIR",
        metaTitle: "Page Not Found | L'ARGENT NOIR",
        metaDescription: "The requested perfume monograph or fragrance guide was not found. Explore our luxury compendium.",
        canonicalPath: currentPath,
        h1: '404: Monograph Not Found',
        mainKeyword: 'haute parfumerie',
        relatedKeywords: ['luxury perfume compendium'],
        intent: 'Navigational',
        questionAnswered: 'Where can I find fragrance articles?',
        breadcrumbs: [{ name: 'Home', url: '/' }, { name: '404', url: currentPath }],
        faqs: [],
      };
    }
    return PAGES_SEO.home;
  };

  const savedArticlesList = ARTICLES.filter((a) => savedIds.includes(a.id));

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e2e4e9] flex flex-col font-sans selection:bg-zinc-700 selection:text-white">
      {/* Dynamic SEO Meta & JSON-LD */}
      <SEOHead pageMeta={getPageMeta()} article={currentArticle} />

      {/* 3-Zone Luxury Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFinder={() => setIsFinderOpen(true)}
        savedCount={savedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {is404 ? (
          <NotFoundPage onNavigate={handleNavigate} />
        ) : currentArticle ? (
          <ArticleDetail
            article={currentArticle}
            allArticles={ARTICLES}
            onBack={() => handleNavigate('/niche-perfume-reviews')}
            onSelectArticle={handleSelectArticle}
            isSaved={savedIds.includes(currentArticle.id)}
            onToggleSave={() => handleToggleSave(currentArticle.id)}
          />
        ) : currentPath === '/niche-perfume-reviews' ? (
          <PerfumeReviewsPage
            articles={ARTICLES}
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />
        ) : currentPath === '/perfume-notes-explained' ? (
          <ScentNotesPage
            onNavigate={handleNavigate}
            selectedNote={selectedNote}
            onSelectNote={setSelectedNote}
          />
        ) : currentPath === '/how-to-make-perfume-last-longer' ? (
          <LongevityGuidePage onNavigate={handleNavigate} />
        ) : currentPath === '/best-long-lasting-niche-perfumes' ? (
          <RecommendationsPage
            articles={ARTICLES}
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />
        ) : currentPath === '/eau-de-parfum-vs-parfum' ? (
          <ConcentrationGuidePage onNavigate={handleNavigate} />
        ) : currentPath === '/woody-oriental-fragrance-family' ? (
          <FragranceFamiliesPage onNavigate={handleNavigate} />
        ) : (
          <HomePage
            articles={ARTICLES}
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
            onOpenFinder={() => setIsFinderOpen(true)}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />
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

      {/* Global Semantic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

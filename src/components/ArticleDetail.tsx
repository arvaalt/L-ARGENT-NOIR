import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Clock,
  Calendar,
  Check,
  ChevronDown,
  Sparkles,
  Award,
  Layers,
  Copy,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
}

export function ArticleDetail({
  article,
  allArticles,
  onBack,
  onSelectArticle,
  isSaved,
  onToggleSave,
}: ArticleDetailProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTocId, setActiveTocId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  // Scroll and reading progress listener
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }

      // Check current section for Table of Contents highlight
      const sections = article.tableOfContents.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveTocId(article.tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const handleCopyLink = () => {
    const fullUrl = window.location.origin + article.slug;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedLink(true);
      setShowShareToast(true);
      setTimeout(() => {
        setCopiedLink(false);
        setShowShareToast(false);
      }, 3000);
    });
  };

  const handleShareSocial = (platform: 'twitter' | 'whatsapp' | 'facebook' | 'pinterest') => {
    const url = encodeURIComponent(window.location.origin + article.slug);
    const text = encodeURIComponent(`Masterclass: ${article.title}`);

    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'pinterest') {
      shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  // Find related articles
  const relatedArticles = allArticles.filter((a) =>
    article.relatedSlugs.includes(a.slug) || (a.category === article.category && a.id !== article.id)
  ).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#0b0c0e] text-[#e2e4e9]">
      {/* Reading Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-zinc-400 via-slate-200 to-white transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Copy Link Toast Notification */}
      {showShareToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white shadow-2xl animate-fade-in text-xs uppercase tracking-wider font-medium">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Article link copied to clipboard</span>
        </div>
      )}

      {/* Hero Header Area */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="uppercase tracking-widest font-medium">Back to Compendium</span>
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-zinc-400 font-sans">
            <span onClick={onBack} className="cursor-pointer hover:text-zinc-300">Journal</span>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-zinc-400">{article.category}</span>
          </nav>
        </div>

        {/* Clean unboxed category kicker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <span>{article.category}</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            {article.readTime}
          </span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            {article.publishedDate}
          </span>
        </div>

        {/* Article Headline */}
        <h1 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight tracking-tight max-w-4xl">
          {article.title}
        </h1>

        {/* Excerpt / Lead */}
        <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl font-light">
          {article.excerpt}
        </p>

        {/* Author Byline & Social Actions Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700 flex items-center justify-center font-display-luxury text-sm font-bold text-zinc-200">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{article.author.name}</p>
              <p className="text-xs text-zinc-400">{article.author.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(article.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                isSaved
                  ? 'border-zinc-500 bg-zinc-800 text-white'
                  : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white text-white' : ''}`} />
              <span>{isSaved ? 'Saved to Library' : 'Save Article'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
              title="Copy share link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="mt-8 relative rounded-xl overflow-hidden border border-zinc-800/90 shadow-2xl bg-zinc-950">
          <img
            src={article.heroImage}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[520px] object-cover object-center"
          />
          <div className="p-3 text-[11px] text-zinc-400 bg-zinc-950/90 border-t border-zinc-900 flex items-center justify-between">
            <span>Fig. 1.0 — {article.imageAlt}</span>
            <span className="uppercase tracking-widest text-zinc-400 font-mono">Haute Parfumerie Archive</span>
          </div>
        </div>

        {/* Main Content Layout with Sticky Table of Contents */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Table of Contents Column (Desktop Sticky) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block mb-4">
                Table of Contents
              </span>
              <nav className="space-y-2.5 text-xs">
                {article.tableOfContents.map((item, idx) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1 transition-colors leading-relaxed ${
                      activeTocId === item.id
                        ? 'text-white font-medium pl-2 border-l border-zinc-300'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span className="text-zinc-400 mr-2 font-mono">0{idx + 1}.</span>
                    {item.title}
                  </a>
                ))}
              </nav>

              {/* Quick Key Takeaways in TOC */}
              <div className="mt-8 pt-6 border-t border-zinc-900">
                <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block mb-3">
                  Essential Takeaways
                </span>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {article.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-400 font-bold">›</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Editorial Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Mobile Table of Contents Accordion */}
            <div className="lg:hidden p-5 rounded-lg bg-zinc-950 border border-zinc-800">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-3">
                In this masterclass
              </span>
              <ul className="space-y-2 text-xs text-zinc-400">
                {article.tableOfContents.map((item, idx) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-white flex items-center gap-2">
                      <span className="font-mono text-zinc-400">0{idx + 1}.</span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Editorial Body Sections */}
            {article.sections.map((section, sIdx) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                    {p}
                  </p>
                ))}

                {section.quote && (
                  <div className="my-6 p-6 rounded-lg bg-zinc-900/60 border border-zinc-800 text-center sm:text-left space-y-2">
                    <p className="font-serif italic text-base sm:text-lg text-zinc-200">
                      "{section.quote.text}"
                    </p>
                    <p className="text-xs uppercase tracking-widest text-zinc-400">
                      — {section.quote.author}
                    </p>
                  </div>
                )}

                {section.tip && (
                  <div className="my-6 p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-1">
                        Master Evaluator Tip
                      </span>
                      <p className="text-xs text-zinc-400 leading-relaxed">{section.tip}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Curated Product Recommendations Section */}
            {article.productRecommendations.length > 0 && (
              <section id="curated-perfume-selections" className="scroll-mt-24 space-y-8 pt-8 border-t border-zinc-800">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
                    Curated Olfactory Standards
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                    Featured Flacons & Fragrance Profiles
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                    Evaluated by our master panel for molecular balance, longevity, sillage diffusion, and formulation pedigree.
                  </p>
                </div>

                <div className="space-y-6">
                  {article.productRecommendations.map((prod, idx) => (
                    <div
                      key={idx}
                      className="p-6 sm:p-8 rounded-xl bg-zinc-950/90 border border-zinc-800 hover:border-zinc-700 transition-colors space-y-6"
                    >
                      {/* Product Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-4">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                            {prod.house} · {prod.concentration}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mt-1">
                            {prod.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-zinc-400">
                            {prod.priceTier}
                          </span>
                          <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700/80 text-xs text-zinc-200 font-medium flex items-center gap-1">
                            ★ {prod.rating}
                          </span>
                        </div>
                      </div>

                      {/* Olfactory Pyramid Breakdown */}
                      <div>
                        <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block mb-3 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-zinc-400" />
                          Olfactory Pyramid Notes
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/80">
                            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                              Top (Opening)
                            </span>
                            <p className="text-zinc-200 leading-normal">{prod.notes.top.join(', ')}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/80">
                            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                              Heart (Body)
                            </span>
                            <p className="text-zinc-200 leading-normal">{prod.notes.heart.join(', ')}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/80">
                            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                              Base (Drydown)
                            </span>
                            <p className="text-zinc-200 leading-normal">{prod.notes.base.join(', ')}</p>
                          </div>
                        </div>
                      </div>

                      {/* Specs Row */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                        <div>
                          <span className="text-zinc-400 block">Longevity</span>
                          <span className="text-zinc-200 font-medium">{prod.longevityScore}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 block">Sillage</span>
                          <span className="text-zinc-200 font-medium">{prod.sillage}</span>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <span className="text-zinc-400 block">Best Occasion</span>
                          <span className="text-zinc-200 font-medium truncate block">{prod.bestFor}</span>
                        </div>
                      </div>

                      {/* Pros and Cons Matrix */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-900 text-xs">
                        <div className="space-y-2">
                          <span className="text-emerald-400 uppercase tracking-widest font-semibold text-[10px] block">
                            Pros & Strengths
                          </span>
                          <ul className="space-y-1.5">
                            {prod.pros.map((pro, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 text-zinc-300">
                                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <span className="text-zinc-400 uppercase tracking-widest font-semibold text-[10px] block">
                            Considerations
                          </span>
                          <ul className="space-y-1.5">
                            {prod.cons.map((con, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2 text-zinc-400">
                                <span className="text-zinc-400 font-mono mt-0.5">―</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Evaluator Verdict */}
                      <div className="pt-4 border-t border-zinc-900 text-xs flex items-start gap-2 text-zinc-400">
                        <Award className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                        <p>
                          <strong className="text-zinc-200 font-medium">Curator Verdict: </strong>
                          {prod.verdict}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interactive FAQs Accordion Section */}
            {article.faqs.length > 0 && (
              <section id="frequently-asked-questions" className="scroll-mt-24 pt-8 border-t border-zinc-800 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
                    Expert Clarifications
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {article.faqs.map((faq, fIdx) => {
                    const isOpen = openFaqIndex === fIdx;
                    return (
                      <div
                        key={fIdx}
                        className="rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/40 transition-colors"
                        >
                          <span className="font-serif text-base sm:text-lg text-zinc-100 font-normal">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-white' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-zinc-400 border-t border-zinc-900 leading-relaxed font-light">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Social Share & Discussion Bar */}
            <div className="pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium mr-2">
                  Share Journal:
                </span>
                <button
                  onClick={() => handleShareSocial('twitter')}
                  className="px-3 py-1.5 rounded border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                >
                  X / Twitter
                </button>
                <button
                  onClick={() => handleShareSocial('whatsapp')}
                  className="px-3 py-1.5 rounded border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => handleShareSocial('pinterest')}
                  className="px-3 py-1.5 rounded border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                >
                  Pinterest
                </button>
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>

              <button
                onClick={onBack}
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-1.5"
              >
                <span>Back to All 10 Editorials</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles Grid */}
        {relatedArticles.length > 0 && (
          <div className="mt-20 pt-12 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
                  Curated Companions
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                  Related Olfactory Studies
                </h3>
              </div>
              <button
                onClick={onBack}
                className="hidden sm:inline-flex items-center gap-1 text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
              >
                <span>View Full Archive</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="group cursor-pointer rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 p-4 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900 mb-4">
                    <img
                      src={rel.heroImage}
                      alt={rel.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-400">
                      {rel.category} · {rel.readTime}
                    </div>
                    <h4 className="font-serif text-lg text-white font-normal mt-1.5 line-clamp-2 group-hover:text-zinc-200">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-900 text-xs font-medium text-zinc-300 group-hover:text-white flex items-center justify-between">
                    <span>Read Study</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

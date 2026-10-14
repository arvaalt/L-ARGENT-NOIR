import React, { useState } from 'react';
import { Bookmark, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  isSaved?: boolean;
  onToggleSave?: (articleId: string, e: React.MouseEvent) => void;
  featured?: boolean;
}

export function ArticleCard({
  article,
  onSelect,
  isSaved = false,
  onToggleSave,
  featured = false,
}: ArticleCardProps) {
  const [imageError, setImageError] = useState(false);

  if (featured) {
    return (
      <article
        onClick={() => onSelect(article)}
        className="group relative cursor-pointer grid grid-cols-1 lg:grid-cols-12 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 overflow-hidden shadow-2xl"
      >
        {/* Image Column */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden bg-zinc-900">
          {!imageError ? (
            <img
              src={article.heroImage}
              alt={article.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 p-8 text-center text-zinc-500">
              <span className="font-display-luxury text-lg text-zinc-400">L'ARGENT NOIR</span>
              <p className="text-xs mt-2">{article.title}</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent lg:hidden" />
        </div>

        {/* Content Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 tracking-wider uppercase font-medium">
              <span>{article.category}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-zinc-500" />
                {article.readTime}
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight group-hover:text-zinc-200 transition-colors">
              {article.title}
            </h2>

            {/* Excerpt */}
            <p className="mt-4 text-sm sm:text-base text-zinc-400 line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Key takeaway preview */}
            <div className="mt-6 pt-6 border-t border-zinc-800/70 hidden sm:block">
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                Executive Highlight
              </span>
              <p className="text-xs text-zinc-300 italic">
                "{article.keyTakeaways[0]}"
              </p>
            </div>
          </div>

          {/* Footer Action Strip */}
          <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-zinc-300 font-medium group-hover:text-white transition-colors">
              Read Masterclass
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>

            {onToggleSave && (
              <button
                type="button"
                onClick={(e) => onToggleSave(article.id, e)}
                aria-label={isSaved ? 'Remove bookmark' : 'Bookmark article'}
                className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer"
              >
                <Bookmark
                  className={`w-4 h-4 ${isSaved ? 'fill-zinc-300 text-zinc-300' : ''}`}
                />
              </button>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(article)}
      className="group relative cursor-pointer flex flex-col rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 overflow-hidden hover:-translate-y-1 shadow-lg"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
        {!imageError ? (
          <img
            src={article.heroImage}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 p-6 text-center text-zinc-500">
            <span className="font-display-luxury text-sm text-zinc-400">L'ARGENT NOIR</span>
            <p className="text-xs mt-2 line-clamp-1">{article.title}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent opacity-80" />

        {/* Quick Bookmark Button */}
        {onToggleSave && (
          <button
            type="button"
            onClick={(e) => onToggleSave(article.id, e)}
            aria-label={isSaved ? 'Remove bookmark' : 'Bookmark article'}
            className="absolute top-3 right-3 p-2 rounded-full bg-zinc-900/80 backdrop-blur-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer border border-zinc-700/50 shadow-md"
          >
            <Bookmark
              className={`w-3.5 h-3.5 ${isSaved ? 'fill-zinc-200 text-zinc-200' : ''}`}
            />
          </button>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Unboxed Metadata */}
          <div className="flex items-center gap-2 text-[11px] text-zinc-400 tracking-wider uppercase font-medium">
            <span>{article.category}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{article.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="mt-3 font-serif text-xl sm:text-2xl font-normal text-white leading-snug group-hover:text-zinc-200 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Card Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            {article.publishedDate}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-zinc-300 group-hover:text-white transition-colors">
            Read
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
}

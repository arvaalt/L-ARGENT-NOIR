import React, { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="mt-20 border-t border-zinc-900 bg-[#090a0c] text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="text-left font-display-luxury text-xl font-bold tracking-[0.25em] text-white hover:opacity-90 cursor-pointer block"
            >
              L'ARGENT NOIR
            </button>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              An independent fine fragrance journal and luxury perfume compendium dedicated to the art, chemical architecture, and cultural heritage of haute parfumerie.
            </p>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              Grasse · Paris · Dubai · London
            </div>
          </div>

          {/* Core Masterclass Guides */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-white font-semibold block">
              Editorial Guides
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Perfume Blog & Articles
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/niche-perfume-reviews')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Niche Perfume Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/perfume-notes-explained')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Perfume Notes Explained
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/how-to-make-perfume-last-longer')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How to Make Perfume Last Longer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/best-long-lasting-niche-perfumes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Best Long Lasting Niche Perfumes
                </button>
              </li>
            </ul>
          </div>

          {/* New Olfactory Guides */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-white font-semibold block">
              Classification
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/eau-de-parfum-vs-parfum')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Eau de Parfum vs Parfum
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/woody-oriental-fragrance-family')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Woody Oriental Fragrance Family
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/blog/best-oud-perfumes-woody-luxurious-scents')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Oud Perfume Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/blog/top-10-best-perfumes-for-men-in-2026')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Best Perfumes for Men 2026
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Gazette Subscription */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-white font-semibold block">
              The Olfactory Gazette
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Receive quarterly private editions covering rare harvests, formulation retrospectives, and niche flacon releases.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2 flex items-center gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-zinc-600 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 rounded-lg bg-zinc-200 text-black hover:bg-white text-xs font-medium uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <span>Join</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                <Check className="w-3.5 h-3.5" />
                Welcome to L'ARGENT NOIR Gazette.
              </p>
            )}
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="mt-16 pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} L'ARGENT NOIR. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button type="button" onClick={() => onNavigate('/')} className="hover:text-zinc-200 cursor-pointer">
              Haute Parfumerie
            </button>
            <button type="button" onClick={() => onNavigate('/perfume-notes-explained')} className="hover:text-zinc-200 cursor-pointer">
              Olfactory Index
            </button>
            <button type="button" onClick={() => onNavigate('/how-to-make-perfume-last-longer')} className="hover:text-zinc-200 cursor-pointer">
              Longevity Science
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

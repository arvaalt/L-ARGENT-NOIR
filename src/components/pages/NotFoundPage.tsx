import { Compass, ArrowRight, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (url: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const sections = [
    { title: 'Haute Parfumerie Compendium', url: '/', anchor: 'return to the home compendium' },
    { title: 'Niche Perfume Reviews', url: '/niche-perfume-reviews', anchor: 'read honest niche perfume reviews' },
    { title: 'Perfume Notes Explained', url: '/perfume-notes-explained', anchor: 'explore top middle and base notes' },
    { title: 'How to Make Perfume Last Longer', url: '/how-to-make-perfume-last-longer', anchor: 'master all-day perfume longevity' },
    { title: 'Best Long Lasting Niche Perfumes', url: '/best-long-lasting-niche-perfumes', anchor: 'discover best long lasting niche perfumes' },
    { title: 'Eau de Parfum vs Parfum', url: '/eau-de-parfum-vs-parfum', anchor: 'understand eau de parfum vs parfum' },
    { title: 'Woody Oriental Fragrance Family', url: '/woody-oriental-fragrance-family', anchor: 'explore the woody oriental fragrance family' },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-xs text-zinc-400">
        <Compass className="w-3.5 h-3.5" />
        <span>404 — Olfactory Monograph Not Found</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-5xl text-white font-normal">
        The Requested Scent Profile Has Evaporated
      </h1>

      <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
        The monograph or page you are attempting to access may have been relocated or archived. Please navigate to one of our primary editorial guides below.
      </p>

      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
        {sections.map((sec) => (
          <button
            key={sec.url}
            type="button"
            onClick={() => onNavigate(sec.url)}
            className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-center justify-between group cursor-pointer"
          >
            <div>
              <span className="font-serif text-sm text-white block">{sec.title}</span>
              <span className="text-[11px] text-zinc-500 capitalize">{sec.anchor}</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>

      <div className="pt-8">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-200 text-black hover:bg-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return to Haute Parfumerie Journal</span>
        </button>
      </div>
    </article>
  );
}

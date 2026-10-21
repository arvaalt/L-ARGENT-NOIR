import { BookOpen, ArrowRight } from 'lucide-react';

export interface RelatedLink {
  title: string;
  description: string;
  url: string;
  anchorText: string;
}

interface RelatedReadingProps {
  links: RelatedLink[];
  onNavigate: (url: string) => void;
}

export function RelatedReading({ links, onNavigate }: RelatedReadingProps) {
  if (!links || links.length === 0) return null;

  return (
    <aside aria-label="Related reading" className="my-16 pt-12 border-t border-zinc-800/80">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
          <span>Curated Compendium Links</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-2">
          Related Reading & Olfactory Studies
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Deepen your connoisseurship through our interconnected fragrance masterclasses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block mb-2">
                Study 0{idx + 1}
              </span>
              <h3 className="font-serif text-lg text-white font-normal group-hover:text-zinc-200 transition-colors">
                {link.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-light">
                {link.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              <button
                type="button"
                onClick={() => onNavigate(link.url)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer group-hover:underline"
              >
                <span>{link.anchorText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (url: string) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs text-zinc-400 font-sans">
      <ol className="flex items-center space-x-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center space-x-2">
              {index === 0 ? (
                <button
                  type="button"
                  onClick={() => onNavigate(item.url)}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Return to Home"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                </button>
              ) : isLast ? (
                <span className="text-zinc-200 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate(item.url)}
                  className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              )}

              {!isLast && (
                <ChevronRight className="w-3 h-3 text-zinc-600 shrink-0" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

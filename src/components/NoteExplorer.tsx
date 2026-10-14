import { Sparkles, Layers } from 'lucide-react';
import { FRAGRANCE_NOTES_LIST } from '../data/articles';

interface NoteExplorerProps {
  selectedNote: string | null;
  onSelectNote: (noteName: string | null) => void;
}

export function NoteExplorer({ selectedNote, onSelectNote }: NoteExplorerProps) {
  return (
    <section className="my-16 p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
            <Layers className="w-3.5 h-3.5 text-zinc-400" />
            <span>Olfactory Materia Medica</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1.5">
            The Notes Compendium
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
            Select a raw botanical extract or molecular fixative to filter our masterclasses and product formulas.
          </p>
        </div>

        {selectedNote && (
          <button
            onClick={() => onSelectNote(null)}
            className="text-xs text-zinc-400 hover:text-white uppercase tracking-wider underline cursor-pointer"
          >
            Clear Note Filter
          </button>
        )}
      </div>

      {/* Note Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        {FRAGRANCE_NOTES_LIST.map((note) => {
          const isSelected = selectedNote?.toLowerCase() === note.name.toLowerCase();
          return (
            <button
              key={note.name}
              onClick={() => onSelectNote(isSelected ? null : note.name)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'border-zinc-300 bg-zinc-900 shadow-md ring-1 ring-zinc-400'
                  : 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                <span>{note.family}</span>
                {isSelected && <Sparkles className="w-3 h-3 text-zinc-200" />}
              </div>
              <h4 className="font-serif text-base text-white font-normal">
                {note.name}
              </h4>
              <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                {note.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

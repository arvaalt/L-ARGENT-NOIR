import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Expert insights addressing common inquiries on fragrance notes, longevity, and formulation ethics.',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className="my-16 pt-12 border-t border-zinc-800/80" aria-labelledby="faq-heading">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
          <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
          <span>Curator Clarifications</span>
        </div>
        <h2 id="faq-heading" className="font-serif text-2xl sm:text-3xl text-white font-normal mt-2">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl bg-zinc-950/70 border border-zinc-800/90 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
              >
                <span className="font-serif text-base sm:text-lg text-zinc-100 font-normal">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-400 border-t border-zinc-900 leading-relaxed font-light"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

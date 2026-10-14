import { useEffect } from 'react';
import { Article } from '../types';

interface SEOProps {
  article?: Article | null;
  siteName?: string;
}

export function SEOHead({ article }: SEOProps) {
  useEffect(() => {
    const siteTitle = "L'ARGENT NOIR — Haute Parfumerie Journal & Fragrance Compendium";
    const defaultDesc =
      "Discover the art of fine fragrance. In-depth perfume reviews, scent note masterclasses, longevity guides, and curated recommendations in haute parfumerie.";

    const title = article ? article.metaTitle : siteTitle;
    const desc = article ? article.metaDescription : defaultDesc;

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);

    // Schema.org Structured Data
    const existingScript = document.getElementById('perfume-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'perfume-jsonld';
    script.type = 'application/ld+json';

    if (article) {
      const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription,
        image: article.heroImage,
        datePublished: article.publishedDate,
        dateModified: article.updatedDate,
        author: {
          '@type': 'Person',
          name: article.author.name,
          jobTitle: article.author.title,
        },
        publisher: {
          '@type': 'Organization',
          name: "L'ARGENT NOIR",
          logo: {
            '@type': 'ImageObject',
            url: window.location.origin + '/favicon.ico',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': window.location.origin + article.slug,
        },
      };
      script.textContent = JSON.stringify(articleJsonLd);
    } else {
      const siteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: "L'ARGENT NOIR",
        url: window.location.origin,
        description: defaultDesc,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${window.location.origin}/?search={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };
      script.textContent = JSON.stringify(siteJsonLd);
    }

    document.head.appendChild(script);

    return () => {
      // clean up if needed
    };
  }, [article]);

  return null;
}

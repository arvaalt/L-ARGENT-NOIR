import { useEffect } from 'react';
import { Article, PageMeta } from '../types';

interface SEOProps {
  pageMeta?: PageMeta | null;
  article?: Article | null;
}

export function SEOHead({ pageMeta, article }: SEOProps) {
  useEffect(() => {
    const siteName = "L'ARGENT NOIR";
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://ais-pre-pa6dhaaajptpkebllww2yj-701409644146.asia-northeast1.run.app';

    let title = "Haute Parfumerie Journal | L'ARGENT NOIR";
    let desc = "Explore haute parfumerie through our fine fragrance journal. Uncover honest evaluations, olfactory chemistry, and rare flacons tested on skin. Read now.";
    let canonical = origin + '/';
    let ogImage = origin + '/images/haute-parfumerie-flacon-hero.webp';

    if (pageMeta) {
      title = pageMeta.metaTitle.endsWith(siteName) ? pageMeta.metaTitle : `${pageMeta.metaTitle} | ${siteName}`;
      desc = pageMeta.metaDescription;
      canonical = origin + pageMeta.canonicalPath;
      if (pageMeta.image) ogImage = origin + pageMeta.image;
    } else if (article) {
      title = article.metaTitle.endsWith(siteName) ? article.metaTitle : `${article.metaTitle} | ${siteName}`;
      desc = article.metaDescription;
      canonical = origin + article.slug;
      if (article.heroImage) ogImage = origin + article.heroImage;
    }

    // Set document.title
    document.title = title;

    // Helper to set meta tags
    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', article ? 'article' : 'website');
    setMeta('property', 'og:site_name', siteName);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', ogImage);

    // Canonical link tag
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);

    // Remove old dynamic JSON-LD scripts
    const oldScripts = document.querySelectorAll('script[data-dynamic-jsonld]');
    oldScripts.forEach((s) => s.remove());

    const jsonLdScripts: object[] = [];

    const isHomePage = canonical === `${origin}/` || (pageMeta && pageMeta.canonicalPath === '/');

    // Organization and WebSite Schemas on home page
    if (isHomePage) {
      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: "L'ARGENT NOIR",
        url: origin,
        logo: `${origin}/favicon.ico`,
        description: 'An independent fine fragrance journal and luxury perfume compendium.',
        sameAs: [
          'https://twitter.com/argentnoir',
          'https://instagram.com/argentnoir',
        ],
      });

      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: "L'ARGENT NOIR",
        url: origin,
        description: 'A haute parfumerie journal and luxury perfume compendium.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${origin}/?search={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      });
    }

    // BreadcrumbList Schema on all inner pages
    if (!isHomePage) {
      const breadcrumbs = pageMeta?.breadcrumbs || (article ? [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: article.title, url: article.slug },
      ] : [{ name: 'Home', url: '/' }]);

      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: origin + b.url,
        })),
      });
    }

    // FAQPage Schema if FAQs exist
    const faqs = pageMeta?.faqs || article?.faqs;
    if (faqs && faqs.length > 0) {
      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      });
    }

    // Article / Review Schema if viewing an article
    if (article) {
      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription,
        image: origin + article.heroImage,
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
            url: `${origin}/favicon.ico`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical,
        },
      });
    }

    // Append JSON-LD script tags
    jsonLdScripts.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-jsonld', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, [pageMeta, article]);

  return null;
}

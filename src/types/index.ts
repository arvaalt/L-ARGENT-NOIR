export interface OlfactoryNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductRecommendation {
  name: string;
  house: string;
  concentration: string;
  notes: OlfactoryNotes;
  longevityScore: string;
  sillage: string;
  priceTier: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  verdict: string;
  rating: number;
}

export interface ArticleSection {
  id: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  quote?: {
    text: string;
    author: string;
  };
  tip?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TOCItem {
  id: string;
  title: string;
}

export interface Article {
  id: string;
  slug: string;
  blogSlug: string;
  reviewSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  author: {
    name: string;
    title: string;
  };
  heroImage: string;
  imageAlt: string;
  excerpt: string;
  keyTakeaways: string[];
  tableOfContents: TOCItem[];
  sections: ArticleSection[];
  productRecommendations: ProductRecommendation[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  tags: string[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageMeta {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  h1: string;
  mainKeyword: string;
  relatedKeywords: string[];
  intent: string;
  questionAnswered: string;
  breadcrumbs: BreadcrumbItem[];
  faqs: FAQItem[];
  image?: string;
  imageAlt?: string;
}

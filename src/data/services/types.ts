export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  image: string;
  subcategories: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string;
  heroHighlights: string[];
  keyBenefits: {
    title: string;
    description: string;
  }[];
  specifications: string[];
  commonIssuesSolved: string[];
  dubaiLocations: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

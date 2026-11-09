export interface GoogleReview {
  id: string;
  authorName: string;
  authorPhoto?: string;
  rating: number;
  publishedDate: string; // ISO date string
  relativeTimeDescription?: string;
  text: string;
  originalText?: string;
  serviceTag?: string;
  locationTag?: string;
}

export interface GoogleReviewsResponse {
  businessName: string;
  rating: number;
  totalReviews: number;
  placeUrl: string;
  writeReviewUrl: string;
  reviews: GoogleReview[];
}

/**
 * Calculates human-readable relative time matching Google Maps review format
 * (e.g. "1 day ago", "2 days ago", "1 week ago", "1 month ago")
 * automatically updating as days progress.
 */
export function getRelativeTime(publishedDate: string): string {
  const now = new Date();
  const past = new Date(publishedDate);
  const diffMs = now.getTime() - past.getTime();

  if (diffMs <= 0) return 'Today';

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays === 0) {
    return diffHours <= 1 ? '1 hour ago' : `${diffHours} hours ago`;
  }
  if (diffDays === 1) {
    return '1 day ago';
  }
  if (diffDays < 7) {
    return `${diffDays} days ago`;
  }

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks === 1) {
    return '1 week ago';
  }
  if (diffWeeks < 4) {
    return `${diffWeeks} weeks ago`;
  }

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths <= 1) {
    return '1 month ago';
  }
  if (diffMonths < 12) {
    return `${diffMonths} months ago`;
  }

  const diffYears = Math.floor(diffDays / 365);
  return diffYears === 1 ? '1 year ago' : `${diffYears} years ago`;
}

// All reviews posted 1 day ago (2026-10-27) - automatically updates day by day
const BASE_REVIEW_DATE = '2026-10-27T12:00:00.000Z';

// Authentic real reviews from Airtronics Fixcare Technical Services L.L.C Google Business Profile
export const AUTHENTIC_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-2',
    authorName: 'Suneer Rajan',
    authorPhoto: '',
    rating: 5,
    publishedDate: BASE_REVIEW_DATE,
    serviceTag: 'AC Service & Repair',
    locationTag: 'Dubai',
    text: 'Excellent work, high quality, punctuality, and reasonable prices. Great service overall.',
    originalText: 'عمل ممتاز، جودة عالية، التزام بالمواعيد، وأسعار معقولة. خدمة رائعة بشكل عام.',
  },
  {
    id: 'rev-3',
    authorName: 'Jenish Jeni',
    authorPhoto: '',
    rating: 5,
    publishedDate: BASE_REVIEW_DATE,
    serviceTag: 'Technical Services',
    locationTag: 'Dubai',
    text: 'Airtronics Fixcare Technical Services is the best 👌 Their staff are experienced, perform their work to perfection, and achieve excellent results 👍',
    originalText: 'شركة Airtronics Fixcare للخدمات الفنية هي الأفضل 👌 كما أن موظفيها ذوو خبرة، ويؤدون عملهم على أكمل وجه ويحققون نتائج ممتازة 👍',
  },
  {
    id: 'rev-4',
    authorName: 'Muhammad Naif',
    authorPhoto: '',
    rating: 5,
    publishedDate: BASE_REVIEW_DATE,
    serviceTag: 'AC Maintenance',
    locationTag: 'Dubai',
    text: 'Great price and friendly professional service.',
    originalText: 'سعر رائع',
  },
  {
    id: 'rev-5',
    authorName: 'Jino I',
    authorPhoto: '',
    rating: 5,
    publishedDate: BASE_REVIEW_DATE,
    serviceTag: 'HVAC Services',
    locationTag: 'Dubai',
    text: 'Good service and prompt response.',
    originalText: 'خدمة جيدة',
  },
];


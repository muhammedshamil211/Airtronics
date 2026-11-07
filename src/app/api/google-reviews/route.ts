import { NextResponse } from 'next/server';
import {
  AUTHENTIC_REVIEWS,
  getRelativeTime,
  type GoogleReviewsResponse,
} from '@/data/googleReviewsData';

export async function GET() {
  const reviewsWithDynamicAge = AUTHENTIC_REVIEWS.map((rev) => ({
    ...rev,
    relativeTimeDescription: getRelativeTime(rev.publishedDate),
  }));

  const data: GoogleReviewsResponse = {
    businessName: 'Airtronics Fixcare Technical Services L.L.C',
    rating: 5.0,
    totalReviews: 5,
    placeUrl: 'https://share.google/TfwhuvdbJE34DoOM2',
    writeReviewUrl: 'https://g.page/r/CUM30MF90SldECE/review',
    reviews: reviewsWithDynamicAge,
  };

  return NextResponse.json(data);
}

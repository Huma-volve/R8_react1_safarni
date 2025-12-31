import type { Review } from "@/types/hotel";

const STORAGE_KEY = "hotel_reviews";

// Get all reviews from localStorage
export const getReviews = (): Review[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Get reviews for a specific hotel
export const getHotelReviews = (hotelId: string): Review[] => {
  const allReviews = getReviews();
  return allReviews.filter((review) => review.hotelId === hotelId);
};

// Add a new review
export const addReview = (review: Omit<Review, "id" | "createdAt">): Review => {
  const allReviews = getReviews();
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  allReviews.push(newReview);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allReviews));
  return newReview;
};

// Calculate average rating for a hotel
export const getAverageRating = (hotelId: string): number => {
  const reviews = getHotelReviews(hotelId);
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
};


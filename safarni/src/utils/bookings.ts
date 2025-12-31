import type { Booking } from "@/types/hotel";

const STORAGE_KEY = "hotel_bookings";

// Get all bookings from localStorage
export const getBookings = (): Booking[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Get bookings for a specific hotel
export const getHotelBookings = (hotelId: string): Booking[] => {
  const allBookings = getBookings();
  return allBookings.filter((booking) => booking.hotelId === hotelId);
};

// Add a new booking
export const addBooking = (booking: Omit<Booking, "id" | "createdAt">): Booking => {
  const allBookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: booking.status || "pending",
  };
  allBookings.push(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allBookings));
  return newBooking;
};

// Calculate number of nights
export const calculateNights = (checkIn: string, checkOut: string): number => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};


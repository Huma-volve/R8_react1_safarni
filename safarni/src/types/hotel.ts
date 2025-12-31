export type Hotel = {
  id: string;
  name: string;
  image: string;
  rating: number;
  location: string;
  discount: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  description?: string;
  gallery?: string[];
  price?: number;
  reviews?: number;
  address?: string;
};

export type Room = {
  id: string;
  hotelId: string;
  name: string;
  image: string;
  price: number;
};

export type Review = {
  id: string;
  hotelId: string;
  rating: number;
  comment: string;
  photo?: string;
  createdAt: string;
  userName?: string;
};

export type Booking = {
  id: string;
  hotelId: string;
  hotelName: string;
  checkIn: string;
  checkOut: string;
  note?: string;
  price: number;
  createdAt: string;
  status?: "pending" | "confirmed" | "cancelled";
  adults?: number;
  children?: number;
  infants?: number;
};

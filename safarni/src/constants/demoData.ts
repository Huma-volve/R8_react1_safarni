import type { Hotel, Room } from "@/types/hotel";

export const recommendationHotels: Hotel[] = [
  {
    id: "1",
    name: "Oasis Overture",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    rating: 4.2,
    location: "New York, USA",
    discount: 10,
    beds: 2,
    baths: 2,
    sqft: 1200,
    price: 200,
    reviews: 245,
    address: "1012 Ocean Avenue, New York, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "2",
    name: "Hidden Haven",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    rating: 4.1,
    location: "New York, USA",
    discount: 20,
    beds: 3,
    baths: 2,
    sqft: 1500,
    price: 180,
    reviews: 189,
    address: "2024 Harbor Street, New York, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "3",
    name: "Silent Nest",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    rating: 4.8,
    location: "New York, USA",
    discount: 5,
    beds: 4,
    baths: 3,
    sqft: 2000,
    price: 350,
    reviews: 456,
    address: "3036 Peaceful Lane, New York, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "4",
    name: "Secret Escape",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    rating: 4.6,
    location: "New York, USA",
    discount: 7,
    beds: 2,
    baths: 1,
    sqft: 950,
    price: 150,
    reviews: 312,
    address: "4048 Mystery Road, New York, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    ],
  },
];

export const nearbyHotels: Hotel[] = [
  {
    id: "5",
    name: "Golden Valley",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop",
    rating: 4.3,
    location: "New York, USA",
    discount: 15,
    beds: 3,
    baths: 2,
    sqft: 1600,
    price: 220,
    reviews: 278,
    address: "5050 Golden Street, New York, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    gallery: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "6",
    name: "Serene Shelter",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    rating: 4.3,
    location: "New York, USA",
    discount: 10,
    beds: 2,
    baths: 2,
    sqft: 1100,
    price: 170,
    reviews: 201,
    address: "6066 Serenity Boulevard, New York, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "7",
    name: "Mystic Retreat",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    rating: 4.3,
    location: "New York, USA",
    discount: 20,
    beds: 4,
    baths: 3,
    sqft: 2200,
    price: 400,
    reviews: 389,
    address: "7077 Mystic Avenue, New York, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "8",
    name: "Dreamer's Refuge",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
    rating: 4.3,
    location: "New York, USA",
    discount: 15,
    beds: 3,
    baths: 2,
    sqft: 1400,
    price: 190,
    reviews: 267,
    address: "8088 Dream Street, New York, USA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    ],
  },
];

// Helper function to get hotel by ID
export const getHotelById = (id: string): Hotel | undefined => {
  return [...recommendationHotels, ...nearbyHotels].find((hotel) => hotel.id === id);
};

export const availableRooms: Room[] = [
  // Rooms for Hotel 1 (Oasis Overture)
  {
    id: "r1",
    hotelId: "1",
    name: "Deluxe Room",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    price: 200,
  },
  {
    id: "r2",
    hotelId: "1",
    name: "Premium Suite",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=400&h=300&fit=crop",
    price: 280,
  },
  {
    id: "r3",
    hotelId: "1",
    name: "Standard Room",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    price: 150,
  },
  // Rooms for Hotel 2 (Hidden Haven)
  {
    id: "r4",
    hotelId: "2",
    name: "Ocean View Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
    price: 180,
  },
  {
    id: "r5",
    hotelId: "2",
    name: "Family Suite",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    price: 250,
  },
  {
    id: "r6",
    hotelId: "2",
    name: "Executive Room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=400&h=300&fit=crop",
    price: 220,
  },
  // Rooms for Hotel 3 (Silent Nest)
  {
    id: "r7",
    hotelId: "3",
    name: "Luxury Suite",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    price: 350,
  },
  {
    id: "r8",
    hotelId: "3",
    name: "Presidential Suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
    price: 500,
  },
  {
    id: "r9",
    hotelId: "3",
    name: "Garden View Room",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    price: 300,
  },
  // Rooms for Hotel 4 (Secret Escape)
  {
    id: "r10",
    hotelId: "4",
    name: "Cozy Room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=400&h=300&fit=crop",
    price: 150,
  },
  {
    id: "r11",
    hotelId: "4",
    name: "Studio Apartment",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    price: 180,
  },
  // Rooms for Hotel 5 (Golden Valley)
  {
    id: "r12",
    hotelId: "5",
    name: "Mountain View Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
    price: 220,
  },
  {
    id: "r13",
    hotelId: "5",
    name: "Deluxe Suite",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    price: 280,
  },
  // Rooms for Hotel 6 (Serene Shelter)
  {
    id: "r14",
    hotelId: "6",
    name: "Tranquil Room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=400&h=300&fit=crop",
    price: 170,
  },
  {
    id: "r15",
    hotelId: "6",
    name: "Peaceful Suite",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    price: 210,
  },
  // Rooms for Hotel 7 (Mystic Retreat)
  {
    id: "r16",
    hotelId: "7",
    name: "Mystic Suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
    price: 400,
  },
  {
    id: "r17",
    hotelId: "7",
    name: "Royal Suite",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    price: 550,
  },
  // Rooms for Hotel 8 (Dreamer's Refuge)
  {
    id: "r18",
    hotelId: "8",
    name: "Dream Suite",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=400&h=300&fit=crop",
    price: 190,
  },
  {
    id: "r19",
    hotelId: "8",
    name: "Refuge Room",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    price: 230,
  },
];

// Helper function to get rooms by hotel ID
export const getRoomsByHotelId = (hotelId: string): Room[] => {
  return availableRooms.filter((room) => room.hotelId === hotelId);
};


import type { LocationOption } from "@/types/flight";

export const LOCATIONS: LocationOption[] = [
  { id: "1", name: "Cairo", country: "Egypt" },
  { id: "2", name: "Tokyo", country: "Japan" },
  { id: "3", name: "London", country: "United Kingdom" },
  { id: "4", name: "New York", country: "USA" },
  { id: "5", name: "Paris", country: "France" },
];

export const PASSENGER_OPTIONS = [
  { value: 1, label: "1 Passenger" },
  { value: 2, label: "2 Passengers" },
  { value: 3, label: "3 Passengers" },
  { value: 4, label: "4+ Passengers" },
];

export const MOCK_FLIGHTS: Flight[] = [
  {
    id: "f1",
    departureTime: "7:05 AM",
    arrivalTime: "8:55 PM",
    originCode: "YUL",
    destinationCode: "YUL",
    duration: "18:55",
    airline: "Scoot",
    price: 1300,
    layover: { location: "YYZ", duration: "3:55" },
  },
  {
    id: "f2",
    departureTime: "9:05 AM",
    arrivalTime: "4:05 PM",
    originCode: "YUL",
    destinationCode: "YUL",
    duration: "18:55",
    airline: "Scoot",
    price: 1400,
    layover: { location: "YYZ", duration: "3:55" },
  },
  {
    id: "f3",
    departureTime: "9:05 AM",
    arrivalTime: "4:55 PM",
    originCode: "YUL",
    destinationCode: "YUL",
    duration: "18:55",
    airline: "Scoot",
    price: 1300,
    layover: { location: "YYZ", duration: "3:55" },
  },
];

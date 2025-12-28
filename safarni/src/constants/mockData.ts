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

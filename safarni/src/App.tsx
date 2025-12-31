import { Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
// import Favorite from "@/pages/Favorite/Favorite"
import CarsBooking from "@/pages/CarBooking/CarsBooking"
import HotelBooking from "@/pages/HotelBooking"
import HotelDetails from "@/pages/HotelDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HotelBooking />} />
      <Route path="/hotel-booking" element={<HotelBooking />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
      <Route path="/profile/*" element={<Profile />} />
    </Routes>
  )
}

export default App;

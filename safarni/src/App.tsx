import { Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
// import Favorite from "@/pages/Favorite/Favorite"
import CarsBooking from "@/pages/CarBooking/CarsBooking"

function App() {
  return (
    <Routes>
      <Route path="/profile/*" element={<Profile />} />
    </Routes>
  )
}

export default App
import Favorite from "@/pages/Favorite/Favorite"
import CarDetails from "@/pages/CarBooking/CarDetails"
import {  Route, Routes } from "react-router-dom";
import Profile from './pages/profile';
// import Favorite from "@/pages/Favorite/Favorite"
import CarsBooking from "@/pages/CarBooking/CarsBooking"


function App() {
  return (
    <>
      <Routes >
        <Route path="/cars" element={<CarsBooking/>} />
        <Route path="/car-details" element={<CarDetails/>} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/profile/*" element={<Profile />} />       
      </Routes>
    </>
  )
}

export default App;

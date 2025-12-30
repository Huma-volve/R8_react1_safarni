import Favorite from "@/pages/Favorite/Favorite"
import CarsBooking from "@/pages/CarBooking/CarsBooking"
import CarDetails from "@/pages/CarBooking/CarDetails"
import {  Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes >
        <Route path="/cars" element={<CarsBooking/>} />
        <Route path="/car-details" element={<CarDetails/>} />
        <Route path="/favorite" element={<Favorite/>} />
      </Routes>
    </>
  )
}

export default App

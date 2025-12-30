import Favorite from "@/pages/Favorite/Favorite"
import CarDetails from "@/pages/CarBooking/CarDetails"
import {  Route, Routes } from "react-router-dom";
import Profile from './pages/profile';
import CarsBooking from "@/pages/CarBooking/CarsBooking"
import ForgetPassword from "./pages/auth/ForgetPassword";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import GetStarted from "./pages/auth/GetStarted";
import Otp from "./pages/auth/Otp";
import NewPassword from "./pages/auth/Newpassword";
import Done from "./pages/auth/Done";
import { Navigate } from "react-router-dom";
import FlightBooking from "@/component/booking/flightBooking/FlightBooking";
import Map from "@/component/map/Map";
import Home from './pages/HOME-PAGE/Home';
import CityDetails from './pages/SEARCH-PAGE/CityDetails';
import FilterPanel from "./pages/SEARCH-PAGE/FilterPanel";
import SearchPage from './pages/SEARCH-PAGE/SearchPage';

function App() {
  return (
    <>
      <Routes >
        <Route path="/cars" element={<CarsBooking/>} />
        <Route path="/car-details" element={<CarDetails/>} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/profile/*" element={<Profile />} />       
        <Route path="/" element={<Navigate to="/GetStarted" replace />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/done" element={<Done />} />
        {/* <Route path="/flightBooking" element={<FlightBooking />} /> */}
        <Route path="/map" element={<Map />} />
        <Route path="/cite/:id" element={<CityDetails />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/FilterPanel" element={<FilterPanel />} />
        <Route path="/" element={<FilterPanel />} />
      </Routes>
    </>
  )
}

export default App;

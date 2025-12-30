import { Routes, Route, Navigate } from "react-router-dom";
import Favorite from "@/pages/Favorite/Favorite";

import ForgetPassword from "./pages/auth/ForgetPassword";

import SignUp from "./pages/auth/SignUp";

import Login from "./pages/auth/Login";

import GetStarted from "./pages/auth/GetStarted";

import CarsBooking from "@/pages/CarBooking/CarsBooking";

import Otp from "./pages/auth/Otp";
import NewPassword from "./pages/auth/Newpassword";
import Done from "./pages/auth/Done";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/GetStarted" replace />} />
      <Route path="/GetStarted" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
       <Route path="/otp" element={<Otp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/done" element={<Done />} />
      <Route path="/cars-booking" element={<CarsBooking />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  );
}

export default App;

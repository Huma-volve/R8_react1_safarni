import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
// import Favorite from "@/pages/Favorite/Favorite"

// import CarsBooking from "@/pages/CarBooking/CarsBooking"

import GetStarted from "./pages/auth/GetStarted";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Otp from "./pages/auth/Otp";
import NewPassword from "./pages/auth/Newpassword";
import Done from "./pages/auth/Done";

function App() {
  return (
    <Routes>
      <Route path="/profile/*" element={<Profile />} />

      <Route path="/GetStarted" element={<GetStarted/>} />

      <Route path="/GetStarted" element={<GetStarted />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<SignUp />} />

      <Route path="/forgot-password" element={<ForgetPassword/>} />

      <Route path="/otp" element={<Otp />} />

      <Route path="/newpassword" element={<NewPassword />} />

      <Route path="/done" element={<Done />} />
    </Routes>
  );
}

export default App;

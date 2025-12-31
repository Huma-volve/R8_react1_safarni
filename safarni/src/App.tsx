import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Favorite from "@/pages/Favorite/Favorite";
import CarsBooking from "@/pages/CarBooking/CarsBooking";
import CarDetails from "@/pages/CarBooking/CarDetails";
import ForgetPassword from "./pages/auth/ForgetPassword";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import GetStarted from "./pages/auth/GetStarted";
import Otp from "./pages/auth/Otp";
import NewPassword from "./pages/auth/Newpassword";
import Done from "./pages/auth/Done";
// import FlightBooking from "@/component/booking/flightBooking/FlightBooking";
import Map from "@/component/map/Map";
import Home from './pages/HOME-PAGE/Home';
import CityDetails from './pages/SEARCH-PAGE/CityDetails';
import FilterPanel from "./pages/SEARCH-PAGE/FilterPanel";
import SearchPage from './pages/SEARCH-PAGE/SearchPage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const myQuery = new QueryClient()
  
  return (
    <>
    <QueryClientProvider client={myQuery}>
      <Routes>
        {/* Auth & Profile Routes */}
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/done" element={<Done />} />

        {/* App Routes from Deployment */}
        <Route path="/cars" element={<CarsBooking />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/favorite" element={<Favorite />} />
        {/* <Route path="/flightBooking" element={<FlightBooking />} /> */}
        <Route path="/map" element={<Map />} />
        <Route path="/cite/:id" element={<CityDetails />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/FilterPanel" element={<FilterPanel />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
    </>
  );
}

export default App;

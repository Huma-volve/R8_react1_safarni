 import Favorite from "@/pages/Favorite/Favorite"

 import ForgetPassword from "./pages/auth/ForgetPassword"

import SignUp from "./pages/auth/SignUp"

 import Login from "./pages/auth/Login"

import GetStarted from "./pages/auth/GetStarted"


import CarsBooking from "@/pages/CarBooking/CarsBooking"
function App() {

  return (
    <>

     <Login/> 
     <SignUp/> 

    <GetStarted/>
      <CarsBooking/>
      <Favorite/> 
     <ForgetPassword/>
    </>
  )
}

export default App

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Navbar from "../Components/Navbar";
import Signup from "./Signup";
import Login from "./Login";
import Footer from "../Components/Footer";
import Motortruckcargoinsurance from "./Motortruckcargoinsurance";
import PhysicalDemagaeInsurance from "./PhysicalDemagaeInsurance";
import Autoliability from "./Autoliability";
import GeneralRealability from "./GeneralRealability";
import About from "./About";
import Homesecound from "./Homesecound";
import Contactus from "./Contactus";

function Router() {
  const location = useLocation();

  // Check if the current route is either /signup or /login
  const isSignupOrLogin = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      {/* Render Navbar only if the current route is not /signup or /login */}
      {!isSignupOrLogin && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Homesecound/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Motorinsurance" element={<Motortruckcargoinsurance/>}/>
        <Route path="/Physicalinsurance" element={<PhysicalDemagaeInsurance/>}/>
        <Route path="/autoliability" element={<Autoliability/>}/>
        <Route path="/generalinsurance" element={<GeneralRealability/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
      
      {/* Render Footer only if the current route is not /signup or /login */}
      {!isSignupOrLogin && <Footer />}
    </>
  );
}

export default Router;

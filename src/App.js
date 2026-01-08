import react from "react";
import {Routes, Route} from "react-router-dom";
import Landing from "./landing"
import Listings from "./listing";
import Bookings from "./booking";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/listings" element={<Listings/>}/>
      <Route path="/my-bookings" element={<Bookings/>}/>
    </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import Weather from "./pages/Weather.jsx";
import Itinerary from "./pages/Itinerary.jsx";
import Navbar from "./components/Navbar.jsx"
import Search from "./components/Search.jsx";
import "./style.css";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/itinerary" element={<Itinerary />} />
    </Routes>
    </>
  );
}

export default App;
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#FFDEAD" }}>
      <NavLink to="/" style={{ color: "#BC8F8F", marginRight: "1rem" }}>Home</NavLink>
      <NavLink to="/itinerary" style={{ color: "#BC8F8F", marginRight: "1rem" }}>Itinerary</NavLink>
      <NavLink to="/destinations" style={{ color: "#BC8F8F", marginRight: "1rem" }}>Destinations</NavLink>
      <NavLink to="/weather" style={{ color: "#BC8F8F" }}>Weather</NavLink>
    </nav>
  );
}

export default Navbar;
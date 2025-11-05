import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <section className="home">
            <div className="home-cont">
                <h1>Welcome to Travel Joy</h1>
                <p>Plan your dream holiday with ease. Discover exciting destinations,
                    check the weather and build you personal itinerary.</p>
                <NavLink to="/destinations" className="btn">
                Explore Destinations</NavLink>
            </div>
        </section>
    );
}

export default Home;
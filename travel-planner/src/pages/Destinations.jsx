import React, { useState } from "react";

function Destinations() {
    const [query, setQuery] = useState("");

    const destinations = [
        {
            name: "Tokyo, Japan",
            img: "images/tokyo.jpg",
            desc: "Experience the vibrant mix of tradition and technology.",
        },
        {
            name: "Paris, France",
            img: "/images/paris.jpg",
            desc: "The city of love, art, and exquisite cuisine.",
        },
        {
            name: "Cape Town, South Africa",
            img: "/images/cape_town.jpg",
            desc: "A coastal paradise with Table Mountain views.",
        },
        {
            name: "New York, USA",
            img: "/images/new_york.jpg",
            desc: "The city that never sleeps - full of energy and culture."
        },
    ];

    const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="page">
            <h1>Explore Destinations</h1>
            <input type="text" placeholder="Search for a destination..." value={query} onChange={(e) => setQuery(e.target.value)} className="search-box" />

            <div className="destinations-grid">
                {filtered.map((dest, index) => (
                    <div className="card" key={index}>
                        <img src={dest.img} alt={dest.name} />
                        <h3>{dest.name}</h3>
                        <p>{dest.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destinations;
import React, { useEffect, useState } from "react";

function Destinations() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("itinerary")) || [];
    setItinerary(savedTrips);
  }, []);

  useEffect(() => {
    localStorage.setItem("itinerary", JSON.stringify(itinerary));
  }, [itinerary]);

  const destinations = [
    {
      name: "Tokyo, Japan",
      img: "/images/tokyo.jpg",
      desc: "Experience the vibrant mix of tradition and technology.",
      link: "https://www.tripadvisor.com/Attraction_Products-g298184-Tokyo_Tokyo_Prefecture_Kanto.html",
    },
    {
      name: "Paris, France",
      img: "/images/paris.jpg",
      desc: "The beautiful city of love, art, and exquisite cuisine.",
      link: "https://www.tripadvisor.co.za/Attractions-g187147-Activities-Paris_Ile_de_France.html",
    },
    {
      name: "Cape Town, SA",
      img: "/images/cape_town.jpg",
      desc: "A coastal paradise with Table Mountain views and good food.",
      link: "https://www.tripadvisor.com/Attractions-g1722390-Activities-Cape_Town_Western_Cape.html",
    },
    {
      name: "New York, USA",
      img: "/images/new_york.jpg",
      desc: "The city that never sleeps - full of energy and culture.",
      link: "https://www.tripadvisor.co.za/Attractions-g60763-Activities-New_York_City_New_York.html",
    },
  ];

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  const addToItinerary = (dest) => {
    if (itinerary.find((trip) => trip.name === dest.name)) {
      alert('${dest.name} is already in your itinerary.');
      return;
    }
    const updated = [...itinerary, dest];
    setItinerary(updated);
    alert('${dest.name} added to your itinerary.');
  };

  return (
    <div className="page">
      <h1>Explore Destinations</h1>

      <input type="text" placeholder="Search for a destination..." value={query}
        onChange={(e) => setQuery(e.target.value)} className="search-box"/>

      <div className="destinations-grid">
        {filtered.map((dest, index) => (
          <div className="card" key={index} onClick={() => setSelected(dest)}>
            <img src={dest.img} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>{dest.desc}</p>

            <div className="card-buttons">
              <a href={dest.link} target="_blank" rel="noopener noreferrer" className="trip-btn">
                View on TripAdvisor
              </a>

              <button onClick={() => addToItinerary(dest)} className="add-btn">Add to Itinerary</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Destinations;

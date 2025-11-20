import React, { useState, useEffect } from "react";

function Itinerary() {
  const [trips, setTrips] = useState([]);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("trips"));
    if (saved) setTrips(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const tripAdvisorLinks = {
    "Tokyo, Japan":
      "https://www.tripadvisor.com/Attraction_Products-g298184-Tokyo_Tokyo_Prefecture_Kanto.html",
    "Paris, France":
      "https://www.tripadvisor.co.za/Attractions-g187147-Activities-Paris_Ile_de_France.html",
    "Cape Town, South Africa":
      "https://www.tripadvisor.com/Attractions-g1722390-Activities-Cape_Town_Western_Cape.html",
    "New York, USA":
      "https://www.tripadvisor.co.za/Attractions-g60763-Activities-New_York_City_New_York.html",
  };

  const handleAddTrip = () => {
    if (!destination || !date) return;
    const newTrip = {
      destination,
      date,
      link: tripAdvisorLinks[destination] || "#",
    };
    setTrips([...trips, newTrip]);
    setDestination("");
    setDate("");
  };

  const handleRemoveTrip = (index) => {
    setTrips(trips.filter((_, i) => i !== index));
  };

  const handleEditTrip = (index) => {
    setSelectedTrip({ ...trips[index], index });
  };

  const handleSaveEdit = () => {
    const updatedTrips = [...trips];
    updatedTrips[selectedTrip.index] = selectedTrip;
    setTrips(updatedTrips);
    setSelectedTrip(null);
  };

  return (
    <div className="page">
      <h1>My Travel Planner</h1>

      <div className="trip-form">
        <input
          type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date" value={date} onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAddTrip}>Add Trip</button>
      </div>

      <div className="trip-list">
        {trips.length === 0 && <p>No trips added yet.</p>}
        {trips.map((trip, index) => (
          <div key={index} className="trip-card">
            <h3>{trip.destination}</h3>
            <p>{trip.date}</p>
            <a href={trip.link} target="_blank" rel="nonreferrer">
              View on Tripadvisor
            </a>
            <div className="trip-buttons">
              <button onClick={() => handleEditTrip(index)}>Edit</button>
              <button onClick={() => handleRemoveTrip(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* === Edit Modal === */}
      {selectedTrip && (
        <div className="modal-overlay" onClick={() => setSelectedTrip(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Trip</h2>
            <input type="text" value={selectedTrip.destination} onChange={(e) =>
                setSelectedTrip({
                  ...selectedTrip,
                  destination: e.target.value,
                })
              }
            />
            <input type="date" value={selectedTrip.date} onChange={(e) =>
                setSelectedTrip({ ...selectedTrip, date: e.target.value })
              }
            />
            <button onClick={handleSaveEdit}>Save Changes</button>
            <button onClick={() => setSelectedTrip(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Itinerary;

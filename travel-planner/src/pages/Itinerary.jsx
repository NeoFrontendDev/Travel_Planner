import React, { useState } from "react";

function Itinerary() {
    const [trips, setTrips] = useState([]);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");

    const handleAddTrip = () => {
        if (!destination || !date) return;
        setTrips([...trips, { destination, date }]);
        setDestination("");
        setDate("");
    };

    const handleRemoveTrip = (index) => {
        const newTrips = trips.filter((_, i) => i !== index);
        setTrips(newTrips);
    };

    return (
        <div className="page">
            <h1>My Holiday Planner</h1>

            <div className="trip-form">
                <input type="text" placeholder="Enter your destination" value={destination} onChangeCapture={(e) => setDestination(e.target.value)} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button onClick={handleAddTrip}>Add Trip</button>
            </div>

            <div className="trip-form">
                {trips.length === 0 && <p>No trips added yet.</p>}
                {trips.map((trip, index) => (
                    <div key={index} className="trip-card">
                        <h3>{trip.destination}</h3>
                        <p>{trip.date}</p>
                        <button onClick={() => handleRemoveTrip(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Itinerary;
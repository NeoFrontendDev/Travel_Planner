// src/components/Search.jsx
import React from "react";

function Search() {
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <input 
        type="text" 
        placeholder="Search destinations..." 
        style={{ padding: "0.5rem", width: "50%" }}
      />
    </div>
  );
}

export default Search;
import React, { useState } from "react";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
    <div className="search-bar">
      <input className="search-input"
      placeholder="Enter coin name"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="btn" onClick={() => props.onSearch(searchInput)}>Enter</button>
      </div>
    </>
  );
}

export default SearchBar;

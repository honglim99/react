import React from "react";
import "./SearchBar.css";

const SearchBar = ({ query, setQuery, handleSearch, currentPage }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search for a ${currentPage === "movies" ? "movie" : "book"}...`}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

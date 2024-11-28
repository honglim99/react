import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setMovies, setBooks, currentPage }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (currentPage === "movies") {
      setMovies((prevMovies) =>
        prevMovies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else if (currentPage === "books") {
      setBooks((prevBooks) =>
        prevBooks.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }

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

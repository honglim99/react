import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import "./styles/App.css";
import inceptionPoster from "./images/inception.jpg";
import interstellarPoster from "./images/interstella.jpg";

const movieData = [
  {
    id: 1,
    title: "Inception",
    poster: inceptionPoster,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 2,
    title: "Interstellar",
    poster: interstellarPoster,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  // 추가 영화 데이터
  {
    id: 3,
    title: "Inception",
    poster: inceptionPoster,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 4,
    title: "Inception",
    poster: inceptionPoster,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 5,
    title: "Inception",
    poster: inceptionPoster,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 6,
    title: "Inception",
    poster: inceptionPoster,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
];

const MiniApp = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState("movies");

  useEffect(() => {
    setMovies(movieData);
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <Menu onMenuClick={handleMenuClick} />
      <SearchBar setMovies={setMovies} />
      {currentPage === "home" && <h1>홈 페이지</h1>}
      {currentPage === "movies" &&
        (selectedMovie ? (
          <MovieDetail movie={selectedMovie} />
        ) : (
          <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
        ))}
      {currentPage === "books" && <h1>책 페이지</h1>}
    </div>
  );
};

export default MiniApp;

import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import "./App.css";
import inceptionPoster from "./images/movies/inception.jpg";
import interstellarPoster from "./images/movies/interstella.jpg";
import cinderella from "./images/books/cinderella.jpg";
import snowwhite from "./images/books/snowwhite.jpg";
import lionking from "./images/books/lionking.jpg";
import junglebook from "./images/books/junglebook.jpg";
import pinocchio from "./images/books/pinocchio.jpg";
import littleprince from "./images/books/littleprince.jpg";
import AboutMe from "./AboutMe";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

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
];

const bookData = [
  {
      id: 1,
      title: "신데렐라",
      author: "Disney",
      poster: cinderella,
      description: "계모와 의붓자매들의 핍박으로 왕자님의 무도회에 갈 수 없게 된 신데렐라에게 요정이 나타난다. 멋진 호박마차와 아름다운 드레스, 유리 구두를 선물 받은 신데렐라는 마법이 풀리는 자정이 되기 전에 돌아와야 한다."
  },
  {
      id: 2,
      title: "백설공주",
      author: "Brüder Grimm",
      poster: snowwhite,
      description: "아주 먼 옛날, 큰 성에서 아름다운 여자 아이가 태어난다. 살결이 매우 하얗기 때문에 백설공주라 불린 아이는 크면 클수록 더욱 더 예뻐졌고 마음씨도 고왔기 때문에 사람들에게 사랑을 받는다. 그러나 어머니가 죽으면서부터 불행이 닥친다. 어머니를 생각하며 매일 슬퍼하는 백설공주를 위해 아버지는 새엄마를 맞이했는데, 그녀는 바로 사악한 마녀였던 것. 세상에서 백설 공주가 제일 예쁘다는 요술거울의 말에 왕비는 사냥꾼을 시켜 그녀를 죽이려 하고, 왕비의 마수를 피해 성을 빠져나온 백설 공주는 일곱 난쟁이들을 만난다"
  },
  {
      id: 3,
      title: "라이온 킹",
      author: "Disney",
      poster: lionking,
      description: "아버지가 살해당한 후, 어린 사자 왕자는 책임과 용기의 진정한 의미를 배우기 위해 왕국을 떠나게 됩니다."
  },
  // 추가 책 데이터를 넣을 수 있습니다.
  {
    id: 4,
    title: "정글북",
    author: "Rudyard Kipling",
    poster: junglebook,
    description: "정글북(The Jungle Book)은 러디어드 키플링[1]의 1894년작 단편 소설집이다. 보통 하나의 이야기일 거란 생각과는 다르게 여러가지 단편으로 이루어진 작품으로, 주인공 모글리는 정글북과 속편 두번째 정글북(The Second Jungle Book)의 여러 단편에 등장한다."
  },
  {
    id: 5,
    title: "피노키오",
    author: "Carlo Collodi",
    poster: pinocchio,
    description: "이탈리아의 작가 카를로 콜로디의 소설. 세계적으로 유명한 동화 중 하나로 이탈리아 아동 문학의 걸작 중 하나다."
  },
  {
    id: 6,
    title: "어린왕자",
    author: "Antoine de Saint-Exupéry",
    poster: littleprince,
    description: "어린 왕자는 프랑스 공군 비행사이자 작가인 앙투안 드 생텍쥐페리(Antoine de Saint-Exupéry)가 1943년 발표한 소설이다. 또한 동시에 생텍쥐페리의 유작이기도 하다.[1] 순수함과 현명함과 간결함과 환상과 삽화가 뒤섞인 작품으로 세계 명작으로 꼽히며 아이들에게 널리 퍼진 명작 동화이기도 하다.",
  },
];

const MiniApp = () => {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState("movies");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setMovies(movieData);
    setBooks(bookData)
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    setSelectedMovie(null);
    setSelectedBook(null);
    setQuery("");
    if (page === "movies") {
      setMovies(movieData);
    } else if (page === "books") {
      setBooks(bookData);
    }
  };

  const handleSearch = () => {
    if (currentPage === "movies") {
      setMovies(
        movieData.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else if (currentPage === "books") {
      setBooks(
        bookData.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setMovies(movieData);
      setBooks(bookData);
    }
  };

  return (
    <div className="App">
      <Menu onMenuClick={handleMenuClick} />
      {currentPage !== 'home' && <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} currentPage={currentPage} />}
      {currentPage === "home" && <AboutMe />}
      {currentPage === "movies" &&
        (selectedMovie ? (
          <MovieDetail movie={selectedMovie} />
        ) : (
          <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
        ))}
      {currentPage === "books" &&
        (selectedBook ? (
          <BookDetail book={selectedBook} />
        ) : (
          <BookList books={books} onBookSelect={handleBookSelect} />
        ))}
    </div>
  );
};

export default MiniApp;

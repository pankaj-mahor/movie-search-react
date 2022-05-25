import { useEffect, useState } from "react";
import "./App.css";

import searchIcon from "./search.svg";
//6d238345
//
import MovieCard from "./MovieCard";
import Form from "./Form";

const API_URL = "http://www.omdbapi.com?apikey=6d238345";

const movie1 = {
  Title: "Spiderman in Cannes",
  Year: "2016",
  imdbID: "tt5978586",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            // console.log(searchTerm);
            searchMovies(searchTerm);
          }}
        />
        <img
          src={searchIcon}
          alt="Search Icon"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found ! </h2>
        </div>
      )}
    </div>
  );
}

export default App;

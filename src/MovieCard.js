import React from "react";

function MovieCard({ movie }) {
 return (
  <div className="movie">
   <div>
    <p>{movie.Year}</p>
   </div>

   <div>
    <img
     src={
      movie.Poster === "N/A" ? "https://via.placeholder.com/400" : movie.Poster
     }
     alt="Movie"
    />
   </div>

   <div>
    <span>{movie.Type}</span>
    <h3>{movie.Title}</h3>
   </div>
  </div>
 );
}

export default MovieCard;

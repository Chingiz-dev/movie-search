import React from "react";

export default function MovieCard(props) {
  console.log(props);
  const { movie } = props;
  return (
    <div className="movie-div">
      <h2>{movie.title}</h2>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <p>{movie.overview}</p>
    </div>
  );
}

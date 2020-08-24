import React, { useState } from "react";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const setQueryValue = (e) => {
    setQuery(e.target.value);
  };

  const searchMovies = async (event) => {
    event.preventDefault();

    console.log(query);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4acee91410bac52b44a70ea92870fd94&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie name
        </label>
        <input
          name="query"
          className="input"
          type="text"
          placeholder="should be some text"
          value={query}
          onChange={setQueryValue}
        />

        <button className="button" type="submit">
          Search
        </button>
      </form>
      {movies.map((movie) => (
        <div>
          <footer className="movie-div">
            <h2>{movie.title}</h2>
            <img
              className="card--image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + " poster"}
            />
            <p>{movie.overview}</p>
          </footer>
        </div>
      ))}
    </>
  );
}

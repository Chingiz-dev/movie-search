import React, { useEffect } from "react";
import SearchMovies from './components/SearchMovies';

export default function App() {

  useEffect(() => {
    document.title = "movie-serch";
  }, []);

  return (
    <div className="container">
      <h1 className='title'>React Movie Search</h1>
      <SearchMovies />
    </div>
  );
}

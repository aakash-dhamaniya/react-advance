import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isloader, setisLoader] = useState(false);
  async function fetchMoviesHandler() {
    setisLoader(true);
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();
    setMovies(data.results);
    setisLoader(movies);
    console.log("hello");
    setisLoader(false);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isloader && <h1>Loading...</h1>}
        {!isloader && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;

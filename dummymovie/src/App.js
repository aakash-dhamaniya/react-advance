import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isloader, setisLoader] = useState(false);
  const [loading, setloding] = useState();
  async function fetchMoviesHandler() {
    setloding(<h1>Loading</h1>);
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();

    console.log(data.results);
    setMovies(data.results);
    setisLoader(movies);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloader && loading}
        {isloader && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;

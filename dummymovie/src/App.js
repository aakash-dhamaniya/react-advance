import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
let retrying = null;
var arr = [];
function App() {
  const [movies, setMovies] = useState([]);
  const [isloader, setisLoader] = useState(false);
  const [error, setError] = useState(null);
  const [isCancel, setisCancel] = useState(true);
  const fetchMoviesHandler = async () => {
    setError(null);
    setisLoader(true);
    try {
      const res = await fetch("https://swapi.dev/api/film/");
      if (!res.ok) {
        throw new Error("Somthing went wrong ...Retrying");
      }
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      setError(e.message);
      if (isCancel) {
        retrying = setInterval(fetchMoviesHandler, 5000);
        arr.push(retrying);
      }
    }
    setisLoader(false);
  };
  function cancleRetryingHanldler() {
    setisCancel(false);
    console.log(retrying);
    arr.map((a) => {
      console.log(a);
      clearInterval(a);
      arr = [];
    });
    clearInterval(retrying);
    setError(null);
    setisCancel(true);
  }
  let content = "no data found";
  if (isloader) {
    content = <h1>Loading...</h1>;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = (
      <div>
        <p>{error}</p> <button onClick={cancleRetryingHanldler}>Cancel</button>
      </div>
    );
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {isloader && <h1>Loading...</h1>}
        {!isloader && movies.length > 0 && <MoviesList movies={movies} />}
        {!isloader && movies.length === 0 && <h1>Found no movies</h1>}
        {!isloader && error && (
          <div>
            <p>{error}</p>{" "}
            <button onClick={cancleRetryingHanldler}>Cancel</button>
          </div>
        )} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { movies } from "../data";
import Movie from "./Movie";

function Movies() {
  const movieList = movies.map(movie=> {return <Movie movie={movie} key={movie.title}/>})
  return (
  <div> 
    <h1>Movies Page</h1>
    {movieList}
    </div>
    );
}

export default Movies;

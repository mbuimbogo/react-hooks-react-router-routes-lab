import React from "react";
import { movies } from "../data";
import Movie from "./Movie";

function Movies() {
  const movieList = movies.map(movie=> <Movie movie={movie} key={movie.name}/>)
  
  return (
  <div> 
    {<h1>Movies Page</h1>}
    {movieList}
    </div>
    );
}

export default Movies;

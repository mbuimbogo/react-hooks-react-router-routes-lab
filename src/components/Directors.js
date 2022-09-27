import React from "react";
import { directors } from "../data";
import NameMovies from "./NamMovie";

function Directors() {
  const directorList = directors.map(director=>
   <NameMovies key={director.name} director= {director}/>);


return(
  <div> 
    <h1>Directors Page</h1>
    {directorList}
    </div>
 
)
}
export default Directors;

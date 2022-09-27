import React from "react";
import { actors } from "../data";
import NameMovies from "./NamMovie";

function Actors() {
  const actorList = actors.map(actor=>
    <NameMovies key={actor.name} actor= {actor}/>);
  
 return(
   <div> 
     <h1>Actors Page</h1>
     <ul>{actorList}</ul>
     </div>
 )
}

export default Actors;

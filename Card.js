import React from "react";
import css from "./App.css";
const card = (props) => {
  return(
  <div class="card">
    <h1>{props.name}</h1>
    <h2>{props.email}</h2>
    <p>{props.comments}</p>
  </div>)
};
export default card;
import React from "react";
import "./teams.css";
import { namesOne, namesTwo } from "../data";
function Teams1(props) {
  return (
    <div className="main">
      {props.id[0] === 0 ? (
        <div className="wrapper">
          <div className="container">This is {namesOne[props.id[1]].name}</div>
          <div className="container">This is {namesTwo[props.id[1]].name}</div>
        </div>
      ) : (
        <div className="wrapper">
          <div className="container">This is{}</div>
          <div className="container">This is</div>
        </div>
      )}
    </div>
  );
}

export default Teams1;

import React, { Component } from "react";
import movieiq from "./images/movieiq.png";

const Card = (props) => {
  return (
    <>
      <div className="work-feature-block grid-x card-container">
        <div className="cell medium-5 my-card img-div">
          <img
            className="work-feature-block-image card-img"
            src={props.data.img}
            alt="Stock Simulator Preview"
          />
        </div>
        <div className="cell medium-4 my-card">
          <h2 className="work-feature-block-header centered">
            {props.data.title}
          </h2>
          <p>{props.data.text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

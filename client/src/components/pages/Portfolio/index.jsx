import React, { Component, useContext } from "react";
import Card from "../../Card";
import PortfolioContext from "../../../utils/PortfolioContext";

const Portfolio = () => {
  const data = useContext(PortfolioContext);
  console.log(data);
  return (
    <div className="container">
      {data.map((x, index) => (
        <Card data={data[index]} />
      ))}
    </div>
  );
};

export default Portfolio;

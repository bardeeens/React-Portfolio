import React from "react";

const PortfolioContext = React.createContext([
  { title: "movieiq", text: "asdf", img: "require('./images/movieiq.png')" },
  { title: "not sexy image here", text: "aaaa" },
]);

export default PortfolioContext;

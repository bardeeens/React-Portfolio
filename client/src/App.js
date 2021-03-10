import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/pages/Home/index";
import Contact from "./components/pages/Contact/index";
import Portfolio from "./components/pages/Portfolio/";
import Wrapper from "./components/Wrapper";
import MainContext from "./utils/MainContext";
import PortfolioContext from "./utils/PortfolioContext";
import ContactContext from "./utils/ContactContext";
import movieiq from "./components/images/movieiq.png";
import stocks from "./components/images/stocksimpreview.png";
import weather from "./components/images/yourweather.png";
import profilePic from "./components/images/profilepic2.jpg";

function App() {
  const [mainState, setMainState] = useState({
    title: "",
    text: `My name is Derek Bardini. Full Stack Web Developer. Fluent in javaScript, node.js, express, SQL, Sequelize (& learning more everyday)
    I am a recent graduate of the University of Minnesota Coding Boot Camp.
    Portfolio full of responsive page designs. Excited for any new opportunities to learn!
    Insanely competitive rates.`,
    img: profilePic,
  });

  const [portfolioState, setPortState] = useState([
    {
      title: "Stock Simulator",
      text:
        "An educational program where users are given $1000 of fake money to invest in popular stocks. The simulation is connected to realtime stock prices. A fun, risk free way to play the market.",
      img: stocks,
    },
    {
      title: "MovieIQ",
      text:
        "A responsive, mobile first movie guessing game. Pure fun. Take your Netflix and chill game to the next level! I got to collaborate on this class project as part of a great team.",
      img: movieiq,
    },
    {
      title: "yourWeather⛅",
      text:
        "A no frills weather app. Check the realtime weather, plus the five day forecast of any city in the world!",
      img: weather,
    },
    {
      title: "2nd",
      text: "asdf",
      img: movieiq,
    },
  ]);

  const [contactState, setContactState] = useState({
    title: "",
    text: "contact yo",
  });
  console.log(mainState.text);
  return (
    <Router>
      <div>
        <Header />
        <ContactContext.Provider value={contactState}>
          <PortfolioContext.Provider value={portfolioState}>
            <MainContext.Provider value={mainState}>
              <Wrapper>
                <Route exact path="/" component={Main} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/portfolio" component={Portfolio} />
              </Wrapper>
            </MainContext.Provider>
          </PortfolioContext.Provider>
        </ContactContext.Provider>
      </div>
    </Router>
  );
}

export default App;

{
  /* <div className="background">

  </div>
  <div className="container">
    <div className="work-feature-block grid-x card-container">
      <div className="cell medium-5 my-card img-div">
        <img className="work-feature-block-image card-img" src="./assets/images/stocksimpreview.png" alt="Stock Simulator Preview"/>
      </div>
      <div className="cell medium-4 my-card">
        <h2 className="work-feature-block-header centered">Stock Simulator</h2>
        <p className="centered">An educational program where users are given $1000 of fake money to invest in popular stocks. The simulation is connected to realtime stock prices. A fun, risk free way to play the market. 
          Powered by <a className="cash" href="https://openweathermap.org/api"><strong>FinancialModelingPrep.com</strong></a>.<br />
          <a className="cash" href="https://github.com/bardeeens/stock-simulator"><strong>Github Repository</strong></a></p>
        <h4 className="centered">Technology Used:</h4>
        <ul className= "noList">
          <li>javaScript/jQuery</li>
          <li>Foundation</li>
          <li>FinancialModelingPrep.com API</li>
          <li></li>
        </ul>
      </div>
    </div>
    <div className="work-feature-block grid-x card-container">
      <div className="cell medium-5 my-card img-div">
        <img className="work-feature-block-image card-img" src="assets/css/movieiq.png" alt="MovieIQ Preview"/>
      </div>
      <div className="cell medium-4 my-card">
        <h2 className="work-feature-block-header centered">MovieIQ</h2>
        <p className="centered">A responsive, mobile first movie guessing game. Pure fun. Take your Netflix and chill game to the next level! I got to collaborate on
          this className project as part of a great team.</p>
        <h5 className="centered">
          <a className="cash" href="https://nickstull.github.io/Movie-Guessing-Game/"><strong>Play it Now!</strong></a><br />
          <a className="cash" href="https://github.com/NickStull/Movie-Guessing-Game"><strong>Github Repository</strong></a>
        </h5>
        <ul className="noList">
          <li>javaScript/Jquery</li>
          <li>CSS/Foundation Framework</li>
          <li>OMDP API, giphy api</li>
        </ul>
      </div>
    </div>
    <div className="work-feature-block grid-x card-container">
      <div className="cell medium-5 my-card img-div">
        <img className="work-feature-block-image card-img" src="assets/css/yourweather.png" alt="yourWeather preview"/>
      </div>
      <div className="cell medium-4 my-card">
        <h2 className="work-feature-block-header centered">yourWeather⛅</h2>
        <p className="centered">A no frills weather app. Check the realtime weather, plus the five day forecast of any city in the world!
          Powered by <a className="cash" href="https://openweathermap.org/api"><strong>OpenWeather</strong></a>.<br />
          <a className="cash" href="https://github.com/bardeeens/weather-dashboard"><strong>Github Repository</strong></a></p>
        <h4 className="centered">Technology Used:</h4>
        <ul className="noList">
          <li>javaScript/jQuery</li>
          <li>Bootstrap</li>
          <li>OpenWeatherMap API</li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
  
  <div className="work-feature-block grid-x card-container invisible">
    <div className="cell medium-5 img-div">
      <img className="work-feature-block-image card-img" src="https://placehold.it/600x400" alt=""/>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
    integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E=" crossorigin="anonymous"></script>
  <script src="assets/js/script.js"></script>
   <script src="https://cdn.jsdelivr.net/gh/mathusummut/confetti.js/confetti.min.js"></script>
  <script src="assets/js/navscript.js"></script> */
}

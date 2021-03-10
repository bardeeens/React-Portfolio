import React, { Component, useContext } from "react";
import Card from "../../Card";
import MainContext from "../../../utils/MainContext";
import profilePic from "../../images/profilepic2.jpg";

const Main = () => {
  const data = useContext(MainContext);
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="work-feature-block grid-x card-container">
          <div className="cell large-5 my-card img-div">
            <img
              className="work-feature-block-image card-img"
              src={profilePic}
            />
          </div>
          <div className="cell large-4 my-card">
            <p className="centered">
              My name is Derek Bardini. Full Stack Web Developer. Fluent in{" "}
              <strong>javaScript, node.js, express, SQL, Sequelize</strong> (&
              learning more everyday)
              <br />
              I am a recent graduate of the <br />
              <a className="cash" href="https://bootcamp.umn.edu/coding/">
                <strong className="centered">
                  University of Minnesota
                  <br />
                  Coding Boot Camp
                </strong>
              </a>
              <br />
              Portfolio full of responsive page designs. Excited for any new
              opportunities to learn!
              <br />
              Insanely competitive rates.
            </p>
            <p>
              <ul className="tiny-list centered">
                <li>
                  If you're not going to hire me, then{" "}
                  <a className="cash" href="venmo.html">
                    {" "}
                    buy
                  </a>{" "}
                  me a coffee!
                </li>
              </ul>
            </p>
            <div className="grid-x">
              <div className="small-2"></div>

              <div className="small-12">
                <a href="https://github.com/bardeeens">
                  <i className="fa fa-github cash size36"></i>
                </a>
                <span className="invisible">$$$$$</span>
                <a href="https://www.linkedin.com/in/derekbardini/">
                  <i className="fa fa-linkedin-square cash size36"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

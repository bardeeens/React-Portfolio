import React, { Component } from "react";
import profilePic from "../../images/profilepic.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./contact.css";

console.log(FaGithubSquare);

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="work-feature-block grid-x card-container">
          <div className="cell medium-5 my-card img-div">
            <img
              className="work-feature-block-image card-img"
              src={profilePic}
            />
          </div>
          <div className="cell medium-4 my-card">
            <h2 className="work-feature-block-header centered">
              Contact Derek:
            </h2>
            <p>You will recieve a response within 24 hours.</p>
            <h2 className="centered">Get Ahold of Me!</h2>
            <div className="grid-x">
              <div className="small-2"></div>
              <div className="small-4">
                <a href="https://github.com/bardeeens">
                  <i className="fa fa-github cash size36">
                    <FaGithubSquare />
                  </i>
                </a>
              </div>

              <div className="small-4">
                <a href="https://www.linkedin.com/in/derekbardini/">
                  <i className="fa fa-linkedin-square cash size36">
                    <FaLinkedin />
                  </i>
                </a>
              </div>
              <div className="class-2"></div>
            </div>
            <p className="centered">
              <a className="cash" href="mailto:derekbardini@gmail.com">
                derekbardini@gmail.com
              </a>
              <br />
              +1(970)306-9443
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

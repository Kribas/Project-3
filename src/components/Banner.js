import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__inner">
          <h1>{props.title}</h1>
          <h2>{props.desc}</h2>
          <div className="banner__inner__button">
              <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

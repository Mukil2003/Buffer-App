import React from "react";
import Btn from "../Btn";
import "./Hero.css";

let btnStyle = {
  color: "#fff",
  backgroundColor: "#2C4BFF",
  name: "Get Started Now",
  padding: "15px 30px",
  fontSize: "18px",
  border: "none",
};

function Hero() {
  return (
    <div className="hero-main">
      <div className="hero">
        <div className="contents">
          <h3>
            <i class="fa-solid fa-circle-play"></i>
            <a href="www.google.com">Watch Demo Video</a>
          </h3>
          <h1>Grow your audience on social and beyond</h1>
          <p>
            Buffer helps you build an audience organically. We’re a
            values-driven company that provides affordable, intuitive marketing
            tools for ambitious people and teams.
          </p>

          <div className="hero-email">
            <input type="email" placeholder="Enter your mail" />
            <Btn contents={btnStyle} />
          </div>

          <div className="condition">
            <em>
              <i class="fa-solid fa-check"></i> Try for free
            </em>
            <em>
              <i class="fa-solid fa-check"></i>No credit card required
            </em>
            <em>
              <i class="fa-solid fa-check"></i> Cancel anytime
            </em>
          </div>
        </div>
        <div className="hero-img-box">
          <img src="/images/hero-1.png" alt="hero-1" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

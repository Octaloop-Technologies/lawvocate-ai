import React from "react";
import "./hero.scss";
import Navbar from "../navbar/navbar";
function Hero() {
  return (
    <section className="hero-main">
      <Navbar />
      <div className="hero-sec">
        <div className="hero-content">
          <h1>
            Lawvocate AI <br /> <span>Your AI Advocate</span>
          </h1>
          <p className="para-small">
            Innovative Solutions for Legal and Business Challenges
          </p>
        </div>
        <div className="hero-rot">
          <img
            src="/assets/images/hero-rot.png"
            alt="..."
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

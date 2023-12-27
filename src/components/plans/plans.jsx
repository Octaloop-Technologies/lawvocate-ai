import React from "react";
import "./plans.scss";
function Plans() {
  return (
    <section className="plans-sec">
      <div className="top">
        <h2>
          Choose the plan that suits <span>your needs</span>
        </h2>
        <p className="para">
          unlocks the full potential of Legal AI Agent for your specific legal
          operations
        </p>
      </div>
      <div className="plans-cards">
        <div className="ist">
          <p className="plan-type">Basic</p>
          <div className="price">
            <h3>$9.99</h3>
            <p>/Month</p>
          </div>
          <button className="started">Get Started</button>
          <div className="lists">
            <div className="list">
              <img src="/assets/icons/tick.svg" alt="..." />
              <p>Tools for research, drafting, contracts.</p>
            </div>
            <div className="list">
              <img src="/assets/icons/tick.svg" alt="..." />
              <p>Small-scale, affordable, email support.</p>
            </div>
          </div>
        </div>
        <div className="second">
          <img src="/assets/images/popular.svg" alt="..." className="popular" />
          <p className="plan-type">Premium</p>
          <div className="price">
            <h3>$19.99</h3>
            <p>/Month</p>
          </div>
          <button className="started">Get Started</button>
          <div className="lists">
            <div className="list">
              <img src="/assets/icons/tick.svg" alt="..." />
              <p>Tools for research, drafting, contracts.</p>
            </div>
            <div className="list">
              <img src="/assets/icons/tick.svg" alt="..." />
              <p>Small-scale, affordable, email support.</p>
            </div>
            <div className="list">
              <img src="/assets/icons/tick.svg" alt="..." />
              <p>Small-scale, affordable, email support.</p>
            </div>
          </div>
        </div>
        <div className="third">
          <p className="plan-type">Advance</p>
          <div className="price">
            <h3>$99.99</h3>
            <p>/Month</p>
          </div>
          <button className="started">Get Started</button>
          <div className="lists">
            <div className="list">
              <img src="/assets/icons/tick.svg" alt="..." />
              <p>Tools for research, drafting, contracts.</p>
            </div>
            <div className="list">
              <img src="/assets/icons/tick.svg" alt="..." />
              <p>Small-scale, affordable, email support.</p>
            </div>
            <div className="list">
              <img src="/assets/icons/tick.svg" alt="..." />
              <p>Small-scale, affordable, email support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;

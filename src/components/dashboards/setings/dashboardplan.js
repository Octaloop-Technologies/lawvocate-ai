import React from "react";
import Cardlogo from "../../../assets/images/smalltag.png";
import Tick from "../../../assets/images/tick.svg";

const Dashboardplan = () => {
  return (
    <>
      <div className="dashboardplan">
        <section className="plans-sections">
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
                  <img src={Tick} alt="..." />
                  <p>Tools for research, drafting, contracts.</p>
                </div>
                <div className="list">
                  <img src={Tick} alt="..." />
                  <p>Small-scale, affordable, email support.</p>
                </div>
              </div>
            </div>
            <div className="second">
              <img
                // src="/assets/images/popular.svg"
                src={Cardlogo}
                alt="..."
                className="popular"
              />
              <p className="plan-type">Premium</p>
              <div className="price">
                <h3>$19.99</h3>
                <p>/Month</p>
              </div>
              <button className="started">Get Started</button>
              <div className="lists">
                <div className="list">
                  <img src={Tick} alt="..." />
                  <p>Tools for research, drafting, contracts.</p>
                </div>
                <div className="list">
                  <img src={Tick} alt="..." />
                  <p>Small-scale, affordable, email support.</p>
                </div>
                <div className="list">
                  <img src={Tick} alt="..." />
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
                  <img src={Tick} alt="..." />
                  <p>Tools for research, drafting, contracts.</p>
                </div>
                <div className="list">
                  <img src={Tick} alt="..." />
                  <p>Small-scale, affordable, email support.</p>
                </div>
                <div className="list">
                  <img src={Tick} alt="..." />
                  <p>Small-scale, affordable, email support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboardplan;

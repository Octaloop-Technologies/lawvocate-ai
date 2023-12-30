import React from "react";
import "./features.scss";
function Features() {
  return (
    <section className="features-sec">
      <div className="head">
        <h2>
          features of <span>lawvocate ai</span>
        </h2>
        <p className="para-large ">
          Transform your legal workflow with AI: research, draft, negotiate, get
          answers instantly, and stay compliant effortlessly. Elevate your
          operations today
        </p>
      </div>
      <div className="feature-cards">
        <div className="top-cards">
          <div className="ist">
            <img src="/assets/images/card1.png" alt="..." />
            <h5>Draft Legal Documents</h5>
            <p className="para">
              Effortlessly generate accurate and professionally crafted legal
              documents tailored to your specific needs with Legal AI Agent's
              advanced drafting capabilities.
            </p>
          </div>
          <div className="second">
            <img src="/assets/images/card2.png" alt="..." />
            <h5>Research Legal Issues</h5>
            <p className="para">
              Legal AI Agent provides comprehensive research capabilities,
              helping you stay informed about the latest legal developments and
              precedents.
            </p>
          </div>
        </div>
        <div className="bottom-cards">
          <div className="ist">
            <img src="/assets/images/card3.png" alt="..." />
            <h5>Answer Legal Questions</h5>
            <p className="para">
              Get quick and reliable answers to your legal queries, enhancing
              your decision-making process and minimizing uncertainties.
            </p>
          </div>
          <div className="ist">
            <img src="/assets/images/card4.png" alt="..." />
            <h5>Compliance Guidance</h5>
            <p className="para">
              Navigate complex legal landscapes confidently with Legal AI Agent,
              receiving real-time compliance guidance to ensure your operations
              adhere to the latest regulations.
            </p>
          </div>
          <div className="ist">
            <img src="/assets/images/card5.png" alt="..." />
            <h5>Personalized for you</h5>
            <p className="para">
              Navigate complex legal landscapes confidently with Legal AI Agent,
              receiving real-time compliance guidance to ensure your operations
              adhere to the latest regulations.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/features1.png"
        alt="..."
        className="featuresimg"
      />
    </section>
  );
}

export default Features;

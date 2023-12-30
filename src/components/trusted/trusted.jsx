import React from "react";
import "./trusted.scss";
function Trusted() {
  return (
    <section className="trusted-sec">
      <div className="top">
        <h2>
          <span>TRUSTED</span> BY
        </h2>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus
          leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim
          urna eu iaculis
        </p>
      </div>
      <div className="trusted-cards">
        <div>
          <img
            src="/assets/images/trusted1.svg"
            alt="..."
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src="/assets/images/trusted2.svg"
            alt="..."
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src="/assets/images/trusted3.svg"
            alt="..."
            className="img-fluid"
          />
        </div>
      </div>
      <img src="/assets/images/trusted.png" alt="..." className="trustedimg" />
    </section>
  );
}

export default Trusted;

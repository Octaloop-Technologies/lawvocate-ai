import React from "react";
import "./security.scss";
function Security() {
  return (
    <section className="security-sec">
      <div className="top">
        <h2>
          <span>security</span> standards
        </h2>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus
          leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim
          urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel,
          imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull
          amcorper lectus
        </p>
      </div>
      <div className="security-cards">
        {data.map((item, index) => (
          <div className="security-card">
            <img src={item.imgsrc} alt="..." className="icon-img" />
            <h6>{item.heading}</h6>
            <a href="#">
              Learn more <img src="/assets/icons/rightarrow.svg" alt="..." />{" "}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Security;

const data = [
  {
    imgsrc: "/assets/icons/security1.svg",
    heading: "SOC2 l",
  },
  {
    imgsrc: "/assets/icons/security1.svg",
    heading: "SOC2 ll",
  },
  {
    imgsrc: "/assets/icons/security3.svg",
    heading: "ISO 27001",
  },
  {
    imgsrc: "/assets/icons/security4.svg",
    heading: "CCPA",
  },
  {
    imgsrc: "/assets/icons/security4.svg",
    heading: "CCPR",
  },
];

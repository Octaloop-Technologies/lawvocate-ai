import React from "react";
import "./benefits.scss";
function Benifits() {
  return (
    <section className="benifits-sec">
      <div className="top">
        <h2>
          Why <span>lawvocate ai</span> benefits that help us stands out
        </h2>
        <p className="para-large">
          Transform your legal workflow with AI: research, draft, negotiate, get
          answers instantly, and stay compliant effortlessly. Elevate your
          operations today
        </p>
      </div>
      <div className="benefits-cards">
        {data.map((item, index) => (
          <div className="benefit-card">
            <img src={item.imgsrc} alt="..." />
            <h6>{item.heading}</h6>
            <p className="para">{item.para}</p>
          </div>
        ))}
        <img
          src="/assets/images/benefitscenter.png"
          alt="..."
          className="benefitsimg"
        />
      </div>
      <img
        src="/assets/images/benefitsright.png"
        alt="..."
        className="benefitsimgright"
      />
    </section>
  );
}

export default Benifits;

const data = [
  {
    imgsrc: "/assets/icons/fast.svg",
    heading: "Fast",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. leo, Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi.",
  },
  {
    imgsrc: "/assets/icons/call.svg",
    heading: "Call Scheduling",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. leo, Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi.",
  },
  {
    imgsrc: "/assets/icons/cost.svg",
    heading: "Cost-Effective",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. leo, Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi.",
  },
  {
    imgsrc: "/assets/icons/service.svg",
    heading: "24/7 service",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. leo, Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi.",
  },
  {
    imgsrc: "/assets/icons/privacy.svg",
    heading: "Privacy",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. leo, Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi.",
  },
];

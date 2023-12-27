import React from "react";
import "./serves.scss";
function Serves() {
  return (
    <section className="serves-sec">
      <div className="top">
        <h2>
          Who <span>lawvocate ai</span> serves best?
        </h2>
        <p className="para">
          These are our current Markets or use cases)We can Adapt the AI Agent
          for several markets including those below- Ask for your specific needs
          and we will review our Roadmap for when it may become available-
          Schedule time to discuss customizations with our team
        </p>
      </div>
      <div className="serves-cards">
        {data.map((item, index) => (
          <div className="ist">
            <div className="real-cover"></div>
            <div className="real-border"></div>
            <img src={item.imgsrc} alt="..." className="real-icon" />
            <h5>{item.heading}</h5>
            <p className="para">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Serves;

const data = [
  {
    imgsrc: "/assets/icons/realestate.svg",
    heading: "Real Estate",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis.",
  },
  {
    imgsrc: "/assets/icons/law.svg",
    heading: "Law",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis.",
  },
  {
    imgsrc: "/assets/icons/education.svg",
    heading: "Education",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis.",
  },
  {
    imgsrc: "/assets/icons/finance.svg",
    heading: "Finance",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis.",
  },
  {
    imgsrc: "/assets/icons/entertainment.svg",
    heading: "Entertainment",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim urna eu iaculis.",
  },
];

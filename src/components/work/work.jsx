import React from "react";
import "./work.scss";
function Work() {
  return (
    <section className="work-sec">
      <div className="top">
        <h2>
          Here are several ways that Our <span>lawvocate AI</span> Agent can
          work for you
        </h2>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus
          leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim
          urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel,
          imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull
          amcorper lectus
        </p>
      </div>
      <div className="work-cards">
        {data.map((item, index) => (
          <div className="work-card">
            <img src={item.imgsrc} alt="..." />
            <p
              className="para"
              style={{ fontWeight: "700", lineHeight: "140%" }}
            >
              {item.heading}
            </p>
            <p className="para">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;

const data = [
  {
    imgsrc: "/assets/icons/create.svg",
    heading: "Create Boilerplate Clauses",
    para: "Generate standard adaptable clauses for agreements, saving time drafting contracts",
  },
  {
    imgsrc: "/assets/icons/complaint.svg",
    heading: "Consumer Compliant Letter",
    para: "Dispute invoice you think unjustified, asking the bot to write letter requesting credit",
  },
  {
    imgsrc: "/assets/icons/prompts.svg",
    heading: "Prompts for immigration lawyers",
    para: "Increase efficiency in searching for information related to immigration policies.",
  },
  {
    imgsrc: "/assets/icons/family.svg",
    heading: "Prompts for family lawyers",
    para: "Reduce the time spent searching for information using family law prompts",
  },
  {
    imgsrc: "/assets/icons/demand.svg",
    heading: "Demand Letter",
    para: "Ask the bot to draft a letter formally requesting payment or resolution of a dispute.",
  },
  {
    imgsrc: "/assets/icons/legal.svg",
    heading: "Legal compliance",
    para: "We can help you comply with jurisprudential requirements.",
  },
  {
    imgsrc: "/assets/icons/termination.svg",
    heading: "Termination Letter",
    para: "A written notice to end a contractual agreement.",
  },
  {
    imgsrc: "/assets/icons/support.svg",
    heading: "Child support",
    para: "Consult with artificial intelligence regarding child benefits.",
  },
];

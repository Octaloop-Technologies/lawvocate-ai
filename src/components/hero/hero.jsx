import { useState, useEffect } from "react";
import "./hero.scss";
import Navbar from "../navbar/navbar";
function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      <img
        src="/assets/images/topscroll.svg"
        alt="..."
        className="topscroll"
        style={{ display: `${scrollPosition > 1080 ? "" : "none"}` }}
        onClick={() => window.scrollTo(0, 0)}
      />
      <img
        src="/assets/images/banner1.png"
        alt="..."
        className="herofirstimg"
      />
      <img
        src="/assets/images/banner2.png"
        alt="..."
        className="herosecondimg"
      />
    </section>
  );
}

export default Hero;

import { useEffect, useState } from "react";
import "./App.css";
import Benifits from "./components/benefits/benifits";
import Contactus from "./components/contactus/contactus";
import Faq from "./components/faq/faq";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Negotiatecontact from "./components/negoniatecontract/negotiatecontact";
import Plans from "./components/plans/plans";
import Reviews from "./components/reviews/reviews";
import Security from "./components/security/security";
import Serves from "./components/serves/serves";
import Testimonials from "./components/testimonials/testimonials";
import Trusted from "./components/trusted/trusted";
import Work from "./components/work/work";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <img
        src="/assets/images/topscroll.svg"
        alt="..."
        className="topscroll"
        style={{
          display: `${scrollPosition > 1080 ? "" : "none"}`,
        }}
        onClick={scrollToTop}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

      <></>
    </div>
  );
}

export default App;

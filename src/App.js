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

function App() {
  return (
    <div className="App">
      <>
        <Hero />
        <Features />
        <Negotiatecontact />
        <Work />
        <Serves />
        <Benifits />
        <Testimonials />
        <Reviews />
        <Trusted />
        <Security />
        <Plans />
        <Faq />
        <Contactus />
        <Footer />
      </>
    </div>
  );
}

export default App;

import React from "react";
import Hero from "../hero/hero";
import Features from "../features/features";
import Negotiatecontact from "../negoniatecontract/negotiatecontact";
import Serves from "../serves/serves";
import Benifits from "../benefits/benifits";
import Testimonials from "../testimonials/testimonials";
import Trusted from "../trusted/trusted";
import Plans from "../plans/plans";
import Faq from "../faq/faq";
import Contactus from "../contactus/contactus";
import Work from "../work/work";
import Reviews from "../reviews/reviews";
import Security from "../security/security";
import Footer from "../footer/footer";

function Home() {
  return (
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
  );
}

export default Home;

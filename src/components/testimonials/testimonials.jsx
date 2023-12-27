import React from "react";
import "./testimonials.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "./customarrow";
const leftArrowImg = "/assets/icons/leftslider.svg";
const rightArrowImg = "/assets/icons/rightslider.svg";
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: (
      <div>
        <img src="/assets/icons/rightslider.svg" alt="" />
      </div>
    ),
    prevArrow: (
      <div>
        {" "}
        <img src="/assets/icons/leftslider.svg" alt="" />
      </div>
    ),
  };
  return (
    <section className="testimonials-sec">
      <div className="top">
        <h2>
          our <span>clients</span> say about us
        </h2>
        <p className="para">
          It's not just cutting-edge; it's the future reimagined
        </p>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          <div className="ist">
            <img src="/assets/images/client.png" alt="..." />
            <p className="para">
              “Lorem ipsum dolor sit amet consectetur. Eu in adipiscing vivamus
              ultricies eu id donec. Euelementum commodo tincidunt massa. Urna
              donec id scelerisqueLorem ipsum dolor sit amet consectetur. Eu in
              adipiscing vivamus ultricies eu id donec. Euelementum commodo
              tincidunt massa. Urna donec id scelerisque”
            </p>
            <h5>Steve</h5>
          </div>
          <div className="ist">
            <img src="/assets/images/client.png" alt="..." />
            <p className="para">
              “Lorem ipsum dolor sit amet consectetur. Eu in adipiscing vivamus
              ultricies eu id donec. Euelementum commodo tincidunt massa. Urna
              donec id scelerisqueLorem ipsum dolor sit amet consectetur. Eu in
              adipiscing vivamus ultricies eu id donec. Euelementum commodo
              tincidunt massa. Urna donec id scelerisque”
            </p>
            <h5>Steve</h5>
          </div>
          <div className="ist">
            <img src="/assets/images/client.png" alt="..." />
            <p className="para">
              “Lorem ipsum dolor sit amet consectetur. Eu in adipiscing vivamus
              ultricies eu id donec. Euelementum commodo tincidunt massa. Urna
              donec id scelerisqueLorem ipsum dolor sit amet consectetur. Eu in
              adipiscing vivamus ultricies eu id donec. Euelementum commodo
              tincidunt massa. Urna donec id scelerisque”
            </p>
            <h5>Steve</h5>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;

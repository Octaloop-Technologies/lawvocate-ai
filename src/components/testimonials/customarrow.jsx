import React from "react";

const CustomArrow = ({ onClick, src, alt }) => (
  <button className="slick-arrow " onClick={onClick}>
    <img src={src} alt={alt} />
  </button>
);

export default CustomArrow;

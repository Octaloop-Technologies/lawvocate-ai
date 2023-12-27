import React from "react";
import "./reviews.scss";
function Reviews() {
  return (
    <section className="reviews-sec">
      <div className="left">
        <img
          src="/assets/images/reviewleft.png"
          alt="..."
          className="reviewlogo"
        />
        <div className="stars">
          <div className="top">
            <h6>4.9</h6>
            <div>
              <img src="/assets/icons/Star1.svg" alt="..." />
              <img src="/assets/icons/Star1.svg" alt="..." />
              <img src="/assets/icons/Star1.svg" alt="..." />
              <img src="/assets/icons/Star1.svg" alt="..." />
              <img src="/assets/icons/Star2.svg" alt="..." />
            </div>
          </div>
          <span>65+ Reviews</span>
        </div>
      </div>
      <div className="right">
        <img src="/assets/images/reviewbar.png" alt="..." />
        <span>
          of reviewers recommend <br /> lawvocate aI
        </span>
      </div>
    </section>
  );
}

export default Reviews;

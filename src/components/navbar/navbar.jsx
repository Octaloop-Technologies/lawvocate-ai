import React from "react";
import "./navbar.scss";
function Navbar() {
  return (
    <section className="navbar-sec">
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#">
          <img src="/assets/images/logo.svg" alt="..." />{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav  mx-auto navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Affiliate
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About us
              </a>
            </li>
          </ul>

          <button class="submit-btn">Contact Us</button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;

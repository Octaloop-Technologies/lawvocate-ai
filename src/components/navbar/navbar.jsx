import React, { useState } from "react";
import "./navbar.scss";
import Hamburger from "hamburger-react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="navbar-sec">
      <nav class="navbar navbar-expand-lg ">
        <a
          class="navbar-brand"
          onClick={() => {
            location.pathname == "/" ? window.scrollTo(0, 0) : navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
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
          <Hamburger toggled={isOpen} toggle={setOpen} />
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

import React from "react";
import "./footer.scss";
import { Icon } from "@iconify/react";
function Footer() {
  return (
    <section className="footer">
      <div className="top">
        <div className="left">
          <img src="/assets/images/logo.svg" alt="..." className="logo" />
          <span>
            Streamlining Customer Interactions, Appointment Scheduling, and
            Contracts for Real Estate and Legal Professionals
          </span>
          <div className="social-icons">
            <a href="#">
              <Icon icon="ic:baseline-discord" />
            </a>
            <a href="#">
              <Icon icon="iconoir:instagram" />{" "}
            </a>
            <a href="#">
              <Icon icon="ic:baseline-facebook" />
            </a>
            <a href="#">
              <Icon icon="pajamas:twitter" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="ist">
            <h5>Explore</h5>
            <div>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <a href="#">Affiliate</a>
            </div>
          </div>
          <div className="ist">
            <h5>Product</h5>
            <div>
              <a href="#">Tags</a>
              <a href="#">API</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className="ist">
            <h5>Pages</h5>
            <div>
              <a href="#">Community</a>
              <a href="#">Support</a>
              <a href="#">Terms of service</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>@2023 Lawvocate AI. All Rights Reserved</span>
      </div>
    </section>
  );
}

export default Footer;

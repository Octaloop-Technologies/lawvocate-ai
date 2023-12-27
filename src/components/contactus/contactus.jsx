import React from "react";
import "./contactus.scss";
function Contactus() {
  return (
    <section className="contact-sec">
      <div className="contact-card">
        <h2>CONTACT US</h2>
        <div className="fields-div">
          <div className="ist">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="number" placeholder="Phone No." />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Description"></textarea>
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </section>
  );
}

export default Contactus;

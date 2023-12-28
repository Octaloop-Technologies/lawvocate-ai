import React, { useState } from "react";
import "./faq.scss";

import { Accordion } from "react-bootstrap";
function Faq() {
  return (
    <section className="faq-sec">
      <div className="top">
        <h2>
          got <span>question</span>?
        </h2>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
      </div>
      <Accordion className="questionaccordian">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img src="/assets/icons/dot.svg" alt="..." />
            What is lawvocate AI?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            <img src="/assets/icons/dot.svg" alt="..." />
            Who is your platform for?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {" "}
            <img src="/assets/icons/dot.svg" alt="..." />
            How to start using AI Lawyer?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {" "}
            <img src="/assets/icons/dot.svg" alt="..." />
            Will AI replace lawyers?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam .
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Faq;

import React from "react";
import "./Footer.scss";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="footer">
      <div id="div1">
        <h6>Contact</h6>
        <p>
          Request a Test Drive
          <br />
          Book Car
          <br />
          Career
          <br />
          Contact Us
        </p>
      </div>
      <div id="div2">
        <h6>Tradeurcars:</h6>
        <p>
          Xtremecars: 12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi
          Mumbai - 400705. Maharashtra, India. Phone: +91 (22) 612 800000
        </p>
      </div>
      <div id="div3">
        <h6>Legal</h6>
        <p>
          Legal Legal Disclaimer/Imprint <br /> Privacy Policy <br />
          Cookie Policy
        </p>
      </div>
      <div id="div4">
        <h6>Contact with us</h6>
        <p>
          <Facebook />
          <br />
          <Instagram />
          <br />
          <Twitter />
        </p>
      </div>
    </div>
  );
}

export default Footer;

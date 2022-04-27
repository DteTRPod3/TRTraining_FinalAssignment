import React from "react";
import "./Footer.scss";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
       <footer className="bg-dark text-white footer--layout">
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-left">
                <h5 data-testid="contact">Contact</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/test_drive" className="text-white linkStyling">
                      Request a Test Drive
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white linkStyling">
                      Book Car
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-white linkStyling">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-white linkStyling" data-testid="contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-left">
                <h5>Xtremecars</h5>
                <address>
                  12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai
                  - 400705. Maharashtra, India.
                </address>
                <a href="tel:+13115552368" className="formatLink">Phone :- (311) 555-2368</a>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-left">
                <h5>Legal</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white linkStyling">
                      Legal Disclaimer/Imprint
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white linkStyling">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white linkStyling">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-left">
                <h5>Connect With Us</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white linkStyling">
                    <div className="instagram--icon"></div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white linkStyling">
                      <div className="twitter--icon"></div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white linkStyling">
                      <div className="facebook--icon"></div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;

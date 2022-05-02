import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./PolicyPage.scss";

function PolicyPage() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.title = "Xtreme Cars | Policy Page";
  }, []);
  return (
    <>
      <Container>
        <header className="policy-header">
          <h2>Privacy Policy</h2>
        </header>
        <hr></hr>
        <main>
          <section className="policy-introduction">
            <p>
              This privacy policy has been compiled to better serve those who
              are concerned with how their &apos;Personally Identifiable
              Information&apos; (PII) is being used online. PII, as described in
              US privacy law and information security, is information that can
              be used on its own or with other information to identify, contact,
              or locate a single person, or to identify an individual in
              context. Please read our privacy policy carefully to get a clear
              understanding of how we collect, use, protect or otherwise handle
              your Personally Identifiable Information in accordance with our
              website.
            </p>
          </section>
          <article>
            <section>
              <h6>
                What personal information do we collect from the people that
                visit our blog, website or app?
              </h6>
              <p>
                When ordering or registering on our site, as appropriate, you
                may be asked to enter your name, email address, mailing address,
                phone number or other details to help you with your experience.
              </p>
            </section>
            <section>
              <h6>How do we use your information</h6>
              <p>
                We may use the information we collect from you when you
                register, make a purchase, sign up for our newsletter, respond
                to a survey or marketing communication, surf the website, or use
                certain other site features in the following ways:
              </p>
              <ul>
                <li>
                  To allow us to better service you in responding to your
                  customer service requests.
                </li>
                <li>To quickly process your transactions.</li>
              </ul>
            </section>
            <section>
              <h6>How do we protect your information?</h6>
              <ul>
                <li>
                  We do not use vulnerability scanning and/or scanning to PCI
                  standards.
                </li>
                <li>
                  We only provide articles and information. We never ask for
                  credit card numbers.
                </li>
                <li>We use regular Malware Scanning.</li>
                <li>We do not use an SSL certificate</li>
                <li>
                  We only provide articles and information. We never ask for
                  personal or private information like names, email addresses,
                  or credit card numbers.
                </li>
              </ul>
            </section>
            <section>
              <h6>Do we use &apos;cookies&apos;?</h6>
              <p>
                We do not use cookies for tracking purposes You can choose to
                have your computer warn you each time a cookie is being sent, or
                you can choose to turn off all cookies. You do this through your
                browser settings.
              </p>
              <p>
                Since browser is a little different, look at your
                browser&aspos;s Help Menu to learn the correct way to modify
                your cookies.
              </p>
              <p>
                If you turn cookies off, Some of the features that make your
                site experience more efficient may not function properly.that
                make your site experience more efficient and may not function
                properly.
              </p>
            </section>
            <section>
              <h6>Third-party disclosure</h6>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties
                your Personally Identifiable Information
              </p>
            </section>
            <section>
              <h6>Third-party links</h6>
              <p>
                We do not include or offer third-party products or services on
                our website.
              </p>
            </section>
            <section>
              <h6>Google</h6>
              <p>
                Google&apos;s advertising requirements can be summed up by
                Google&apos;s Advertising Principles. They are put in place to
                provide a positive experience for users.
                <a rel="noopener noreferrer" href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">
                  https://support.google.com/adwordspolicy/answer/1316548?hl=en
                </a>
              </p>
              <p>We use Google AdSense Advertising on our website.</p>
              <p>
                Google, as a third-party vendor, uses cookies to serve ads on
                our site. Google&aspos;s use of the DART cookie enables it to
                serve ads to our users based on previous visits to our site and
                other sites on the Internet. Users may opt-out of the use of the
                DART cookie by visiting the Google Ad and Content Network
                privacy policy.
              </p>
              <ul>
                <b>We have implemented the following:</b>
                <li>Remarketing with Google AdSense</li>
                <li>Demographics and Interests Reporting</li>
              </ul>
            </section>
            <section>
              <h6>California Online Privacy Protection Act</h6>
              <p>
                CalOPPA is the first state law in the nation to require
                commercial websites and online services to post a privacy
                policy. The law&apos;s reach stretches well beyond California to
                require any person or company in the United States (and
                conceivably the world) that operates websites collecting
                Personally Identifiable Information from California consumers to
                post a conspicuous privacy policy on its website stating exactly
                the information being collected and those individuals or
                companies with whom it is being shared.{" "}
                <span>
                  – See more at:{" "}
                  <a rel="noopener noreferrer" href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf">
                    http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf
                  </a>
                </span>
              </p>
            </section>
            <section>
              <h6>According to CalOPPA, we agree to the following:</h6>
              <p>Users can visit our site anonymously.</p>
              <p>
                Once this privacy policy is created, we will add a link to it on
                our home page or as a minimum, on the first significant page
                after entering our website.
              </p>
              <p>
                Our Privacy Policy link includes the word &apos;Privacy&apos;
                and can easily be found on the page specified above.
              </p>
              <ul>
                You will be notified of any Privacy Policy changes:
                <li>On our Privacy Policy Page</li>
              </ul>
              <ul>
                Can change your personal information:
                <li> By emailing us</li>
              </ul>
            </section>
            <section>
              <h6>COPPA (Children Online Privacy Protection Act)</h6>
              <p>
                When it comes to the collection of personal information from
                children under the age of 13 years old, the Children&apos;s
                Online Privacy Protection Act (COPPA) puts parents in control.
                The Federal Trade Commission, United States&apos; consumer
                protection agency, enforces the COPPA Rule, which spells out
                what operators of websites and online services must do to
                protect children&apos;s privacy and safety online.
              </p>
            </section>
            <section>
              <h6>CAN SPAM Act</h6>
              <p>
                The CAN-SPAM Act is a law that sets the rules for commercial
                email, establishes requirements for commercial messages, gives
                recipients the right to have emails stopped from being sent to
                them, and spells out tough penalties for violations.
              </p>
              <ul>
                <li>
                  Send information, respond to inquiries, and/or other requests
                  or questions
                </li>
                <li>
                  Process orders and to send information and updates pertaining
                  to orders.
                </li>
              </ul>
              <ul>
                <li>
                  Not use false or misleading subjects or email addresses.
                </li>
                <li>
                  Identify the message as an advertisement in some reasonable
                  way.
                </li>
                <li>
                  Include the physical address of our business or site
                  headquarters.
                </li>
                <li>
                  Monitor third-party email marketing services for compliance,
                  if one is used.
                </li>
                <li> Honor opt-out/unsubscribe requests quickly.</li>
                <li>
                  Allow users to unsubscribe by using the link at the bottom of
                  each email.
                </li>
              </ul>
            </section>
            <section>
              <h6>Contacting Us</h6>
              <p>
                If there are any questions regarding this privacy policy, you
                may contact us using the information below.
              </p>
              <Link to="/">https://xtremecars.in/</Link>
              <address>
                7A, Knowledge Park 3 Greater Noida, Uttar Pradesh 201310 India
              </address>
              <p>admissions.gmi@gmail.com</p>
              <p>
                <i>Last edited on :</i> 2017-12-20
              </p>
            </section>
          </article>
          <hr></hr>
        </main>
      </Container>
    </>
  );
}

export default PolicyPage;

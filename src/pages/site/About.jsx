import ContactHeader from "../../components/site/ContactHeader";

function About() {
  return (
    <div className="about">
      <ContactHeader>About Us</ContactHeader>
      <div className="about-ngo">
        <img src="assets/main.png" alt="logo" />
        <div>
          <h2>About Sahkarya,</h2>
          <p>
            Sahkarya is a nonprofit organization based in Pune, dedicated to
            bridging educational gaps in underserved communities. Since our
            inception, we have reached hundreds of children with the tools and
            opportunities they need to thrive.
          </p>
        </div>
      </div>
      <div className="about-values">
        <div className="values">
          <h4>Our Mission</h4>
          <p>
            To empower every child and youth with access to quality education,
            regardless of their socio-economic background, and to enable them to
            lead lives of dignity, opportunity, and purpose.
          </p>
        </div>
        <div className="mission">
          <h4>Our Vision</h4>
          <p>
            A world where every child has the opportunity to learn, grow, and
            fulfill their potential — creating a more just, equitable, and
            educated society.
          </p>
        </div>
        <div className="vision">
          <h4>Our Values</h4>
          <ul>
            <li>
              <h5>
                Equity:{" "}
                <span>We believe in equal opportunity for every learner.</span>
              </h5>
            </li>
            <li>
              <h5>
                Integrity: <span>Transparency and honesty guide our work.</span>
              </h5>
            </li>
            <li>
              <h5>
                Community-Driven:{" "}
                <span>We grow with and through the communities we serve.</span>
              </h5>
            </li>
            <li>
              <h5>
                Sustainability:{" "}
                <span>Building long-term, meaningful impact.</span>
              </h5>
            </li>
            <li>
              <h5>
                Empowerment:{" "}
                <span>
                  Enabling children to become confident, independent thinkers.
                </span>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

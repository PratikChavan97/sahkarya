import { Link } from "react-router-dom";
import "./module.Footer.css";

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div>
          <h3>About Sahkarya Foundation</h3>
          <img src="assets/main.png" alt="logo" />
          <p>
            Sahkarya Eduactional & Social Foundation is a nonprofit organization
            based in Pune, dedicated to bridging educational gaps in underserved
            communities.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
            }}
          >
            <strong>Regd. No. MH1111/2012, Pune | 40387 (P)</strong>
            <br />
            12A No. ABDTS6760MF20231/80G No.ABDTS6760MF2023101
          </p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div className="contact">
            <i
              className="fa-solid fa-house"
              style={{
                backgroundColor: "#FEF9C4",
                borderRadius: "50%",
                padding: "0.8rem",
                fontSize: "1.5rem",
              }}
            ></i>
            <div>
              <h5>Address</h5>
              <p>Sadesatra Nali, Hadapsar, Pune, India</p>
            </div>
          </div>
          <div className="contact">
            <i
              className="fa-solid fa-phone-volume"
              style={{
                backgroundColor: "#FEF9C4",
                borderRadius: "50%",
                padding: "0.8rem",
                fontSize: "1.5rem",
              }}
            ></i>
            <div>
              <h5>Phone</h5>
              <p>7218656565 / 9763661212</p>
            </div>
          </div>
          <div className="contact">
            <i
              className="fa-solid fa-envelope-open"
              style={{
                backgroundColor: "#FEF9C4",
                borderRadius: "50%",
                padding: "0.8rem",
                fontSize: "1.5rem",
              }}
            ></i>
            <div>
              <h5>Email</h5>
              <p>sahakarya.pune@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="quick-links">
            <Link to="/">&gt; Home</Link>
            <Link to="/events">&gt; Events</Link>
            <Link to="/gallery">&gt; Gallery</Link>
            <Link to="/about">&gt; About</Link>
            <Link to="/contact">&gt; Contact</Link>
            <Link to="/volunteer">&gt; Volunteer</Link>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <p>
            &copy; 2025, Sahkarya Educational & Social Foundation. All Rights
            Reserved
          </p>
        </div>
        <div className="conditions">
          <Link to="/privacy-policy">
            <i
              className="fa-solid fa-unlock"
              style={{
                color: "#fff",
              }}
            ></i>{" "}
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions">
            <i
              className="fa-solid fa-file-contract"
              style={{
                color: "#fff",
              }}
            ></i>{" "}
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

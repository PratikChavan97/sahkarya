import { Link } from "react-router-dom";
import "./module.Footer.css";

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div>
          <h3>About Sahkarya</h3>
          <p>Description</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div className="contact">
            <i
              class="fa-solid fa-house"
              style={{
                backgroundColor: "#FEF9C4",
                borderRadius: "50%",
                padding: "0.8rem",
                fontSize: "1.5rem",
              }}
            ></i>
            <div>
              <h5>Address</h5>
              <p>Street Name, London, UK</p>
            </div>
          </div>
          <div className="contact">
            <i
              class="fa-solid fa-phone-volume"
              style={{
                backgroundColor: "#FEF9C4",
                borderRadius: "50%",
                padding: "0.8rem",
                fontSize: "1.5rem",
              }}
            ></i>
            <div>
              <h5>Phone</h5>
              <p>+91 123-456-789</p>
            </div>
          </div>
          <div className="contact">
            <i
              class="fa-solid fa-envelope-open"
              style={{
                backgroundColor: "#FEF9C4",
                borderRadius: "50%",
                padding: "0.8rem",
                fontSize: "1.5rem",
              }}
            ></i>
            <div>
              <h5>Email</h5>
              <p>admin@youdomain.com</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="quick-links">
            <Link to="/">&gt; Home</Link>
            <Link to="/projects">&gt; Projects</Link>
            <Link to="/blogs">&gt; Blogs</Link>
            <Link to="/about">&gt; About</Link>
            <Link to="/contact">&gt; Contact</Link>
            <Link to="/volunteer">&gt; Volunteer</Link>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <p>&copy; 2025, Sahkarya Organisation. All Rights Reserved</p>
        </div>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link, NavLink } from "react-router-dom";
import "./module.Header.css";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <header>
      <div className="top">
        <div className="contact">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span>Hadapsar, Pune</span>
          </div>
          <div>
            <i className="fa-solid fa-headphones"></i>
            <span>7218656565 / 9763661212</span>
          </div>
          <div>
            <Link to="mailto:sahakarya.pune@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              <span>sahakarya.pune@gmail.com</span>
            </Link>
          </div>
        </div>

        <div className="socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>

      <Navbar expand="lg" className="navi">
        <NavLink to="/">
          <img
            src="assets/main.png"
            alt="logo"
            style={{
              width: "6rem",
            }}
          />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="nav-links" id="basic-navbar-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/volunteer">Volunteer</NavLink>
          <NavLink to="/dashboard">
            <i className="fa-solid fa-user"></i>
          </NavLink>
          <button>Donate Now</button>
        </Navbar.Collapse>
      </Navbar>
      {/* <button className="donate-btn">Donate Now</button> */}
    </header>
  );
}

export default Header;

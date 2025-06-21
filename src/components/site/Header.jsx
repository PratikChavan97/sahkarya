import { NavLink } from "react-router-dom";
import "./module.Header.css";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <header>
      <div className="top">
        <div className="contact">
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <span>Street Name, UK, London</span>
          </div>
          <div>
            <i class="fa-solid fa-headphones"></i>
            <span>132-456-789</span>
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <span>admin@youdomain.com</span>
          </div>
        </div>

        <div className="socials">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>

      <Navbar expand="lg" className="navi">
        <NavLink to="/">
          <img src="assets/logo.svg" alt="logo" />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="nav-links" id="basic-navbar-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button>Be a Volunteer</button>
        </Navbar.Collapse>
      </Navbar>
      <button className="donate-btn">Donate Now</button>
    </header>
  );
}

export default Header;

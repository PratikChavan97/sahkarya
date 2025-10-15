import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./module.Header.css";

function Header({ update }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="header">
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

        <nav className="navi">
          <div>
            <img src="assets/main.png" alt="logo" />
          </div>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events" className="nav-events">
              Events
            </NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/volunteer">Volunteer</NavLink>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </div>

          <div>
            <button className="donate-nav-btn" onClick={() => update()}>
              Donate Now
            </button>
          </div>
          <button onClick={() => setVisible((visible) => !visible)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
      </header>

      {visible && (
        <div className="floating-nav-left">
          <button
            className="toggle-visible"
            onClick={() => setVisible((visible) => !visible)}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

          <nav className="floating-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/volunteer">Volunteer</NavLink>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-user"></i>
            </NavLink>
            <div>
              <button className="donate-nav-btn" onClick={() => update()}>
                Donate Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;

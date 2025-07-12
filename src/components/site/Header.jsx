import { Link, NavLink } from "react-router-dom";
import "./module.Header.css";
import { useState } from "react";

function Header({ update }) {
  const [visible, setVisible] = useState();

  return (
    <>
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
            <NavLink to="/events">Events</NavLink>
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
            X
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
    </>
  );
}

export default Header;

import { useState } from "react";
import "./module.WelcomeOrganisation.css";

function WelcomeOrganisation() {
  const [active, setActive] = useState("education");
  return (
    <div className="welcome">
      <div className="welcome-intro">
        <img src="assets/main.png" alt="logo" />
        <h2>Welcome to Sahakarya Educational & Social Foundation</h2>
        {/* <h3>He who had never denied himself for the sake of giving</h3> */}
      </div>
      <div className="welcome-story">
        <div className="welcome-story-imgs">
          <div className="welcome-img-bg"></div>
          <img src="assets/demo-2.webp" alt="children-smiling" />
        </div>
        <div className="welcome-story-data">
          <div className="welcome-btns">
            <button
              className={active === "education" ? "active" : ""}
              onClick={() => setActive("education")}
            >
              Educational Facilities
            </button>
            <button
              className={active === "medical" ? "active" : ""}
              onClick={() => setActive("medical")}
            >
              Medical Facilities
            </button>
            <button
              className={active === "health" ? "active" : ""}
              onClick={() => setActive("health")}
            >
              Healthy Food
            </button>
          </div>
          <div className="welcome-btns-data">
            <p>
              {active === "education"
                ? "Are you looking for information on education facilities in a specific area, or do you need details about different types of educational institutions in general? Please provide more details so I can assist you better."
                : active === "medical"
                ? "Are you looking for information about medical facilities in a specific location or details about different types of medical facilities in general? Please provide more details so I can assist you better."
                : "Healthy food refers to foods that are nutritious and beneficial for maintaining overall health and well-being. These foods are typically rich in essential nutrients, such as vitamins, minerals, fiber, and healthy fats, and sodium."}
            </p>
          </div>
          <div className="welcome-story-footer">
            <img src="assets/Healthy-Food-min.webp" alt="healthy-food" />

            <ul
              style={{
                listStyle: "circle",
                marginLeft: "2rem",
              }}
            >
              <li>Friendly fundraising features</li>
              <li>Potential with our 32 donation</li>
              <li>Easily manage donor profiles</li>
              <li>features like monthly gifts.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeOrganisation;

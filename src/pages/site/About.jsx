import { useState } from "react";
import AboutNGO from "../../components/site/AboutNGO";
import AboutValues from "../../components/site/AboutValues";
import AboutWhat from "../../components/site/AboutWhat";
import ContactHeader from "../../components/site/ContactHeader";
import Quote from "../../components/site/Quote";
import teams from "../../team.js";

import "./module.About.css";
import TeamCard from "../../components/site/TeamCard.jsx";

function About() {
  const [display, setDisplay] = useState("us");

  return (
    <div className="about">
      <ContactHeader>About</ContactHeader>
      <>
        <div className="about-btns">
          <button
            className={`${display === "us" ? "active" : ""}`}
            onClick={() => setDisplay("us")}
          >
            About NGO
          </button>

          <button
            className={`${display === "team" ? "active" : ""}`}
            onClick={() => setDisplay("team")}
          >
            About Team
          </button>
        </div>

        {display === "us" ? (
          <>
            <AboutNGO />
            <AboutValues />
            <Quote name="Ralph Waldo Emerson">
              "The purpose of life is not to be happy. It is to be useful, to be
              honorable, to be compassionate, to have it make some difference
              that you have lived and lived well."
            </Quote>
            <AboutWhat />
          </>
        ) : (
          <div className="teams">
            {teams.map((team) => (
              <TeamCard team={team} key={team.name} />
            ))}
          </div>
        )}
      </>
    </div>
  );
}

export default About;

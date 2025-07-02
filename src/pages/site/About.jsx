import AboutNGO from "../../components/site/AboutNGO";
import AboutValues from "../../components/site/AboutValues";
import AboutWhat from "../../components/site/AboutWhat";
import ContactHeader from "../../components/site/ContactHeader";

function About() {
  return (
    <div className="about">
      <ContactHeader>About Us</ContactHeader>
      <AboutNGO />
      <AboutValues />
      <AboutWhat />
    </div>
  );
}

export default About;

import AboutNGO from "../../components/site/AboutNGO";
import AboutValues from "../../components/site/AboutValues";
import AboutWhat from "../../components/site/AboutWhat";
import ContactHeader from "../../components/site/ContactHeader";
import Quote from "../../components/site/Quote";

function About() {
  return (
    <div className="about">
      <ContactHeader>About Us</ContactHeader>
      <AboutNGO />
      <AboutValues />
      <Quote name="Ralph Waldo Emerson">
        "The purpose of life is not to be happy. It is to be useful, to be
        honorable, to be compassionate, to have it make some difference that you
        have lived and lived well."
      </Quote>
      <AboutWhat />
    </div>
  );
}

export default About;

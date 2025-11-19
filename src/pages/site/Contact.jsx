import { useState, useEffect } from "react";
import ContactHeader from "../../components/site/ContactHeader";
import axios from "axios";
import capitalize from "../../services/capitalize";
import lowercase from "../../services/lowercase";
import { baseURL } from "../../services/apiRequest";

function Contact() {
  const [queryDetails, setQueryDetails] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
    isAnswered: false,
  });
  const [submit, setSubmit] = useState(false);

  function handleQuerySubmit(e) {
    e.preventDefault();

    const { name, phone, email, query } = queryDetails;

    if (!name || !phone || !email || !query)
      return alert("Please provide required information");

    setQueryDetails({
      ...queryDetails,
      name: "",
      phone: "",
      email: "",
      query: "",
      isAnswered: false,
    });

    setSubmit(true);

    console.log(queryDetails);
  }

  useEffect(() => {
    async function submitQuery() {
      try {
        if (submit) {
          await axios.post(`${baseURL}/query`, queryDetails);
        }
      } catch (err) {
        if (err) console.log("Cannot submit your query!");
      }
    }
    submitQuery();
  }, [queryDetails, submit]);

  return (
    <div className="contact-section">
      <ContactHeader>Contact Us</ContactHeader>

      <div className="touch">
        <h2>
          Get in touch with us. <br />
          We'd love to hear from you.
        </h2>
        <p>Please note, charity: does not accept unsolicited requests.</p>
        <div className="touch-cards">
          <div className="cards">
            <img src="assets/contact-tel.webp" alt="contact-tel" />
            <div>
              <p>Tel: 7218656565 / 9763661212</p>
            </div>
          </div>
          <div className="cards">
            <img src="assets/contact-map.webp" alt="contact-map" />
            <p>Sadesatra Nali, Hadapsar</p>
          </div>
          <div className="cards">
            <img src="assets/contact-mail.webp" alt="contact-mail" />
            <p>Need assistance? Connect with us</p>
          </div>
        </div>
      </div>
      <hr />

      <div className="contact-form">
        <h3>Have any Question?</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={queryDetails.name}
            onChange={(e) =>
              setQueryDetails({
                ...queryDetails,
                name: capitalize(e.target.value),
              })
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={queryDetails.email}
            onChange={(e) =>
              setQueryDetails({
                ...queryDetails,
                email: lowercase(e.target.value),
              })
            }
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={queryDetails.phone}
            onChange={(e) =>
              setQueryDetails({
                ...queryDetails,
                phone: Number(e.target.value),
              })
            }
          />

          <textarea
            rows="5"
            placeholder="Your Query"
            value={queryDetails.query}
            onChange={(e) =>
              setQueryDetails({ ...queryDetails, query: e.target.value })
            }
          ></textarea>
          <button onClick={handleQuerySubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

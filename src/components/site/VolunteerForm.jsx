import { Link } from "react-router-dom";
import "./module.VolunteerForm.css";
import { useState, useEffect } from "react";
import capitalize from "../../services/Capitalize";
import lowercase from "../../services/lowercase";
import axios from "axios";

function VolunteerForm() {
  const [volunteer, setVolunteer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    dob: "",
    duration: "",
    isAnswered: false,
  });
  const [submit, setSubmit] = useState(false);

  function handleVolunteerSubmit(e) {
    e.preventDefault();

    const { name, phone, email, address, dob, duration } = volunteer;

    if (!name || !phone || !email || !dob || !address || !duration)
      return alert("Please provide required information");

    // setVolunteer({
    //   name: "",
    //   phone: "",
    //   email: "",
    //   dob: "",
    //   duration: "",
    //   address: "",
    // });

    setSubmit((submit) => !submit);

    console.log(volunteer);
  }

  useEffect(() => {
    async function submitVolunteer() {
      try {
        if (submit) {
          await axios.post("http://localhost:8000/api/v1/volunteer", volunteer);
        }
      } catch (err) {
        if (err) console.log("Cannot submit your volunteer request");
      }
    }
    submitVolunteer();
  }, [submit, volunteer]);

  return (
    <div className="volunteer-form">
      <div className="volunteer-form-text">
        <p>
          Sahakarya Educational & Social Foundation is a Pune based registered
          not-for-profit organization working with children and youth from
          low-income communities in the field of education. A child’s journey at
          Sahakarya starts at Kindergarten level, continues through school years
          and supports them until they become employable. The focus is always in
          making learning a continuous, joyous and voluntary experience for
          children, which inspires them to believe in themselves and take on the
          future with confidence.
        </p>

        <p>
          <strong>Our Vision:</strong> Every child educated and equipped with
          equal opportunities to transform their lives.
        </p>

        <p>
          <strong>Our Mission:</strong> To enable a brighter future for children
          from low-income communities by providing them with desired knowledge,
          skills, values and support to achieve their true potential.
        </p>

        <h4>Why volunteer at Sahakarya?</h4>

        <p>
          We believe we are able to make a huge difference in our children’s
          lives through the dedicated efforts of our staff and volunteers. As a
          volunteer, your time commitment and expertise will be invaluable and
          highly appreciated.
        </p>

        <p>
          For more information, please feel free to contact Sahakarya
          Educational & Social Foundation office from 10 am to 6 pm, Monday to
          Saturday at 7218656565 / 9763661212 or email us at{" "}
          <Link to="mailto:sahakarya.pune@gmail.com">
            sahakarya.pune@gmail.com
          </Link>
        </p>
      </div>

      <div className="volunteer-recruit">
        <h2>Volunteer Recruitment Form</h2>
        <form>
          <fieldset id="personal">
            <legend>Personal Information</legend>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={volunteer.name}
              onChange={(e) =>
                setVolunteer({ ...volunteer, name: capitalize(e.target.value) })
              }
              required
            />
            <div className="volunteer-recruit-form-div">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={volunteer.phone}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, phone: Number(e.target.value) })
                }
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={volunteer.email}
                onChange={(e) =>
                  setVolunteer({
                    ...volunteer,
                    email: lowercase(e.target.value),
                  })
                }
                required
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={volunteer.address}
              onChange={(e) =>
                setVolunteer({
                  ...volunteer,
                  address: lowercase(e.target.value),
                })
              }
              required
            />
            <div className="volunteer-recruit-form-div">
              <label htmlFor="birth-date">Birth Date: </label>
              <input
                type="date"
                id="birth-date"
                name="birth-date"
                placeholder="Your Name"
                value={volunteer.dob}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, dob: e.target.value })
                }
                required
              />

              <label>Volunteer Duration</label>
              <select
                value={volunteer.duration}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, duration: e.target.value })
                }
                required
              >
                <option value="">-- Select from below options</option>
                <option value="7">1 Week</option>
                <option value="30">1 Month</option>
                <option value="1Month-3Month">1 Month - 3 Months</option>
                <option value="<6Month">Less than 6 Months</option>
              </select>
            </div>
          </fieldset>

          <p
            style={{
              color: "red",
              fontSize: "0.7rem",
            }}
          >
            * Certificate will be provided only after completion of 48 hours of
            volunteering services.
          </p>

          <div className="volunteer-submit">
            <button onClick={(e) => handleVolunteerSubmit(e)}>
              Send Response
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VolunteerForm;

import { Link } from "react-router-dom";
import "./module.VolunteerForm.css";
import { useState } from "react";

function VolunteerForm() {
  const [volunteer, setVolunteer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    dob: "",
    occupation: "",
    isCertificate: false,
    duration: "",
    reason: "",
  });

  function handleVolunteerSubmit(e) {
    e.preventDefault();

    setVolunteer({
      name: "",
      phone: "",
      email: "",
      dob: "",
      occupation: "",
      isCertificate: false,
      reason: "",
      duration: "",
    });

    console.log(volunteer);
  }

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
                setVolunteer({ ...volunteer, name: e.target.value })
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
                  setVolunteer({ ...volunteer, phone: e.target.value })
                }
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={volunteer.email}
                onChange={(e) =>
                  setVolunteer({ ...volunteer, email: e.target.value })
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
                setVolunteer({ ...volunteer, address: e.target.value })
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
            </div>
          </fieldset>
          <fieldset id="education">
            <legend>Education & Occupation</legend>
            <div className="education-details">
              <div className="occupation">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  placeholder="Your Occupation"
                  value={volunteer.occupation}
                  onChange={(e) =>
                    setVolunteer({ ...volunteer, occupation: e.target.value })
                  }
                />
              </div>
            </div>
          </fieldset>
          <div className="form-options">
            <div>
              <label htmlFor="volunteer-certificate">
                Is Volunteer Certificate required?
              </label>
              <p>
                Certificate will be provided only after completion of 30 hours
                of volunteering services.
              </p>
            </div>
            <select
              value={volunteer.isCertificate}
              onChange={(e) =>
                setVolunteer({
                  ...volunteer,
                  isCertificate: e.target.value === "Yes" ? true : false,
                })
              }
            >
              <option value="">-- Select from below options --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label>Volunteer Duration</label>
            <select
              value={volunteer.duration}
              onChange={(e) =>
                setVolunteer({ ...volunteer, duration: e.target.value })
              }
            >
              <option value="">-- Select from below options</option>
              <option value="1Week">1 Week</option>
              <option value="1Month">1 Month</option>
              <option value="1Month-3Month">1 Month - 3 Months</option>
              <option value="<6Month">Less than 6 Months</option>
            </select>
          </div>

          <label htmlFor="reason">
            Why do you wish to volunteer for Sahakarya?
          </label>
          <textarea
            id="reason"
            placeholder="Your opinion..."
            value={volunteer.reason}
            onChange={(e) =>
              setVolunteer({ ...volunteer, reason: e.target.value })
            }
          ></textarea>
          <button onClick={(e) => handleVolunteerSubmit(e)}>
            Send Response
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerForm;

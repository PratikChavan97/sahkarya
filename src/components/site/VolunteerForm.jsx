import { Link } from "react-router-dom";
import "./module.VolunteerForm.css";

function VolunteerForm() {
  return (
    <div className="volunteer-form">
      <div className="volunteer-form-text">
        <p>
          Sahakarya Foundation is a Pune based registered not-for-profit
          organization working with children and youth from low-income
          communities in the field of education. A child’s journey at Sahakarya
          starts at Kindergarten level, continues through school years and
          supports them until they become employable. The focus is always in
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
          For more information, please feel free to contact Sahakarya Foundation
          office from 10 am to 6 pm, Monday to Saturday at 7218656565 /
          9763661212 or email us at{" "}
          <Link to="mailto:sahakarya.pune@gmail.com">
            sahakarya.pune@gmail.com
          </Link>
        </p>
      </div>

      <div className="volunteer-recruit">
        <h2>Volunteer Recruitment Form</h2>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <div className="volunteer-recruit-form-div">
            <input type="text" name="phone" placeholder="Your Phone" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            required
          />
          <div className="volunteer-recruit-form-div">
            <label htmlFor="birth-date">Birth Date: </label>
            <input
              type="date"
              id="birth-date"
              name="birth-date"
              placeholder="Your Name"
              required
            />
          </div>
          <label htmlFor="volunteer-certificate">
            Is Volunteer Certificate required?
          </label>
          <p>
            Certificate will be provided only after completion of 30 hours of
            volunteering services.
          </p>
          <input type="radio" name="certificate-yes" />
          Yes
          <input type="radio" name="certificate-yes" />
          No
          <label htmlFor="reason">
            Why do you wish to volunteer for Sahakarya?
          </label>
          <textarea id="reason"></textarea>
          <button>Send Response</button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerForm;

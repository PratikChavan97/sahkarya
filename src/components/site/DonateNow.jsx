import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./module.DonateNow.css";

function DonateNow({ donate, update }) {
  const [donor, setDonor] = useState({
    name: "",
    phone: "",
    email: "",
    donation: "",
    itemDescription: "",
    reqStatus: "pending",
  });

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    async function submitData() {
      try {
        if (submit) {
          await axios.post("http://127.0.0.1:8000/api/v1/donation", donor);
          console.log("Donor data submitted");
        }
      } catch (err) {
        if (err) console.log("Error submitting doner");
      }
    }
    submitData();
  }, [submit, donor]);

  const navigate = useNavigate();

  function handleDonationSubmit(e) {
    e.preventDefault();
    console.log(donor);

    setDonor({
      ...donor,
      name: "",
      email: "",
      phone: "",
      donation: "",
      itemDescription: "",
      reqStatus: "pending",
    });

    setSubmit((submit) => !submit);
    update();
    navigate("/payment");
  }

  return (
    <>
      {donate && (
        <div className="donate-now">
          <h2>Donation Form</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              value={donor.name}
              onChange={(e) => setDonor({ ...donor, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={donor.email}
              onChange={(e) => setDonor({ ...donor, email: e.target.value })}
              required
            />

            <input
              type="text"
              placeholder="Your Phone"
              value={donor.phone}
              onChange={(e) =>
                setDonor({ ...donor, phone: Number(e.target.value) })
              }
              required
            />

            <label htmlFor="donate-thing">What would you like to donate?</label>
            <select
              id="donate-thing"
              value={donor.donation}
              onChange={(e) => setDonor({ ...donor, donation: e.target.value })}
              required
            >
              <option value="">-- Select from below options --</option>
              <option value="money">Money</option>
              <option value="stationary">Stationary for Students</option>
              <option value="adopt">
                Complete responsibility of a child's education
              </option>
            </select>
            {donor.donation === "money" ? (
              <input
                type="text"
                placeholder="Expected Amount: "
                value={donor.itemDescription}
                onChange={(e) =>
                  setDonor({
                    ...donor,
                    itemDescription: Number(e.target.value),
                  })
                }
                required
              />
            ) : donor.donation === "stationary" ? (
              <input type="text" placeholder="Equivalent Amount" required />
            ) : (
              ""
            )}
            <button onClick={(e) => handleDonationSubmit(e)}>
              Send Response
            </button>
          </form>
          <button className="donate-close" onClick={() => update()}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
    </>
  );
}

export default DonateNow;

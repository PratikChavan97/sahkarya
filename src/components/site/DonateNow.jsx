import { useState } from "react";
import "./module.DonateNow.css";

function DonateNow({ donate, update }) {
  const [item, setItem] = useState("");
  return (
    <>
      {donate && (
        <div className="donate-now">
          <h2>Donation Form</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your Phone" />

            <label htmlFor="donate-thing">What would you like to donate?</label>
            <select
              id="donate-thing"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            >
              <option value="">-- Select from below list --</option>
              <option value="money">Money</option>
              <option value="stationary">Stationary for Students</option>
              <option value="adopt">
                Complete responsibility of a child's education
              </option>
            </select>
            {item === "money" || item === "stationary" ? (
              <input type="text" placeholder="Description" />
            ) : (
              ""
            )}
            <button>Send Response</button>
          </form>
          <button onClick={() => update()}>X</button>
        </div>
      )}
    </>
  );
}

export default DonateNow;

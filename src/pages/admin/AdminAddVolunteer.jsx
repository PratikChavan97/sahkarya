import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { renderAPI } from "../../services/apiRequest";

function AdminAddVolunteer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [duration, setDuration] = useState("");

  const [volunteer, setVolunteer] = useState(null);
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  function handleVolunteerSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone || !city || !dob || !duration)
      alert("Please provide all required information");

    const newVolunteer = {
      name,
      email,
      phone: Number(phone),
      city,
      dob,
      duration,
      isAnswered: true,
    };

    setVolunteer(newVolunteer);

    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setDob("");
    setDuration("");
    setSubmit(true);

    navigate(-1);
  }

  useEffect(() => {
    if (submit) {
      async function submitVolunteer() {
        try {
          await axios.post(`${renderAPI}/volunteers`, volunteer);
          console.log("Volunteer created!");
        } catch (err) {
          console.log("Unable to create volunteer: ", err);
        }
      }
      submitVolunteer();
    }
  }, [submit, volunteer]);

  return (
    <div>
      <h2>Add Volunteer</h2>

      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (in days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <button onClick={(e) => handleVolunteerSubmit(e)}>
          Create Volunteer
        </button>
      </form>
    </div>
  );
}

export default AdminAddVolunteer;

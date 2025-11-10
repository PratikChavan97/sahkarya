import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./module.UserAddForm.css";
import lowercase from "../../services/lowercase";
import capitalize from "../../services/Capitalize";

function UserAddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState({});

  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function addUser() {
      try {
        if (submit) {
          await axios.post("http://127.0.0.1:8000/api/v1/users", user);
          console.log("User created");
        }
      } catch (err) {
        if (err) console.log("Error");
      }
    }
    addUser();
  }, [submit, user, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone,
    };
    setUser(newUser);
    setSubmit(true);
    navigate("/dashboard/users");

    console.log(newUser);
  }

  return (
    <div className="user-add">
      <h2>User Form</h2>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(capitalize(e.target.value))}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(lowercase(e.target.value))}
        />
        <input
          type="text"
          placeholder="Your Contact"
          value={phone}
          onChange={(e) => setPhone(Number(e.target.value))}
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

export default UserAddForm;

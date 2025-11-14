import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminAddDoner() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [submit, setSubmit] = useState(false);
  const [doner, setDoner] = useState({});

  const navigate = useNavigate();

  function handleDonerSubmit(e) {
    e.preventDefault();

    if (!name || !phone || !email || !amount)
      alert("Please provide required information");

    const newDoner = {
      name,
      email,
      phone: Number(phone),
      amount: Number(amount),
      reqStatus: true,
    };
    setDoner(newDoner);
    setSubmit(true);

    console.log(newDoner);

    setName("");
    setPhone("");
    setEmail("");
    setAmount("");

    navigate(-1);
  }

  useEffect(() => {
    if (submit) {
      async function submitDoner() {
        try {
          await axios.post("http://127.0.0.1:8000/api/v1/donation", doner);
        } catch (err) {
          console.log("Doner cannot be created: ", err);
        }
      }
      submitDoner();
    }
  }, [doner, submit]);

  return (
    <div>
      <h2>Add Doner</h2>

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
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={(e) => handleDonerSubmit(e)}>Create Doner</button>
      </form>
    </div>
  );
}

export default AdminAddDoner;

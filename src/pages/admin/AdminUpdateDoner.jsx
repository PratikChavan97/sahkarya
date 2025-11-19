import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { renderAPI } from "../../services/apiRequest";

function AdminUpdateDoner() {
  const [doner, setDoner] = useState(null);
  const [update, setUpdate] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  function handleUpdate(e) {
    e.preventDefault();
    setUpdate(true);
    navigate(-1);
  }

  useEffect(() => {
    async function getDoner() {
      try {
        const res = await axios.get(`${renderAPI}/donation/${id}`);
        setDoner(res.data.data);
      } catch (err) {
        if (err) console.log("Couldn't get specific doner");
      }
    }
    getDoner();
  }, [id]);

  useEffect(() => {
    if (update) {
      async function updateDoner() {
        try {
          await axios.put(`${renderAPI}/donation/${id}`, doner);
        } catch (err) {
          if (err) console.log("Error");
        }
      }

      updateDoner();
    }
  }, [update, doner, id]);

  console.log(doner);
  return (
    <div>
      <h2>Update Doner</h2>

      <form>
        <label>Name:</label>
        <input
          type="text"
          value={doner?.name}
          onChange={(e) => setDoner({ ...doner, name: e.target.value })}
        />

        <label>Email</label>
        <input
          type="email"
          value={doner?.email}
          onChange={(e) => setDoner({ ...doner, email: e.target.value })}
        />

        <label>Phone</label>
        <input
          type="text"
          value={doner?.phone}
          onChange={(e) => setDoner({ ...doner, phone: e.target.value })}
        />

        <label>Amount</label>
        <input
          type="text"
          value={doner?.amount}
          onChange={(e) => setDoner({ ...doner, amount: e.target.value })}
        />

        <button onClick={(e) => handleUpdate(e)}>Save</button>
      </form>
    </div>
  );
}

export default AdminUpdateDoner;

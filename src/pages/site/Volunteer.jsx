import { useState, useEffect } from "react";

import VolunteerForm from "../../components/site/VolunteerForm";
import axios from "axios";

function Volunteer() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await axios.get("http://127.0.0.1:8000/api/v1/users");
        setUsers(res.data.data.users[0].name);
        console.log(res);
        setLoading(false);
      } catch (err) {
        if (err) console.log("Error fetching data");
      }
    }
    getData();
  }, []);

  console.log(users);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="volunteer">
      <VolunteerForm />
    </div>
  );
}

export default Volunteer;

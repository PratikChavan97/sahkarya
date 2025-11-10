import axios from "axios";
import { useEffect, useState } from "react";

function AdminDonation() {
  const [donation, setDonation] = useState();

  useEffect(() => {
    async function getDonation() {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/v1/donation");
        setDonation(res.data.data);
      } catch (err) {
        if (err) console.log("Cannot fetch donation from DB");
      }
    }
    getDonation();
  }, []);

  return (
    <div>{!donation?.length ? <h1>No Donations</h1> : <h2>Donation</h2>}</div>
  );
}

export default AdminDonation;

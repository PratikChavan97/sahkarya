import axios from "axios";
import { useEffect, useState } from "react";

import AdminNoDonation from "./AdminNoDonation";
import AdminYesDonation from "./AdminYesDonation";

import "./module.AdminDonationDisplay.css";
import { renderAPI } from "../../services/apiRequest";

function AdminDonationDisplay() {
  const [donation, setDonation] = useState();

  useEffect(() => {
    async function getDonation() {
      try {
        const res = await axios.get(`${renderAPI}/donation`);
        setDonation(res.data.data.doners);
        console.log(res.data.data.doners);
      } catch (err) {
        if (err) console.log("Cannot fetch donation from DB");
      }
    }
    getDonation();
  }, []);

  return (
    <div className="w-100 admin-donation-display">
      {!donation?.length ? (
        <AdminNoDonation />
      ) : (
        <AdminYesDonation donation={donation} />
      )}
    </div>
  );
}

export default AdminDonationDisplay;

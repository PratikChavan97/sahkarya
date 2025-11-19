import { useEffect, useState } from "react";
import CreateNewButton from "./CreateNewButton";
import "./module.AdminVolunteerDisplay.css";
import axios from "axios";
import AdminVolunteerTable from "./AdminVolunteerTable";
import { renderAPI } from "../../services/apiRequest";

function AdminVolunteerDisplay() {
  const [volunteers, setVolunteers] = useState(null);

  useEffect(() => {
    async function getVolunteers() {
      try {
        const res = await axios.get(`${renderAPI}/volunteers`);
        setVolunteers(res.data.data.volunteers);
        console.log(res.data.data.volunteers);
      } catch (err) {
        if (err) console.log("Cannot fetch Volunteers...", err);
      }
    }
    getVolunteers();
  }, []);

  return (
    <div className="admin-volunteer-display w-100">
      <>
        {!volunteers?.length ? (
          <>
            <h2>No volunteers</h2>
            <CreateNewButton navigateTo="add-volunteer" />
          </>
        ) : (
          <>
            <h2>Volunteer</h2>
            <CreateNewButton navigateTo="add-volunteer" />
            <AdminVolunteerTable
              data={volunteers}
              headers={["sr. no", "name", "phone", "city", "duration"]}
            />
          </>
        )}
      </>
    </div>
  );
}

export default AdminVolunteerDisplay;

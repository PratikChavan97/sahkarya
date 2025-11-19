import { useEffect, useState } from "react";
import CreateNewButton from "./CreateNewButton";

import "./module.AdminEventsDisplay.css";
import axios from "axios";
import { renderAPI } from "../../services/apiRequest";

function AdminEventsDisplay() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    async function getEvents() {
      try {
        const res = await axios.get(`${renderAPI}/events`);
        console.log(res.data.data.events);
      } catch (err) {
        if (err) console.log("Cannot fetch events: ", err);
      }
    }
    getEvents();
  }, []);

  return (
    <div className="w-100 admin-events-display">
      <h2>Events</h2>
      <CreateNewButton navigateTo="add-event" />
    </div>
  );
}

export default AdminEventsDisplay;

import { useEffect, useState } from "react";
import "./module.AdminHomeDisplay.css";
import axios from "axios";
import AdminHomeDisplayCards from "./AdminHomeDisplayCards";
import { renderAPI } from "../../services/apiRequest";

function AdminHomeDisplay({ user }) {
  const [usersLength, setUsersLength] = useState(null);
  const [volunteersLength, setVolunteersLength] = useState(null);
  const [donersLength, setDonersLength] = useState(null);
  console.log(setDonersLength);

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await axios.get(`${renderAPI}/users`);
        setUsersLength(users.data.data.users.length);

        const volunteers = await axios.get(`${renderAPI}/volunteers`);
        setVolunteersLength(volunteers.data.data.volunteers.length);
      } catch (err) {
        if (err) console.log("Couldn't get users");
      }
    }
    getUsers();
  });

  return (
    <div className="home-display">
      <h2>Welcome, {user?.name}</h2>

      <div className="home-cards">
        <AdminHomeDisplayCards
          title="Total Users"
          number={100}
          emoji="fa-solid fa-user"
        />

        <AdminHomeDisplayCards
          title="Total Donation"
          number="100000"
          emoji="fa-solid fa-indian-rupee-sign"
        />

        <AdminHomeDisplayCards
          number={5}
          title="Total Volunteers"
          emoji="fa-solid fa-users"
        />

        <AdminHomeDisplayCards
          title="Volunteer Requests"
          number={5}
          emoji="fa-solid fa-user-plus"
        />

        <AdminHomeDisplayCards
          title="Total Events"
          number={5}
          emoji="fa-solid fa-calendar-days"
        />

        <AdminHomeDisplayCards
          title="Total Queries"
          number={5}
          emoji="fa-solid fa-clipboard-question"
        />
      </div>
    </div>
  );
}

export default AdminHomeDisplay;

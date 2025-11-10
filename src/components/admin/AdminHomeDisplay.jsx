import { useEffect, useState } from "react";
import "./module.AdminHomeDisplay.css";
import axios from "axios";

function AdminHomeDisplay({ user }) {
  const [usersLength, setUsersLength] = useState(null);
  const [volunteersLength, setVolunteersLength] = useState(null);
  const [donersLength, setDonersLength] = useState(null);
  console.log(setDonersLength);

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await axios.get("http://127.0.0.1:8000/api/v1/users");
        setUsersLength(users.data.data.users.length);

        const volunteers = await axios.get(
          "http://127.0.0.1:8000/api/v1/volunteers"
        );
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
        <div className="home-cards-card">
          <h4>Total Users: {usersLength}</h4>
        </div>
        <div className="home-cards-card">
          <h4>Total Donation: {donersLength}</h4>
        </div>
        <div className="home-cards-card">
          <h4>Total Volunteers: {volunteersLength}</h4>
        </div>

        <div className="home-cards-card">
          <h4>Volunteer Requests: #count</h4>
        </div>

        <div className="home-cards-card">
          <h4>Total Events: #count</h4>
        </div>

        <div className="home-cards-card">
          <h4>Total Queries: #count</h4>
        </div>
      </div>
    </div>
  );
}

export default AdminHomeDisplay;

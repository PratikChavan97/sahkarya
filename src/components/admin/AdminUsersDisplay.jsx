import { useNavigate } from "react-router-dom";
import AdminTable from "./AdminTable";

import "./module.AdminUsersDisplay.css";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminUsersDisplay() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/v1/users");
        setUsers(res.data.data.users);
      } catch (err) {
        if (err) console.log("Error");
      }
    }
    getUsers();
  }, []);

  return (
    <div className="admin-users">
      {!users.length ? (
        <>
          <h2>Sorry, No users found</h2>
          <button onClick={() => navigate("/dashboard/users/add-form")}>
            Add +
          </button>
        </>
      ) : (
        <>
          <div className="admin-users-head">
            <h2>Users</h2>
            <button onClick={() => navigate("/dashboard/users/add-form")}>
              Add +
            </button>
          </div>
          <AdminTable users={users} />
        </>
      )}
    </div>
  );
}

export default AdminUsersDisplay;

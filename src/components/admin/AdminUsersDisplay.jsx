import AdminTable from "./AdminTable";

import { useEffect, useState } from "react";
import axios from "axios";

import "./module.AdminUsersDisplay.css";
import CreateNewButton from "./CreateNewButton";
import DemoTable from "../../pages/site/DemoTable";
import AdminUsersTable from "./AdminUsersTable";

function AdminUsersDisplay() {
  const [users, setUsers] = useState([]);

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
          <CreateNewButton navigateTo="add-user" />
        </>
      ) : (
        <>
          <div className="admin-users-head">
            <h2>Users</h2>
            <CreateNewButton navigateTo="add-user" />
          </div>
          {/* <AdminTable users={users} /> */}
          <AdminUsersTable
            data={users}
            headers={["Sr. No.", "Name", "email", "phone"]}
          />
        </>
      )}
    </div>
  );
}

export default AdminUsersDisplay;

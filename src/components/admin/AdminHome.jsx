import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import "./module.AdminHome.css";

function AdminHome() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="admin-home">
      <div className="admin-header d-flex justify-between align-middle">
        {/* <img src="assets/main.png" alt="logo" /> */}
        <p>Logo</p>
        <div className="d-flex gap-1.5">
          <p>{time}</p>
          <p>Notification</p>
          <p>Admin Dropdown</p>
        </div>
      </div>
      <AdminNavBar />
    </div>
  );
}

export default AdminHome;

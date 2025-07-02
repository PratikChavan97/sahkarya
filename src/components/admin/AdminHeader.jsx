import { useEffect, useState } from "react";
import "./module.AdminHeader.css";

function AdminHeader() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="admin-header">
      <div className="admin-header-left">
        <img src="assets/main.png" alt="logo" />
        <h2>Sahakarya Dashboard</h2>
      </div>
      <div className="admin-header-right">
        <p>
          <i className="fa-solid fa-clock"></i> {time}
        </p>
        <p>
          <i className="fa-solid fa-user-tie"></i>{" "}
          <i className="fa-solid fa-caret-down"></i>
          {/* <div>
            <p>Profile</p>
            <p>Logout</p>
          </div> */}
        </p>
      </div>
    </div>
  );
}

export default AdminHeader;

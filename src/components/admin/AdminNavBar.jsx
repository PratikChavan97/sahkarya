import { NavLink, useLocation } from "react-router-dom";
import "./module.AdminNavBar.css";

function AdminNavBar() {
  const x = useLocation();
  return (
    <div className="admin-nav">
      <div className={x.pathname === "/dashboard" ? "active" : ""}>
        <NavLink to="/dashboard">Home</NavLink>
      </div>
      <div className={x.pathname === "/dashboard/users" ? "active" : ""}>
        <NavLink to="/dashboard/users">Users</NavLink>
      </div>
      <div className={x.pathname === "/dashboard/donation" ? "active" : ""}>
        <NavLink to="/dashboard/donation">Donation</NavLink>
      </div>
      <div className={x.pathname === "/dashboard/volunteers" ? "active" : ""}>
        <NavLink to="/dashboard/volunteers">Volunteers</NavLink>
      </div>

      {/* <div className={x.pathname === "/dashboard/gallery" ? "active" : ""}>
        <NavLink to="/dashboard/gallery">Gallery</NavLink>
      </div> */}

      <div className={x.pathname === "/dashboard/events" ? "active" : ""}>
        <NavLink to="/dashboard/events">Events</NavLink>
      </div>
      <div className={x.pathname === "/dashboard/queries" ? "active" : ""}>
        <NavLink to="/dashboard/queries">Queries</NavLink>
      </div>
    </div>
  );
}

export default AdminNavBar;

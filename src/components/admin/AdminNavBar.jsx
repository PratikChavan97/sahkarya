import { NavLink } from "react-router-dom";
import "./module.AdminNavBar.css";

function AdminNavBar() {
  return (
    <div className="admin-nav">
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/dashboard/users">Users</NavLink>
      <NavLink to="/dashboard/donation">Donation</NavLink>
      <NavLink to="/dashboard/volunteers">Volunteers</NavLink>
      <NavLink to="/dashboard/gallery">Gallery</NavLink>
    </div>
  );
}

export default AdminNavBar;

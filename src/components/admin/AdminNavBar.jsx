import { NavLink } from "react-router-dom";
import "./module.AdminNavBar.css";

function AdminNavBar() {
  return (
    <div className="admin-nav">
      <NavLink to="">Home</NavLink>
      <NavLink to="">Users</NavLink>
      <NavLink to="">Queries</NavLink>
      <NavLink to="">Pages</NavLink>
      <NavLink to="">Gallery</NavLink>
      {/* <NavLink to=""></NavLink> */}
    </div>
  );
}

export default AdminNavBar;

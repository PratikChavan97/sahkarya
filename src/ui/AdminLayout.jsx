import { Outlet } from "react-router-dom";
import AdminHome from "../pages/admin/AdminHome";
import AdminNavBar from "../components/admin/AdminNavBar";

function AdminLayout({ authenticate }) {
  return (
    <div
      className="dashboard-layout"
      style={{
        color: "black",
      }}
    >
      <AdminHome authenticate={authenticate} />
      <div className="dashboard-display d-flex">
        <AdminNavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;

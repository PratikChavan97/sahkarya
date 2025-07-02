import { Outlet } from "react-router-dom";
import AdminHome from "../pages/admin/AdminHome";
import AdminNavBar from "../components/admin/AdminNavBar";

function AdminLayout() {
  return (
    <div
      className="dashboard-layout"
      style={{
        color: "black",
      }}
    >
      <AdminHome />
      <div className="dashboard-display d-flex">
        <AdminNavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;

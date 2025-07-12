import AdminHeader from "../../components/admin/AdminHeader";
import AdminNavBar from "../../components/admin/AdminNavBar";
import "./module.AdminHome.css";

function AdminHome({ authenticate }) {
  return (
    <div className="admin-home">
      <AdminHeader authenticate={authenticate} />
    </div>
  );
}

export default AdminHome;

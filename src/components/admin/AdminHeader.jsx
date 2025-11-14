import { useEffect, useState } from "react";
import "./module.AdminHeader.css";
import { useNavigate } from "react-router-dom";

function AdminHeader({ authenticate }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  function handleLogout() {
    navigate("/logout");
    authenticate(false);
    localStorage.clear();
  }

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
          <button onClick={handleLogout}>
            <i
              className="fa-solid fa-right-from-bracket"
              style={{
                color: "#fff",
              }}
            ></i>{" "}
            Logout
          </button>
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

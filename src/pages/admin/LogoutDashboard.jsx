import { useNavigate } from "react-router-dom";
import "./module.LogoutDashboard.css";

function LogoutDashboard() {
  const navigate = useNavigate();
  return (
    <div className="logout">
      <div className="logout-text">
        <h4>You've been successfully logged out of dashboard.</h4>
        <div className="logout-btns">
          <button onClick={() => navigate("/login")}>Go to Login</button>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      </div>
    </div>
  );
}

export default LogoutDashboard;

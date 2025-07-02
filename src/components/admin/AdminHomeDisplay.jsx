import "./module.AdminHomeDisplay.css";

function AdminHomeDisplay() {
  return (
    <div className="home-display">
      <h2>Welcome, #User</h2>

      <div className="home-cards">
        <div className="home-cards-card">
          <h4>Total Users: #count</h4>
        </div>
        <div className="home-cards-card">
          <h4>Total Volunteers: #count</h4>
        </div>
        <div className="home-cards-card">
          <h4>Total Doners: #count</h4>
        </div>
        <div className="home-cards-card">
          <h4>Volunteer Requests: #count</h4>
        </div>
      </div>
    </div>
  );
}

export default AdminHomeDisplay;

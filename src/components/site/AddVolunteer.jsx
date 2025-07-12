import { useNavigate } from "react-router-dom";
import "./module.AddVolunteer.css";

function AddVolunteer() {
  const navigate = useNavigate();

  return (
    <div className="add-volunteer">
      <img src="assets/man-donation-boxs.webp" alt="man-dontaion-boxs" />
      <div className="volunteer-text">
        <h3>
          Dedicate your time for those <span>who need it the most</span>
        </h3>
        <p>We regularly publish selected volunteer opportunities</p>
        <button onClick={() => navigate("/volunteer")}>
          Become a Volunteer
        </button>
      </div>
    </div>
  );
}

export default AddVolunteer;

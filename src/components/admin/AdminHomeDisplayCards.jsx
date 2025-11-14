import { useEffect, useState } from "react";

import "./module.AdminHomeDisplayCards.css";

function AdminHomeDisplayCards({ title = "Demo", number = "0", emoji }) {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800; // in ms
    const stepTime = 20; // smaller = smoother animation
    const steps = duration / stepTime;
    const increment = number / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        clearInterval(counter);
        start = number;
      }
      setDisplayNumber(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <div className="card-container home-cards-card">
      <div className="card-content">
        <div className="card-left">
          <h3 className="card-title">{title}:</h3>
        </div>
        <div className="card-right">
          <span className="card-number">
            <i className={emoji} style={{ color: "#fff" }}></i> {displayNumber}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdminHomeDisplayCards;

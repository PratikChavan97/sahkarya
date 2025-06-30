import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import DonateNow from "../components/site/DonateNow";
import { useState } from "react";

function AppLayout() {
  const [donate, setDonate] = useState(false);

  const x = useLocation();
  console.log(x);

  function handleDonateDisplay() {
    setDonate((donate) => !donate);
  }

  return (
    <>
      {x.pathname === "/dashboard" ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <div>
          <DonateNow donate={donate} update={handleDonateDisplay} />
          <Header update={handleDonateDisplay} />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default AppLayout;

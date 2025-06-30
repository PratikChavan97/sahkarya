import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";

function AppLayout() {
  const x = useLocation();
  console.log(x);
  return (
    <>
      {x.pathname === "/dashboard" ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default AppLayout;

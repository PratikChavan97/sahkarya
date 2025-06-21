import { Outlet } from "react-router-dom";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

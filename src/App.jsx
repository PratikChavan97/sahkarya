import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import SiteHome from "./pages/site/SiteHome";
import Projects from "./pages/site/Projects";
import Blogs from "./pages/site/Blogs";
import About from "./pages/site/About";
import Contact from "./pages/site/Contact";
import Volunteer from "./pages/site/Volunteer";
import PrivacyPolicy from "./pages/site/PrivacyPolicy";
import TermsConditions from "./pages/site/Terms&Conditions";

import AdminLayout from "./ui/AdminLayout";
import AdminHomeDisplay from "./components/admin/AdminHomeDisplay";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminVolunteer from "./pages/admin/AdminVolunteer";
import AdminDonation from "./pages/admin/AdminDonation";
import UserAddForm from "./components/admin/UserAddForm";
import ProtectedRoute from "./ui/ProtectedRoute";
import LoginDashboard from "./pages/admin/LoginDashboard";
import Img from "./components/site/Img";
import Payment from "./pages/site/Payment";
import AdminEvents from "./pages/admin/AdminEvents";
import LogoutDashboard from "./pages/admin/LogoutDashboard";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<SiteHome />} />
          <Route path="events" element={<Projects />} />
          <Route path="gallery" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="payment" element={<Payment />} />
        </Route>

        <Route
          path="login"
          element={
            <LoginDashboard
              authenticate={setIsAuthenticated}
              setUser={setUser}
            />
          }
        />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route
            path="/dashboard"
            element={<AdminLayout authenticate={setIsAuthenticated} />}
          >
            <Route index element={<AdminHomeDisplay user={user} />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/add-form" element={<UserAddForm />} />
            <Route path="volunteers" element={<AdminVolunteer />} />
            <Route path="donation" element={<AdminDonation />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="gallery" element="Gallery" />
          </Route>
        </Route>

        <Route path="logout" element={<LogoutDashboard />} />

        <Route path="*" element="Page Not Found" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

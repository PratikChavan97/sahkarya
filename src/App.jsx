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
import AdminQuery from "./pages/admin/AdminQuery";
import DemoTable from "./pages/site/DemoTable";
import AdminUpdateUser from "./pages/admin/AdminUpdateUser";
import AdminAddDoner from "./pages/admin/AdminAddDoner";
import AdminUpdateDoner from "./pages/admin/AdminUpdateDoner";
import AdminAddVolunteer from "./pages/admin/AdminAddVolunteer";
import AdminUpdateVolunteer from "./pages/admin/AdminUpdateVolunteer";
import AdminAddEvent from "./pages/admin/AdminAddEvent";
import AdminUpdateEvent from "./pages/admin/AdminUpdateEvent";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const tableData = [
    { id: 1, name: "Alice", age: 25, country: "USA" },
    { id: 2, name: "Bob", age: 30, country: "UK" },
    { id: 3, name: "Charlie", age: 28, country: "Canada" },
    { id: 4, name: "David", age: 35, country: "Germany" },
    { id: 5, name: "Eva", age: 22, country: "France" },
    { id: 6, name: "Frank", age: 40, country: "Italy" },
    { id: 7, name: "Grace", age: 27, country: "Spain" },
    { id: 8, name: "Hannah", age: 31, country: "Australia" },
  ];

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
          <Route
            path="demo"
            element={<DemoTable data={tableData} rowsPerPage={3} />}
          />
          <Route path="dashboard" element={<AdminLayout />} />
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

            {/* Admin Users router  */}
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/add-user" element={<UserAddForm />} />
            <Route path="users/update/:id" element={<AdminUpdateUser />} />

            {/* Admin Donation router */}
            <Route path="donation" element={<AdminDonation />} />
            <Route path="donation/add-doner" element={<AdminAddDoner />} />
            <Route
              path="donation/update-doner/:id"
              element={<AdminUpdateDoner />}
            />

            {/* Admin Volunteer router */}
            <Route path="volunteers" element={<AdminVolunteer />} />
            <Route
              path="volunteers/add-volunteer"
              element={<AdminAddVolunteer />}
            />
            <Route
              path="volunteers/update-volunteer/:id"
              element={<AdminUpdateVolunteer />}
            />

            {/* ADmin Events router */}
            <Route path="events" element={<AdminEvents />} />
            <Route path="events/add-event" element={<AdminAddEvent />} />
            <Route
              path="events/update-event/:id"
              element={<AdminUpdateEvent />}
            />

            {/* <Route path="gallery" element="Gallery" /> */}

            <Route path="queries" element={<AdminQuery />} />
          </Route>
        </Route>

        <Route path="logout" element={<LogoutDashboard />} />

        <Route path="*" element="Page Not Found" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import SiteHome from "./pages/site/SiteHome";
import Projects from "./pages/site/Projects";
import Blogs from "./pages/site/Blogs";
import About from "./pages/site/About";
import Contact from "./pages/site/Contact";
import Volunteer from "./pages/site/Volunteer";

import AdminLayout from "./ui/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<SiteHome />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="volunteer" element={<Volunteer />} />
        </Route>

        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element="Hello" />
          <Route path="users" element="Users" />
          <Route path="volunteers" element="Volunteers" />
          <Route path="donation" element="Donation" />
        </Route>

        <Route path="*" element="Page Not Found" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

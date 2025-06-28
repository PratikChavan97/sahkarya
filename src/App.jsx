import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import About from "./pages/site/About";
import Contact from "./pages/site/Contact";
import PrivacyPolicy from "./pages/site/PrivacyPolicy";
import TermsConditions from "./pages/site/Terms&Conditions";
import Blogs from "./pages/site/Blogs";
import Projects from "./pages/site/Projects";
import AdminLayout from "./ui/AdminLayout";
import SiteHome from "./pages/site/SiteHome";
import Volunteer from "./components/site/Volunteer";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <SiteHome />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/volunteer",
          element: <Volunteer />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermsConditions />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/app/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "home",
          element: "Admin Home",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

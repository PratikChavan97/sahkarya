import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import About from "./pages/site/About";
import Contact from "./pages/site/Contact";
import PrivacyPolicy from "./pages/site/PrivacyPolicy";
import TermsConditions from "./pages/site/Terms&Conditions";
import Blogs from "./pages/site/Blogs";
import Projects from "./pages/site/Projects";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: "home",
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/volunteer/sign-up",
          element: "Volunteer",
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;

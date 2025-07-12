import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated }) {
  const navigate = useNavigate();
  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  });
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRoute;

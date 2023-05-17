import React from "react";
import { Navigate, useLocation } from "react-router";

function RequireAuth({ children }) {
  let isAuth = true;
  let location = useLocation();

  if (!isAuth) {
    return <Navigate to="/singin" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;

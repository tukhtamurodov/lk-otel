import React from "react";
import { Navigate, useLocation } from "react-router";

function NotFound() {
  const location = useLocation();

  return <Navigate to="/object-manage" state={{ from: location }} replace />;
}

export default NotFound;

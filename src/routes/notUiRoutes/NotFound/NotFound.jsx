import React from "react";
import { Navigate, useLocation } from "react-router";

function NotFound() {
  const location = useLocation();
  console.log(1111111111111);
  return (
    <Navigate to="/registre-new-object/1" state={{ from: location }} replace />
  );
}

export default NotFound;

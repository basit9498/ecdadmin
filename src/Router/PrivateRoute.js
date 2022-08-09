import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;

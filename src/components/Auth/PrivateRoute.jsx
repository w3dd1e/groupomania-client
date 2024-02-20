import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const PrivateRoute = ({ path, ...props }) => {
  const { checkAuth } = useContext(AuthContext);
  return checkAuth() ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to='/login' replace />
  );
};

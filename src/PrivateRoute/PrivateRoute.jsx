import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { userData, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return  <span className="text-center loading loading-spinner loading-xl"></span>;
  }

  if (!userData) {
    return <Navigate state={location?.pathname} to={"/signin"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;

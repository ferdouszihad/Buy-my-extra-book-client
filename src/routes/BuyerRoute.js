import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import useBuyer from "../hooks/useBuyer";
import LodingAnimation from "../pages/shared/LodingAnimation";
const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <LodingAnimation></LodingAnimation>;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;

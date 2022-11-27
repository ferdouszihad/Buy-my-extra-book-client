import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import useSeller from "../hooks/useSeller";
import LodingAnimation from "../pages/shared/LodingAnimation";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  console.log(isSeller);

  const location = useLocation();

  if (loading || isSellerLoading) {
    return <LodingAnimation></LodingAnimation>;
  }

  if (user && isSeller) {
    console.log(isSeller);
    return children;
  } else console.log(isSeller);

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;

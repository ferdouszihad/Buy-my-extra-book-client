import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import useSeller from "../hooks/useSeller";
import LodingAnimation from "../pages/shared/LodingAnimation";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <LodingAnimation></LodingAnimation>;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
export default SellerRoute;

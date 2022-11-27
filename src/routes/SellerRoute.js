import React, { useContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const SellerRoute = ({ children }) => {
  const [isSeller, setIsSeller] = useState(false);
  const { user, loading } = useContext(AuthContext);

  if (loading === true) {
    return (
      <div className="mx-auto text-center my-5">
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </div>
    );
  }

  if (user && user.uid) {
    fetch(`http://localhost:5000/user/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setIsSeller(true);
      })
      .catch((err) => console.log(err));
    if (isSeller) {
      return children;
    }
  }
  return <Navigate to="/login"></Navigate>;
};

export default SellerRoute;

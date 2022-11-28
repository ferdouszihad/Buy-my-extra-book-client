import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import Title from "../shared/Title";

const DashboardNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <section
      id="nav"
      className="p-3 rounded-3"
      style={{ background: "#ddd", position: "sticky", top: "200px" }}
    >
      <Title>Admin Dashboard</Title>
      <div className="dashboard-links d-flex flex-wrap justify-content-center d-md-block mt-5">
        <Link to="all-seller" className="btn btn-outline-primary">
          All Seller
        </Link>
        <Link to="addProduct" className="btn btn-outline-primary">
          Add Product
        </Link>
        <Link
          to={`myProducts/${user.email}`}
          className="btn btn-outline-primary"
        >
          My Products
        </Link>
        <Link to="all-buyer" className="btn btn-outline-primary">
          All Buyer
        </Link>
        <Link to="myBookings" className="btn btn-outline-primary">
          My Bookings
        </Link>
      </div>
    </section>
  );
};

export default DashboardNav;

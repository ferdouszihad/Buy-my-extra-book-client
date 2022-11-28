import React from "react";
import { Link } from "react-router-dom";
import Title from "../shared/Title";

const DashboardNav = () => {
  return (
    <section id="nav" className="p-3 rounded-3" style={{ background: "#ddd" }}>
      <Title>Admin Dashboard</Title>
      <div className="dashboard-links d-flex justify-content-center d-md-block mt-5">
        <Link to="all-seller" className="btn btn-outline-primary">
          All Seller
        </Link>
        <Link to="addProduct" className="btn btn-outline-primary">
          Add Product
        </Link>
        <Link to="myProducts" className="btn btn-outline-primary">
          My Product
        </Link>
        <Link to="all-buyer" className="btn btn-outline-primary">
          All Buyer
        </Link>
        <Link to="myProducts" className="btn btn-outline-primary">
          My Bookings
        </Link>
      </div>
    </section>
  );
};

export default DashboardNav;

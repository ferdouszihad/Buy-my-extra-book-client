import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import useAdmin from "../../hooks/useAdmin";
import useBuyer from "../../hooks/useBuyer";
import useSeller from "../../hooks/useSeller";
import Title from "../shared/Title";

const DashboardNav = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);

  console.log(user.email);

  return (
    <section
      id="nav"
      className="p-3 rounded-3"
      style={{ background: "#ddd", position: "sticky", top: "200px" }}
    >
      <Title>
        {isAdmin && "Admin"} {isBuyer && "Buyer"} {isSeller && "Seller"}{" "}
        Dashboard
      </Title>
      <div className="dashboard-links d-flex flex-wrap justify-content-center d-md-block mt-5">
        {isAdmin && (
          <>
            <Link
              to="/dashboard/all-seller"
              className="btn btn-outline-primary"
            >
              All Seller
            </Link>
            <Link to="/dashboard/all-buyer" className="btn btn-outline-primary">
              All Buyer
            </Link>
          </>
        )}
        {isSeller && (
          <>
            <Link
              to="/dashboard/addProduct"
              className="btn btn-outline-primary"
            >
              Add Product
            </Link>
            <Link
              to={`/dashboard/myProducts/${user.email}`}
              className="btn btn-outline-primary"
            >
              My Products
            </Link>
          </>
        )}

        {isBuyer && (
          <>
            <Link
              to={`/dashboard/myBookings/${user.email}`}
              className="btn btn-outline-primary"
            >
              My Bookings
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default DashboardNav;

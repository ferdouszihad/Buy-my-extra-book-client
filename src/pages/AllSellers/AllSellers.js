import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "../shared/Title";
import SellerCard from "./SellerCard";

const AllSellers = () => {
  const data = useLoaderData();
  const [sellers, setSellers] = useState(data);

  const deleteHandler = (email) => {
    console.log(email);
    const sellersRemaining = sellers.filter((seller) => seller.email !== email);
    setSellers(sellersRemaining);

    fetch(`http://localhost:5000/user/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Deleted from Database", {
          position: "top-center",
        });
      })
      .catch((err) => console.log("error"));
  };

  return (
    <div className="">
      <div className="title">
        <Title>All Sellers</Title>
        <p className="text-center text-primary ">
          <span className="text-danger">{sellers?.length}</span> Active sellers
          Found
        </p>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col text-center border py-3">Seller Information</div>
        </div>

        {sellers.length === 0 ? (
          <h2 className="display-3">No Seller Found</h2>
        ) : (
          sellers.map((seller) => (
            <SellerCard
              key={seller.uid}
              deleteHandler={deleteHandler}
              seller={seller}
            ></SellerCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllSellers;

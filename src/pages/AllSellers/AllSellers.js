import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../shared/Title";
import SellerCard from "./SellerCard";

const AllSellers = () => {
  const sellers = useLoaderData();
  console.log(sellers);
  return (
    <div className="">
      <div className="title">
        <Title>All Sellers</Title>
        <p className="text-center text-primary ">
          <span className="text-danger">{sellers.length}</span> Active sellers
          Found
        </p>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col text-center border py-3">Seller Information</div>
        </div>

        {sellers.map((seller) => (
          <SellerCard key={seller.uid} seller={seller}></SellerCard>
        ))}
      </div>
    </div>
  );
};

export default AllSellers;

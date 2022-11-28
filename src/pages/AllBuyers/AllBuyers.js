import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../shared/Title";
import BuyerCard from "./BuyerCard";

const AllBuyers = () => {
  const buyers = useLoaderData();
  console.log(buyers);
  return (
    <div className="">
      <div className="title">
        <Title>All buyers</Title>
        <p className="text-center text-primary ">
          <span className="text-danger">{buyers.length}</span> Active buyers
          Found
        </p>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col text-center border py-3">buyer Information</div>
        </div>

        {buyers.map((buyer) => (
          <BuyerCard key={buyer.uid} buyer={buyer}></BuyerCard>
        ))}
      </div>
    </div>
  );
};

export default AllBuyers;

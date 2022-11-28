import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import Title from "../shared/Title";
import BuyerCard from "./BuyerCard";

const AllBuyers = () => {
  const data = useLoaderData();
  const [buyers, setBuyers] = useState(data);

  const deleteHandler = (email) => {
    console.log(email);
    const buyersRemaining = buyers.filter((buyer) => buyer.email !== email);
    setBuyers(buyersRemaining);

    fetch(`https://buymy-book-server.vercel.app/user/${email}`, {
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
          <BuyerCard
            key={buyer.uid}
            buyer={buyer}
            deleteHandler={deleteHandler}
          ></BuyerCard>
        ))}
      </div>
    </div>
  );
};

export default AllBuyers;

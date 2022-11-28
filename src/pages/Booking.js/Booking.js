import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Title from "../shared/Title";
import OrderCard from "./OrderCard";

const Booking = () => {
  const orders = useLoaderData();
  console.log(orders);
  return (
    <div className="">
      <div className="title pt-3">
        <Title>Your Ordered Books</Title>
        <p className="text-center text-primary ">
          <span className="text-danger">{orders.length}</span> book Found
        </p>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col text-center border py-3">orders Information</div>
        </div>
        {orders.length === 0 ? (
          <>
            <div className="display-4 " style={{ height: "30vh" }}>
              You didn't order anything yet.
            </div>
          </>
        ) : (
          ""
        )}

        {orders.map((order) => (
          <OrderCard key={order._id} order={order}></OrderCard>
        ))}
      </div>
    </div>
  );
};

export default Booking;

import React from "react";
import { GoVerified } from "react-icons/go";

const TopItem = ({ product }) => {
  console.log(product);
  const { postedTime, sellerName, name, image, location, sellValue, buyValue } =
    product;

  return (
    <div className="col">
      <div class="card h-100 shadow" style={{ maxWidth: "400px" }}>
        <img
          src={image}
          class="card-img-top p-3 img-fluid h-100 rounded-2"
          alt="..."
          style={{ maxHeight: "300px" }}
        />
        <div class="card-body">
          <h5 class="card-title text-center">{name}</h5>
          <div class="card-text text-center">
            <p>Location : {location}</p>
            <div className=" d-flex justify-content-between">
              <p>Selling Price : {sellValue}</p>
              <p>Buying Price : {buyValue}</p>
            </div>
            <p className="mt-3 text-center">
              posted by {sellerName}{" "}
              <GoVerified className="text-primary"></GoVerified>
            </p>
          </div>
          <div className="card-footer text-center">
            <small>posted time {postedTime}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopItem;

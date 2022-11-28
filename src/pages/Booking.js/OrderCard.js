import React from "react";
import { Button } from "react-bootstrap";

const OrderCard = ({ order }) => {
  const { _id, bookName, bookImage, price, orderTime } = order;
  return (
    <div className="row border align-items-center">
      <div className="col-md-10 py-3">
        <div className="card">
          <div className="p-3 d-flex flex-md-row gap-2 align-items-center">
            <div className="img">
              <img src={bookImage} alt="" className="img-fluid" />
            </div>
            <div className="info">
              <p>Order ID : {_id}</p>
              <p>name : {bookName}</p>
              <p>Price : {price} Taka</p>
            </div>
          </div>
          <div className="card-footer text-center">booked at {orderTime}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

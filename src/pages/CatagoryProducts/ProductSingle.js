import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { GoVerified } from "react-icons/go";
import BookingModal from "./BookingModal";

const ProductSingle = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(product);
  const {
    _id,
    postedTime,
    sellerName,
    purchaseYear,
    name,
    image,
    location,
    sellValue,
    buyValue,
    contact,
    sellerEmail,
  } = product;

  const bookingInfo = {
    bookId: _id,
    name: name,
    price: sellValue,
    sellerContact: contact,
    sellerEmail: sellerEmail,
  };
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
            <p>Book Purchased at {purchaseYear} </p>
          </div>

          <Button
            variant="primary"
            className="d-block w-100"
            onClick={handleShow}
          >
            Book Now
          </Button>
          <p className="mt-3 text-center">
            posted by {sellerName}{" "}
            <GoVerified className="text-primary"></GoVerified>
          </p>
          <div className="card-footer mt-3 text-center">
            <small>posted time {postedTime}</small>
          </div>
        </div>
      </div>
      <BookingModal
        handleClose={handleClose}
        handleShow={handleShow}
        bookingInfo={bookingInfo}
        show={show}
      ></BookingModal>
    </div>
  );
};

export default ProductSingle;

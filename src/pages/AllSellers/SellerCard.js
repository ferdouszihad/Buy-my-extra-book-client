import React from "react";
import { Button } from "react-bootstrap";

const SellerCard = ({ seller, deleteHandler }) => {
  const { name, contact, email } = seller;
  return (
    <div className="row border align-items-center">
      <div className="col-md-10 py-3">
        <div className="card p-3">
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Contact : {contact}</p>
        </div>
      </div>
      <div className="col-md-2 text-center  py-3 d-flex flex-wrap gap-2">
        <Button variant="danger" onClick={() => deleteHandler(email)}>
          Delete Seller
        </Button>
        <Button variant="primary">Verify Seller</Button>
      </div>
    </div>
  );
};

export default SellerCard;

import React from "react";
import { Button } from "react-bootstrap";

const BuyerCard = ({ buyer }) => {
  const { name, contact, email } = buyer;
  return (
    <div className="row border align-items-center">
      <div className="col-md-10 py-3">
        <div className="card p-3">
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Contact : {contact ? contact : "Not Given Yet"}</p>
        </div>
      </div>
      <div className="col-md-2 text-center  py-3 d-flex flex-wrap gap-2">
        <Button variant="danger">Delete buyer</Button>
      </div>
    </div>
  );
};

export default BuyerCard;

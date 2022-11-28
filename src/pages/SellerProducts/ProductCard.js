import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ProductCard = ({
  product,
  deleteHandler,
  handleAdv,
  advertiseStatus,
  setAdvertiseStatus,
}) => {
  const { _id, name, status, sellValue, image, isAdv } = product;
  [advertiseStatus, setAdvertiseStatus] = useState(isAdv);

  const handleAdvertiesment = (id) => {
    setAdvertiseStatus(true);
    handleAdv(id);
  };
  return (
    <div className="row border align-items-center">
      <div className="col-md-10 py-3">
        <div className="card p-3 flex-md-row gap-2 align-items-center">
          <div className="img">
            <img
              src={image}
              alt=""
              className="img-fluid"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className="info">
            <p>Product ID : {_id}</p>
            <p>name : {name}</p>
            <p>Price : {sellValue} Taka</p>
            <p>Status : {status === "none" ? "Not Sold" : status}</p>
            {advertiseStatus && (
              <span className="text-success fw-bold">Advetising to User</span>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-2 text-center  py-3 d-flex flex-wrap gap-2">
        {!advertiseStatus ? (
          <Button variant="success" onClick={() => handleAdvertiesment(_id)}>
            Advertise
          </Button>
        ) : (
          <>
            <span className="text-success fw-bold">Advetising</span>
          </>
        )}

        <Button variant="danger" onClick={() => deleteHandler(_id)}>
          Delete product
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { Spinner } from "react-bootstrap";

const LodingAnimation = () => {
  return (
    <div
      style={{ height: "60vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="spinners">
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </div>
    </div>
  );
};

export default LodingAnimation;

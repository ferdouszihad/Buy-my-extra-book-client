import React from "react";

const Title = ({ children }) => {
  return (
    <div className="d-flex justify-content-center">
      <h2 className="fw-semibold py-2 px-5 rounded-pill  border-start border-bottom border-5 border-primary">
        {children}
      </h2>
    </div>
  );
};

export default Title;

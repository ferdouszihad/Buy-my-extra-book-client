import React from "react";

const Title = ({ children }) => {
  return (
    <div className="d-flex justify-content-center">
      <h2 className="fw-semibold py-2 border-bottom border-5 border-primary">
        {children}
      </h2>
      ;
    </div>
  );
};

export default Title;

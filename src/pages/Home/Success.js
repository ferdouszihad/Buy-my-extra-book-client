import React from "react";
import CountUp from "react-countup";
import Title from "../shared/Title";

const Success = () => {
  return (
    <div className="success-bg py-5 mt-5 text-light">
      <div className="container my-5">
        <div className="title py-5">
          <Title>We are Trusted</Title>
        </div>

        <div className="success-box my-5 d-flex flex-wrap gap-4 justify-content-around ">
          <div className="success  ">
            <h1>
              <CountUp
                end={91}
                duration={4}
                delay={1}
                enableScrollSpy={true}
              ></CountUp>
            </h1>
            <h4>Seller</h4>
          </div>
          <div className="success">
            <h1>
              <CountUp
                end={913}
                duration={8}
                delay={1}
                enableScrollSpy={true}
              ></CountUp>
            </h1>
            <h4>Books</h4>
          </div>

          <div className="success">
            <h1>
              <CountUp
                end={1909}
                duration={10}
                delay={1}
                enableScrollSpy={true}
              ></CountUp>
            </h1>
            <h4>Buyer</h4>
          </div>
          <div className="success">
            <h1>
              <CountUp
                end={367}
                duration={7}
                delay={1}
                enableScrollSpy={true}
              ></CountUp>
            </h1>
            <h4>Sell</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

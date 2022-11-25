import React from "react";
import CountUp from "react-countup";
const About = () => {
  return (
    <div className="success-bg py-20">
      <h1 className="text-4xl text-white text-center font-bold pb-10">
        People Loves Us
      </h1>
      <div className="container my-5">
        <div className="success-box my-4 flex flex-wrap gap-4 justify-around ">
          <div className="success  ">
            <h1>
              <CountUp
                end={60}
                duration={2}
                delay={1}
                enableScrollSpy={true}
              ></CountUp>
            </h1>
            <h4>Seller</h4>
          </div>
          <div className="success">
            <h1>
              <CountUp
                end={293}
                duration={4}
                delay={1}
                enableScrollSpy={true}
              ></CountUp>
            </h1>
            <h4>Books</h4>
          </div>

          <div className="success">
            <h1>
              <CountUp
                end={490}
                duration={5}
                delay={1}
                enableScrollSpy={true}
              ></CountUp>
            </h1>
            <h4>Buyers</h4>
          </div>
          <div className="success">
            <h1>
              <CountUp
                end={967}
                duration={6}
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

export default About;

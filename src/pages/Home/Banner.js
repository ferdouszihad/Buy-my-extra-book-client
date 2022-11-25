import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-black">
        <div className="hero-overlay bg-opacity-60 p-10 rounded-md">
          <h1 className="mb-5 text-6xl font-bold leading-relaxed capitalize">
            Don't Store old books <br />
            <span>Share and Spread the Knowledge</span>
          </h1>
          <p className="mb-5 text-2xl">
            Sellers are ready to sell their books at a cheap price . Grab your
            one at the cheap price
          </p>
          <button className="btn btn-primary btn-lg ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

import AdvertiseItems from "./AdvertiseItems";
import Banner from "./Banner";
import Catagories from "./Catagories";
import Success from "./Success";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertiseItems></AdvertiseItems>
      <Catagories></Catagories>
      <Success></Success>
    </div>
  );
};

export default Home;

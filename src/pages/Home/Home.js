import React from "react";
import AdvertiseItems from "./AdvertiseItems";
import Banner from "./Banner";
import Catagories from "./Catagories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertiseItems></AdvertiseItems>
      <Catagories></Catagories>
    </div>
  );
};

export default Home;

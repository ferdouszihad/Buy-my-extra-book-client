import React from "react";
import About from "./About";
import AdvertiseItems from "./AdvertiseItems";
import Banner from "./Banner";
import Catagories from "./Catagories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertiseItems></AdvertiseItems>
      <Catagories></Catagories>
      <About></About>
    </div>
  );
};

export default Home;

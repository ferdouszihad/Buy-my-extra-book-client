import React, { useEffect, useState } from "react";
import LodingAnimation from "../shared/LodingAnimation";
import Title from "../shared/Title";
import TopItem from "./TopItem";

const AdvertiseItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://buymy-book-server.vercel.app/advertiseItems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  if (!items) {
    return <LodingAnimation></LodingAnimation>;
  }

  return (
    <div className="">
      {items.length > 0 ? (
        <section className="py-5">
          <Title>Products from Our Seller</Title>
          <div className="item-container container my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {items.map((item) => (
                <TopItem key={item._id} product={item}></TopItem>
              ))}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdvertiseItems;

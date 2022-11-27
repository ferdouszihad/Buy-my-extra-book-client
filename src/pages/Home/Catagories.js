import React, { useEffect, useState } from "react";
import Title from "../shared/Title";
import CatagorySingle from "./CatagorySingle";

const Catagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((cat) => setCatagories(cat))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="py-5">
      <Title>Choose Products By Catagory</Title>

      <div className="container catagory-container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {catagories.map((catagory) => (
            <CatagorySingle
              key={catagory._id}
              catagory={catagory}
            ></CatagorySingle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catagories;

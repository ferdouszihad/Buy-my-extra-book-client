import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../shared/Title";
import ProductSingle from "./ProductSingle";

const CatagoryProducts = () => {
  const { catagoryInfo, catagoryProducts } = useLoaderData();
  const { name, description } = catagoryInfo;
  return (
    <div className="pt-5 mt-5">
      <div className="title py-5">
        <Title>
          <span className="text-uppercase">{name} Books</span>
        </Title>
        <p className="text-center">{description}</p>
      </div>
      <div className="container py-4">
        {catagoryProducts.length === 0 ? (
          <>
            <div className="display-4 " style={{ height: "30vh" }}>
              Currently No Books are available
            </div>
          </>
        ) : (
          ""
        )}
        <div className="products-container row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center g-4 ">
          {catagoryProducts.map((product) => (
            <ProductSingle key={product._id} product={product}></ProductSingle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatagoryProducts;

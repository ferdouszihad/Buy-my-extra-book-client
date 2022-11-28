import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Title from "../shared/Title";
import ProductCard from "./ProductCard";

const SellerProducts = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="">
      <div className="title pt-3">
        <Title>Products Added By You</Title>
        <p className="text-center text-primary ">
          <span className="text-danger">{products.length}</span> Products Found
        </p>
      </div>
      .
      <div className="container">
        <div className="row ">
          <div className="col text-center border py-3">
            Products Information
          </div>
        </div>
        {products.length === 0 ? (
          <>
            <div className="display-4 " style={{ height: "30vh" }}>
              No Products Added .
              <Link className="btn btn-primary" to="/dashboard/addProduct">
                {" "}
                Add a Product Now
              </Link>
            </div>
          </>
        ) : (
          ""
        )}

        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SellerProducts;

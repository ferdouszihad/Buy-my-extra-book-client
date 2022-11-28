import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "../shared/Title";
import ProductCard from "./ProductCard";

const SellerProducts = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);
  const [advertiseStatus, setAdvertiseStatus] = useState(false);
  const handleAdv = (id) => {
    fetch(`https://buymy-book-server.vercel.app/product/MakeAd/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Products now Listed to Our Advertisement Section");
      })
      .catch((err) => console.log(err));
  };

  const deleteHandler = (id) => {
    const productsRemaining = products.filter((product) => product._id !== id);
    setProducts(productsRemaining);

    fetch(`https://buymy-book-server.vercel.app/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product Deleted from Database", {
          position: "top-center",
        });
      })
      .catch((err) => console.log("error"));
  };
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
          <ProductCard
            key={product._id}
            deleteHandler={deleteHandler}
            handleAdv={handleAdv}
            product={product}
            advertiseStatus={advertiseStatus}
            setAdvertiseStatus={setAdvertiseStatus}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SellerProducts;

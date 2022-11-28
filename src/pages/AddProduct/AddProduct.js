import { format } from "date-fns";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/UserContext";
import Title from "../shared/Title";

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const time = format(new Date(), "PPpp");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const product = {
      name: form.name.value,
      condition: form.condition.value,
      buyValue: form.buyValue.value,
      sellValue: form.sellValue.value,
      contact: form.contact.value,
      purchaseYear: form.purchaseYear.value,
      catagory: form.catagory.value,
      image: form.image.value,
      sellerID: user.uid,
      sellerName: user.displayName,
      sellerEmail: user.email,
      postedTime: time,
      location: form.location.value,
      status: "none",
    };
    console.log(product);

    // //console.log(service);

    fetch("https://buymy-book-server.vercel.app/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Successfully Added", {
          position: "top-center",
        });
        form.reset();
        navigate(`/dashboard/myProducts/${user.email}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("There is A Error");
      });
  };
  return (
    <div className="my-5">
      <div className="container">
        <div className="title">
          <Title>Add your Product to Our Store</Title>
        </div>

        <div className="add-service-container ">
          <div className="add-service-form-container">
            <hr />
            <form onSubmit={handleSubmit} className="">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Book Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your books name"
                  required
                />
              </div>

              <div className="row">
                <Form.Group className="col mb-3">
                  <Form.Label>Select Catagory</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="catagory"
                  >
                    <option value="1" selected>
                      Academic
                    </option>
                    <option value="2">Fiction</option>
                    <option value="3">Non-Fiction</option>
                    <option value="4">Historical</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="col mb-3">
                  <Form.Label>Select Product Condition</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="condition"
                  >
                    <option value="excellent" selected>
                      Excellent
                    </option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </Form.Select>
                </Form.Group>

                <div className="mb-3 col">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Years of Purchase
                  </label>
                  <input
                    type="text"
                    name="purchaseYear"
                    className="form-control"
                    placeholder="Which year you Purchase it?"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Add a Perfect description for your Books"
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Image url
                </label>
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  placeholder="Insert any Image URl of your Books"
                  required
                />
              </div>
              <div className="row">
                <div className="mb-3  col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Buying Price
                  </label>
                  <input
                    name="buyValue"
                    type="number"
                    className="form-control"
                    placeholder="enter your Buying Price"
                    required
                  />
                </div>
                <div className="mb-3 col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Selling Price
                  </label>
                  <input
                    name="sellValue"
                    type="number"
                    className="form-control"
                    placeholder="enter your Selling Price"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  User Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Enter Selling Location"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Seller Mobile Number
                </label>
                <input
                  type="text"
                  name="contact"
                  className="form-control"
                  placeholder="Enter Selling Contact No."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

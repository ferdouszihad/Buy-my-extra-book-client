import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.ServiceName.value;
    const image = form.image.value;
    const desc = form.desc.value;
    const pricing = form.pricing.value;

    const service = {
      id: parseInt(Math.random() * 100),
      name: name,
      img: image,
      description: desc,
      pricing: pricing,
      review: 0,
      sell: 0,
    };
    //console.log(service);

    fetch("https://tiffinbhai-server.vercel.app/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("New Service Added", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="my-5">
      <div className="container mt-5 pt-5">
        <div className="add-service-form-container">
          <div>
            <h2 className="border-start border-5 border-primary ps-4 mb-5">
              Add Your Books For Sell
            </h2>{" "}
            <hr />
            <form onSubmit={handleSubmit} className="w-75">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="ServiceName"
                  className="form-control"
                  placeholder="Enter your books name"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  name="desc"
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
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Price
                </label>
                <input
                  name="pricing"
                  type="number"
                  className="form-control"
                  placeholder="enter your Book Price"
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

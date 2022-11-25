import React from "react";

const Catagories = () => {
  return (
    <section className="py-20">
      <h1 className="text-3xl text-center pb-10 uppercase font-semibold">
        Choose Items From Catagory
      </h1>
      <div className="container mx-auto md:px-10 lg:px-20">
        <div className="card-container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catagories;

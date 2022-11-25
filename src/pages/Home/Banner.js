import React from "react";
import { Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <section id="banner">
      <div className="container text-light">
        <h2 className="display-1 fw-bold">Books never gets old</h2>
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            "A Platform for Buying Books",
            1000,
            "A Platform for Selling Books",
            1000,
            "A Platform for Sharing Knowledge",
            1000,
          ]}
          speed={1} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: "2em", color: "lightskyblue" }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />

        <Button variant="outline-light" className="d-block mt-4 btn-lg">
          Buy Books from $1.99
        </Button>
      </div>
    </section>
  );
};

export default Banner;

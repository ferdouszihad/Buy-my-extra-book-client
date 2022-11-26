import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const logo =
    "https://cdn0.iconfinder.com/data/icons/library-9/64/Search-book-find-education-school-library-magnifier-256.png";
  return (
    <footer className="py-2 bg-dark text-light text-center">
      <Link
        to="/home"
        className="d-flex gap-2 justify-content-center align-items-center"
      >
        <img src={logo} alt="" width="60px" />
        <h2>Buy-My-Book</h2>
      </Link>
      <hr />
      <p>Ferdous Zihad || All right reserved</p>
    </footer>
  );
};

export default Footer;

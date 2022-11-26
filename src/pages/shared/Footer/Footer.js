import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const logo =
    "https://cdn0.iconfinder.com/data/icons/library-9/64/Search-book-find-education-school-library-magnifier-256.png";
  return (
    <footer className="py-2 bg-black text-light text-center">
      <Link
        to="/home"
        className="d-flex gap-2 justify-content-center align-items-center"
      >
        <img src={logo} alt="" width="60px" />
        <h2>Buy-My-Book</h2>
      </Link>
      <div className="d-flex justify-content-center gap-3">
        <a
          href="http://facebook.com/ferdouszihad.09"
          rel="noreferrer"
          target="_blank"
          className="fs-3"
        >
          <RiFacebookCircleFill></RiFacebookCircleFill>
        </a>
        <a
          href="http://github.com/techsoros"
          rel="noreferrer"
          target="_blank"
          className="fs-3"
        >
          <AiFillGithub></AiFillGithub>
        </a>
        <a
          href="http://twitter.com/ferdouszihad09"
          rel="noreferrer"
          target="_blank"
          className="fs-3"
        >
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </a>
      </div>

      <hr />
      <p>Ferdous Zihad || All right reserved</p>
    </footer>
  );
};

export default Footer;

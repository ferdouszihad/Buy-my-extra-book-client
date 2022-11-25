import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const expand = "md";
  const logo =
    "https://cdn0.iconfinder.com/data/icons/library-9/64/Search-book-find-education-school-library-magnifier-256.png";
  return (
    <div id="navbar">
      <Navbar key={expand} expand={expand} className="mb-3 fixed-top  bg-nav">
        <Container>
          <Navbar.Brand>
            <Link to="/home" className="d-flex gap-2 align-items-center">
              <img src={logo} alt="" width="60px" />
              <h2>Buy-My-Book</h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                <Link to="/home">Home</Link>
                <Link to="/Catagories">Catagories</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

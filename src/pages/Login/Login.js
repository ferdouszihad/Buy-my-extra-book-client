import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/UserContext";
import Title from "../shared/Title";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Welcome!! You are logged in");
        navigate("/home");
      })
      .catch((error) => {
        toast.error("Sign in Failed");
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        alert("Successfull");
        console.log(user);
        form.reset();
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        setError(error.code);
        alert("Sign-in Failed");
      });
  };
  return (
    <div>
      <div className="container mt-5 pt-5">
        <Title>User Login</Title>
        <div
          className="form-container mx-auto border border-1 p-3 my-5"
          style={{ maxWidth: "420px" }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <small className="error text-danger">{error}</small>
            </Form.Group>
            <Button variant="primary" type="submit" className="d-block w-100">
              Get me in
            </Button>
          </Form>
          <p className="mt-1 mb-3 ">
            Don't have a acoount?{" "}
            <Link className="text-decoration-none" to="/register">
              Register-now
            </Link>
          </p>
          <div className="d-flex justify-content-between">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline-warning text-dark "
            >
              Sign-in with
              <img
                src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
                alt=""
                width="35px"
                className="mx-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

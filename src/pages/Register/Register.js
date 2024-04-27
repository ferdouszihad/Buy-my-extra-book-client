import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/UserContext";
import Title from "../shared/Title";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, setUser, googleSignIn, updateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const addUserToDB = (user) => {
    fetch("https://bmb-server.vercel.app/addUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("User Added to Our System");
        console.log(data);
      })
      .catch((err) => toast(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
        toast.success("Registration Successfull");
        const myUser = {
          uid: user.uid,
          name: user.displayName,
          contact: user.phoneNumber,
          role: "buyer",
          email: user.email,
        };
        addUserToDB(myUser);
        navigate("/home");
      })
      .catch((error) => {
        alert("Cant sign in");
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const contact = form.contact.value;
    console.log(role, contact);

    if (password.length <= 6) {
      setError("Make the password minimum 6 characters long");
      return;
    }

    createUser(email, password)
      .then((res) => {
        toast.success("Registration Successfull");
        const user = res.user;
        user.displayName = name;
        console.log(user);
        const userInfo = {
          displayName: name,
          phoneNumber: contact,
        };

        updateUser(userInfo)
          .then(() => {
            setUser(user);
            console.log(user);
          })
          .catch((err) => console.log(err));

        const myUser = {
          uid: user.uid,
          name: name,
          contact: contact,
          role: role,
          email: user.email,
        };
        addUserToDB(myUser);
        navigate("/home");
      })
      .catch((error) => {
        toast.error(` Can't Sign In. Because ${error.code}`);
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container mt-5 pt-5">
        <Title>Join With US</Title>
        <div
          className="form-container mx-auto border border-1 my-5 p-3"
          style={{ maxWidth: "420px" }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter Full Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Contact No.</Form.Label>
              <Form.Control
                type="tel"
                name="contact"
                placeholder="Enter Your Phone number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select your Role</Form.Label>
              <Form.Select aria-label="Default select example" name="role">
                <option value="buyer" selected>
                  I want to be a Buyer
                </option>
                <option value="seller"> I want to be a Seller</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <small className="text-danger">{error}</small>
            </Form.Group>

            <Button variant="primary" type="submit" className="d-block w-100">
              Get me in
            </Button>
          </Form>
          <p className="mt-1 mb-3 ">
            Allready have a acoount?
            <Link className="text-decoration-none" to="/login">
              Login-now
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

export default Register;

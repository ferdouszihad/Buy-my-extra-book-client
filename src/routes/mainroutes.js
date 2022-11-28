import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../layouts/LayoutMain";
import AddProduct from "../pages/AddProduct/AddProduct";
import Blog from "../pages/Blog/Blog";
import AllCatagory from "../pages/AllCatagory/AllCatagory";
import Error404 from "../pages/Error404";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyProducts from "../pages/MyProducts.js/MyProducts";
import PrivateRoute from "./PrivateRoute";
import CatagoryProducts from "../pages/CatagoryProducts/CatagoryProducts";
import AllSellers from "../pages/AllSellers/AllSellers";
import LayOutDashboard from "../layouts/LayOutDashboard";
import AllBuyers from "../pages/AllBuyers/AllBuyers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain></LayoutMain>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "catagories",
        element: <AllCatagory></AllCatagory>,
      },
      {
        path: "all-sellers",
        element: (
          <PrivateRoute>
            <AllSellers></AllSellers>
          </PrivateRoute>
        ),
      },
      {
        path: "catagories/:cid",
        loader: async ({ params }) =>
          fetch(
            `https://buymy-book-server.vercel.app/catagories/${params.cid}`
          ),
        element: (
          <PrivateRoute>
            <CatagoryProducts></CatagoryProducts>
          </PrivateRoute>
        ),
      },

      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "my-products",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
  {
    path: "/dashboard",

    element: (
      <PrivateRoute>
        <LayOutDashboard></LayOutDashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/all-seller",
        loader: async () => fetch("http://localhost:5000/all-seller"),
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/all-buyer",
        loader: async () => fetch("http://localhost:5000/all-buyer"),
        element: <AllBuyers></AllBuyers>,
      },
    ],
  },
]);

export default router;

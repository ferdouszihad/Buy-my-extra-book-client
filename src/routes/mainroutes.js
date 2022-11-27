import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../layouts/LayoutMain";
import AddProduct from "../pages/AddProduct/AddProduct";
import Blog from "../pages/Blog/Blog";
import AllCatagory from "../pages/AllCatagory/AllCatagory";
import Error404 from "../pages/Error404";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SellerRoute from "./SellerRoute";

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
        path: "add-product",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
]);

export default router;

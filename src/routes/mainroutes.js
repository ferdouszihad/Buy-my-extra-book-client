import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../layouts/LayoutMain";
import AddProduct from "../pages/AddProduct/AddProduct";
import Blog from "../pages/Blog/Blog";
import AllCatagory from "../pages/AllCatagory/AllCatagory";
import Error404 from "../pages/Error404";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CatagoryProducts from "../pages/CatagoryProducts/CatagoryProducts";
import AllSellers from "../pages/AllSellers/AllSellers";
import LayOutDashboard from "../layouts/LayOutDashboard";
import AllBuyers from "../pages/AllBuyers/AllBuyers";
import SellerProducts from "../pages/SellerProducts/SellerProducts";
import Booking from "../pages/Booking.js/Booking";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";

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
        path: "catagories/:cid",
        loader: async ({ params }) =>
          fetch(`https://bmb-server.vercel.app/catagories/${params.cid}`),
        element: (
          <PrivateRoute>
            <CatagoryProducts></CatagoryProducts>
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
        loader: async () => fetch("https://bmb-server.vercel.app/all-seller"),
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <h2 className="display-1 dashboard-home ">Welcome to Dashboard</h2>
        ),
      },
      {
        path: "/dashboard/all-buyer",
        loader: async () => fetch("https://bmb-server.vercel.app/all-buyer"),
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts/:email",
        loader: async ({ params }) =>
          fetch(
            `https://bmb-server.vercel.app/seller-products/${params.email}`
          ),
        element: (
          <SellerRoute>
            <SellerProducts></SellerProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myBookings/:email",
        loader: async ({ params }) =>
          fetch(`https://bmb-server.vercel.app/myBookings/${params.email}`),
        element: (
          <BuyerRoute>
            <Booking></Booking>
          </BuyerRoute>
        ),
      },
    ],
  },
]);

export default router;

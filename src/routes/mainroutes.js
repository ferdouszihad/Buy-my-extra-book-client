import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../layouts/LayoutMain";
import AddProduct from "../pages/AddProduct/AddProduct";
import Blog from "../pages/Blog/Blog";
import Error404 from "../pages/Error404";
import Home from "../pages/Home/Home";

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
        path: "add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
]);

export default router;

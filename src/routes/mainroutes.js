import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../layouts/LayoutMain";
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
    ],
  },
]);

export default router;

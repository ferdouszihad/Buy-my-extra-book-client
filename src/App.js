import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./routes/mainroutes";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

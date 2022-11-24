import React from "react";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <div>
      <header>I am Header</header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>i am footer</footer>
    </div>
  );
};

export default LayoutMain;

import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../pages/DashboardNav/DashboardNav";
import Header from "../pages/shared/Header/Header";

const LayOutDashboard = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="pt-5">
        <div className="container my-5">
          <div className="row mt-5">
            <div className="col-md-3">
              <DashboardNav></DashboardNav>
            </div>
            <div className="col-md-9">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default LayOutDashboard;

import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>this is the footer</footer>
    </div>
  );
};

export default Layout;

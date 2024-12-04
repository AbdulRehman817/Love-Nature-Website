import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./src/Home/Navbar/Navbar";
import Footer from "./src/Home/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Faqs from "./sections/Faqs";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Faqs />
      <Footer />
    </>
  );
};

export default Layout;

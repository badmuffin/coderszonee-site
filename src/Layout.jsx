import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Profile from "./pages/Profile";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Profile/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

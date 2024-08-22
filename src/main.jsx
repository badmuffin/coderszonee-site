import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Sign from "./pages/Sign";
import NotFound from "./sections/NotFound";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign" element={<Sign />} />
      </Route>
      <Route
        path="/*"
        element={
          <>
            <Navbar /> 
            <NotFound />
            <Footer />
          </>
        }
      />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </StrictMode>
);

// Frequently add question in Home page

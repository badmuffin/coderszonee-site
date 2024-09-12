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
import Courses from "./pages/Courses";
import CourseDetailPage from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import HackathonForm from "./sections/HackathonForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/detail" element={<CourseDetailPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/hack" element={<HackathonForm />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
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

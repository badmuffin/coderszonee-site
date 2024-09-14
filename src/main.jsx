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
import NotFound from "./sections/NotFound";
import Courses from "./pages/Courses";
import CourseDetailPage from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import HackathonForm from "./sections/HackathonForm";
import Profile from "./pages/Profile";
import LoginForm from "./sections/LoginForm";
import RegisterForm from "./sections/RegisterForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/detail" element={<CourseDetailPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/hack" element={<HackathonForm />} />
        <Route path="/profile" element={<Profile />} />
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

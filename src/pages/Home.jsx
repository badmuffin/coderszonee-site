import React from "react";

import Navbar from "../sections/Navbar";
import Testimonial from "../sections/Testimonial";
import PopularCourse from "../sections/PopularCourse";
import AboutUs from "../sections/AboutUs";
import Footer from "../sections/Footer";
import ContactUs from "../sections/ContactUs";
import Newsletter from "../sections/Newsletter";
import WhyUs from "../sections/WhyUs";
import Faqs from "../sections/Faqs";
import Hero from "../sections/Hero";
import SignForm from "../sections/SignForm";

const Home = () => {
  return (
    <main className="scroll-smooth ">
      <Hero />
      <WhyUs />
      <PopularCourse />
      <Testimonial />
      <Newsletter />
    </main>
  );
};

export default Home;

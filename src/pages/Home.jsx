import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Testimonial from "../sections/Testimonial";
import PopularCourse from "../sections/PopularCourse";
import MostDemand from "../sections/MostDemand";
import AboutUs from "../sections/AboutUs";

const Home = () => {
  return (
    <main className="relative p-10 max-lg:p-2">
      <Navbar />
      <section className="p-10">
        <Hero />
      </section>
      <section className="p-10">
        <MostDemand />
      </section>
      <section className="p-10">
        <PopularCourse />
      </section>
      <section className="p-10">
        <AboutUs />
      </section>
      <section className="p-10">
        <Testimonial />
      </section>
    </main>
  );
};

export default Home;

import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Testimonial from "../sections/Testimonial";

const Home = () => {
  return (
    <main className="relative p-10">
      <Navbar />
      <section className="p-10">
        <Hero />
      </section>
      <section className="p-10">
        <Testimonial />
      </section>
    </main>
  );
};

export default Home;

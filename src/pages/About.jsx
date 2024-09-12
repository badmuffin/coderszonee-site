import React, { useEffect } from "react";
import AboutUs from "../sections/AboutUs";
import Faqs from "../sections/Faqs";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <AboutUs />
      <Faqs />
    </>
  );
};

export default About;

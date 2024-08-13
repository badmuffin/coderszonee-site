import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MostDemand = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };

    const categories = [
        {id: 1, Course: "Web Development"},
        {id: 2, Course: "Backend Development"},
        {id: 3, Course: "Fullstack Development"},
        {id: 4, Course: "Python Programming"},
        {id: 5, Course: "UI/UX Design with Figma"},
        {id: 6, Course: "Data Structures & Algorithm"},
        {id: 7, Course: "Java Core & Springboot"},
    ]
  return (
    <section className=" px-20 py-0">
        Most Demanding Categories - Categories not confirmed yet
    </section>
  );
};

export default MostDemand;

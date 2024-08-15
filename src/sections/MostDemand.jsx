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
    { id: 1, Course: "Web Development" },
    { id: 2, Course: "Backend Development" },
    { id: 3, Course: "Fullstack Development" },
    { id: 4, Course: "Python Programming" },
    { id: 5, Course: "UI/UX Design with Figma" },
    { id: 6, Course: "Data Structures & Algorithm" },
    { id: 7, Course: "Java Core & Springboot" },
  ];
  return (
    <section className=" px-20 py-2 ">
      <div>
        <h1 className="text-center font-extrabold leading-snug text-6xl mb-10 max-sm:text-3xl">
          Most <span className="text-orange-600"> Demanding </span> Categories
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center ">
        {categories.map((data) => (
          <div
            id={data.id}
            key={data.id}
            className="m-10 px-6 py-4 border-2 border-orange-600 rounded-2xl shadow-lg w-full"
          >
            <img src="" alt="icon" className="p-2" />
            <p className="px-2">{data.Course}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostDemand;

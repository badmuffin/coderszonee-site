import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import img1 from "../assets/profile1.png";
import img2 from "../assets/profile2.png";
import img3 from "../assets/profile3.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonial = () => {
  const reviews = [
    {
      key: "A",
      imgUrl: img1,
      customerName: "Tom Holland",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
    },
    {
      key: "B",
      imgUrl: img2,
      customerName: "Mike Wilson",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
    },
    {
      key: "C",
      imgUrl: img3,
      customerName: "Jessica Tyler",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
    },
  ];

  return (
    <section className="px-20 py-10 max-sm:p-2">
      <div className="font-extrabold text-6xl text-center p-10 max-sm:text-4xl">What Our <span className="text-orange-600"> Students </span> Say?</div>
      <div className="text-center text-xl pb-10">Hear success stories from our Students about their exceptional experiences with us.</div>
      <div className="w-full">
        <Carousel className=" rounded-3xl shadow-xl"  responsive={responsive} infinite={true}>
          {reviews.map((review) => (
            <TestimonialCard
              key={review.key}
              imgUrl={review.imgUrl}
              customerName={review.customerName}
              feedback={review.feedback}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;

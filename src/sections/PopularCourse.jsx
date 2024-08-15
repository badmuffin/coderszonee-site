import React from "react";
import { courseCardDetail } from "../constants/courseCardDetail";
import CourseCard from "../components/CourseCard";
import Button from "../components/Button";

const PopularCourse = () => {
  return (
    <section className=" px-20 pt-6 pb-10 max-sm:p-2">
      <h1 className="font-extrabold text-6xl text-center p-20 
      max-sm:text-3xl max-sm:p-2 max-md:text-6xl">
        Popular <span className="text-orange-600"> Courses </span>
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10 w-full max-sm:flex-col max-md:w-full max-md:flex-col">
        {courseCardDetail.map((detail) => (
          <CourseCard
            id={detail.id}
            key={detail.key}
            courseBanner={detail.courseBanner}
            courseTitle={detail.courseTitle}
            author={detail.author}
            rating={detail.rating}
            price={detail.price}
          />
        ))}
      </div>
      <div className="pt-20 flex justify-center items-center max-sm:pt-10">
        <Button
          label="Browse More Courses"
          bgColor="bg-orange-600"
          border="border-orange-700"
          textColor="text-white"
        />
      </div>
    </section>
  );
};

export default PopularCourse;

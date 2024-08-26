import React from "react";
import { courseCardDetail } from "../constants/courseCardDetail";
import CardCourse from "../components/CardCourse";

const Courses = () => {
  return (
    <section className=" w-full p-20 max-sm:p-2 ">
      <div>
        <h1 className="font-extrabold text-5xl text-left pb-6 max-sm:text-3xl max-sm:p-2 max-md:text-4xl">
          All <span className="text-orange-600"> Courses </span>
        </h1>
        <div className=" grid gap-2 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {courseCardDetail.map((detail) => (
            <CardCourse
              id={detail.id}
              key={detail.key}
              courseBanner={detail.courseBanner}
              courseTitle={detail.courseTitle}
              author={detail.author}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-extrabold text-5xl text-left pt-20 pb-6 max-sm:text-3xl max-sm:p-2 max-md:text-4xl">
          Most <span className="text-orange-600"> Popular </span>
        </h1>
        <div className=" grid gap-2 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {courseCardDetail.map((detail) => (
            <CardCourse
              id={detail.id}
              key={detail.key}
              courseBanner={detail.courseBanner}
              courseTitle={detail.courseTitle}
              author={detail.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

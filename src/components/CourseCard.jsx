import React from "react";



const CourseCard = ({courseBanner, courseTitle, author}) => {
  return (
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        {/* Image  */}
        <div
          className="col-span-2 text-left text-gray-600 hover:text-gray-700"
        >
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src={courseBanner}
              alt=""
              className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125"
            />
          </div>
        </div>

        {/* Course Details */}
        <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
          <a href="#" className="mt-3 overflow-hidden text-2xl font-semibold">
            {courseTitle}
          </a>
          <p className="overflow-hidden text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            {author}
          </a>

          {/* Additional Info and Enroll Button */}
          <div className="flex flex-col text-gray-700 sm:flex-row">
            <div className="flex h-fit space-x-2 text-sm font-medium">
              <div className="rounded-full bg-green-100 px-2 py-0.5 text-green-700">
                Advance level
              </div>
              <div className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
                160 Enrolled
              </div>
            </div>
            <div
              className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white sm:ml-auto"
            >
              Enroll Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

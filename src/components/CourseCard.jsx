import React from "react";

const CourseCard = ({ courseBanner, courseTitle, author, rating, price }) => {
  return (
    <div className=" shadow-lg hover:shadow-2xl bg-white w-[30%] max-sm:w-full">
      <div className=" h-full w-full">
        <img className=" object-cover " src={courseBanner} />
      </div>
      <div className=" px-4 py-2">
        <h1 className="font-bold text-2xl max-sm:text-xl">{courseTitle}</h1>
        <h2 className="text-lg max-sm:text-base">{author}</h2>
        <p className="text-lg max-sm:text-base">{rating}</p>
        <p className="text-xl max-sm:text-lg">{price}</p>
      </div>
    </div>
  );
};

export default CourseCard;

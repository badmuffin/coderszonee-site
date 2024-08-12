import React from "react";

const TestimonialCard = ({ imgUrl, customerName, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full bg-orange-100 p-10">
      <img
        src={imgUrl}
        alt="customer"
        className="rounded-full object-cover w-[150px] h-[150px]"
      />
      <h2 className="font-bold text-2xl">{customerName}</h2>
      <p className="mt-4 font-medium text-base text-center">{feedback}</p>
    </div>
  );
};

export default TestimonialCard;

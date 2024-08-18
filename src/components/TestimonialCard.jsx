import React from "react";
import { motion } from "framer-motion";

const Variants = {
  hover: { scale: 1.15},
  tap: { scale: 1.1 },
};

const TestimonialCard = ({ imgUrl, customerName, feedback }) => {
  return (
    <motion.div
      variants={Variants}
      whileHover="hover"
      whileTap="tap"
      transition={{ type: "tween", stiffness: 300 }}
      className="flex justify-center items-center flex-col w-full bg-orange-100 p-10 shadow-xl"
    >
      <img
        src={imgUrl}
        alt="customer"
        className="rounded-full object-cover w-[100px] h-[100px]"
      />
      <h2 className="font-bold text-2xl">{customerName}</h2>
      <p className="mt-4 w-64 font-medium text-base text-center">{feedback}</p>
    </motion.div>
  );
};

export default TestimonialCard;

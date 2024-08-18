import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: { scale: 1.1, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" },
  tap: { scale: 0.95 },
};

const Button = ({ label, bgColor, border, textColor }) => {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex justify-center items-center cursor-pointer border-2
        ${bgColor} ${border} ${textColor} 
        shadow-lg rounded-2xl text-lg font-bold px-8 py-4 mx-2
        max-sm:text-sm max-sm:px-4 max-sm:py-2
        `}
    >
      {label}
    </motion.button>
  );
};

export default Button;

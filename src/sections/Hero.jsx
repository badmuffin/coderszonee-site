import React from "react";
import Button from "../components/Button";
import logo from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex justify-center items-center min-h-screen bg-gray-300 rounded-3xl"
    >
      {/* left side content */}
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full px-10">
        <h1 className="font-bold text-6xl">
          Master
          <span className=" text-orange-600"> Digital Skills </span>
          With Ease!
        </h1>
        <p className=" text-xl ">
          Empower your learning journey with expert-led courses and personalized
          content.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button
          label="Start Learning"
          bgColor="bg-orange-600"
          border="border-orange-600"
          textColor="text-white"
        />
        <Button
          label="Learn More"
          bgColor="bg-white"
          border="border-orange-600"
          textColor="text-orange-600"
        />
        </div>
      </div>
      {/* Hero image */}
      <div>
        <img
          src={logo}
          alt="hero-image"
          className="object-contain relative z-10 w-[760px] h-[760px]"
        />
      </div>
    </section>
  );
};

export default Hero;

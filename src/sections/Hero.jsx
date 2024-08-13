import React from "react";
import Button from "../components/Button";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex justify-center items-center min-h-screen rounded-3xl max-lg:flex-col-reverse"
    >
      {/* left side content */}
      <div className="relative text-start xl:w-2/5 flex flex-col p-4 justify-center items-start w-full mx-10 max-sm:p-2 max-md:text-center">
        <h1 className=" font-extrabold text-6xl mb-10 max-sm:text-4xl">
          Master
          <span className=" text-orange-600"> Digital Skills </span>
          With Ease!
        </h1>
        <p className="text-xl mb-10">
          Empower your learning journey with expert-led courses and personalized
          content.Empower your learning journey with expert-led courses and personalized
          content.
        </p>
        <div className="mt-10 flex justify-center items-center flex-wrap gap-4">
          <Button
            label="Start Learning"
            bgColor="bg-orange-600"
            border="border-orange-700"
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
      <div className="pr-10 items-end max-sm:p-0">
        <img
          src={hero}
          alt="hero-image"
          width={700}
          height={700}
          className="object-cover rounded-3xl relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;

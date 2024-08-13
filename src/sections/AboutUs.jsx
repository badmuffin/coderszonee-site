import React from "react";
import image from "../assets/course2.png";

const AboutUs = () => {

    const stats = [
        {id:"A", title: "15+", subtitle: "Instructors"},
        {id:"B", title: "5k+", subtitle: "Students"},
        {id:"C", title: "98%", subtitle: "Lorem epsum"},
        {id:"D", title: "20%", subtitle: "Lorem Epsu"},
    ]

  return (
    <section className="w-full flex flex-col py-10">
      {/* Upper content */}
      <div className="flex justify-center items-center">
        {/* Image */}
        <div className="">
          <img
            src={image}
            alt="image"
            width={700}
            height={700}
            className="object-cover rounded-3xl relative z-10"
          />
        </div>
        {/* Content */}
        <div className=" w-[40%] m-10 ">
          <h1 className="font-extrabold text-center text-6xl m-10">
            About <span className="text-orange-600">Us</span>
          </h1>
          <p className=" text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            alias recusandae facere, a iste eos doloribus, nam, unde ad
            reiciendis enim cupiditate hic! Eius, quibusdam molestias nisi
            beatae quasi harum, quia porro ab delectus ad vel nemo itaque
            voluptas alias.
          </p>
        </div>
      </div>
      {/* Lower content */}
      <div className="flex justify-center items-center">
        {stats.map( (stat) => (
            <div key={stat.id} className="pt-10 px-20">
                <h1 className="font-extrabold text-4xl text-orange-600">{stat.title}</h1>
                <h2>{stat.subtitle}</h2>
            </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

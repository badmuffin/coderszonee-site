import React from "react";
import image from "../assets/course2.png";

const Product = () => {
  return (
    <div className="p-10 mx-20 max-md:m-0">
      {/* main heading */}
      <section className="p-2 mb-10  flex w-full shadow-md hover:shadow-lg border max-md:flex-col">
        <img src={image} className="w-1/3 object-cover max-md:w-full" />
        <div className="p-4 flex flex-col justify-between w-2/3 max-md:w-full">
          <h1 className="text-4xl p-2 font-bold">Frontend Development Bootcamp</h1>
          <p className="text-lg p-2">
            <span className="font-bold underline">Objective</span>: Equip
            students with the skills to build responsive and dynamic web
            interfaces using modern frontend technologies
          </p>
          <p className="text-lg p-2">
            <span className="font-bold underline">Duration</span>: 3 Months
          </p>
          <p className="text-lg p-2">
            <span className="font-bold underline">Level</span>: Beginner to
            Intermediate
          </p>
          <p className="text-lg p-2">
            created by
            <span className="text-orange-600 font-bold"> Alexa Yu</span>
          </p>
        </div>
      </section>

      {/* what you'll learn */}
      <section className="p-2 my-10 w-full border shadow-md hover:shadow-lg">
        <h1 className="text-4xl p-4 font-bold">What you'll learn</h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <p className="text-lg p-2">The ins and outs of HTML5, CSS3 and Modern JavaScript</p>
          <p className="text-lg p-2">Create responsive, accessible, and beautiful layouts</p>
          <p className="text-lg p-2">Learn to create Dynamic Webpages with APIs</p>
          <p className="text-lg p-2">Introduced to Popular Frontend library</p>
          <p className="text-lg p-2">Make real world application using Reactjs</p>
          <p className="text-lg p-2">Host your projects to share your work online</p>
        </div>
      </section>

      <section className="p-2 my-10 w-full border shadow-md hover:shadow-lg" >
        <h1 className="text-4xl p-4 font-bold">Curiculum</h1>
        <div className="flex flex-col justify-between p-2">
          <div className="p-2">
            <p className="text-lg font-bold">Month 1: HTML & CSS Foundations</p>
            <p className="text-base">Week 1: Introduction to Web Development</p>
            <p className="text-base">Week 2: Advanced HTML</p>
            <p className="text-base">Week 3: Introduction to CSS</p>
            <p className="text-base">Week 4: Advanced CSS</p>
          </div>
          <div className="p-2">
            <p className="text-lg font-bold">Month 2: JavaScript & Interactive Web Design</p>
            <p className="text-base">Week 5: Introduction to JavaScript</p>
            <p className="text-base">Week 6: JavaScript Events</p>
            <p className="text-base">Week 7: Advanced JavaScript</p>
            <p className="text-base">Week 8: Building Dynamic Web Pages</p>
          </div>
          <div className="p-2">
            <p className="text-lg font-bold">Month 3: Advanced Frontend Development & Project</p>
            <p className="text-sm">Week 9: Introduction to Frontend Frameworks</p>
            <p className="text-sm">Week 10: Building with Frontend Frameworks</p>
            <p className="text-sm">Week 11: Project Development</p>
            <p className="text-sm">Week 12: Review & Final Project</p>
          </div>
        </div>
      </section>

      {/* requirements */}
      <section className="p-2 my-10 w-full border shadow-md hover:shadow-lg">
        <h1 className="text-4xl p-4 font-bold">Requirements</h1>
        <ul className="p-4 text-lg">
          <li className="p-2">1. A Decent Computer with Internet</li>
          <li className="p-2">2. A Strong will to learn new things</li>
          <li className="p-2">
            3. Be ready to learn an insane amount of awesome stuffs
          </li>
          <li className="p-2">4. Prepare to build real world apps!</li>
        </ul>
      </section>

      {/* Description */}
      <section className="p-2 my-10 w-full border shadow-md hover:shadow-lg">
      <h1 className="text-4xl p-4 font-bold">Descriptions</h1>
        <p className="text-bold text-base p-2">Now with over 10+ hours of new content. Just updated on 12 Feb 20XX</p>
        <p className="text-base p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate nulla repellendus iusto fuga cum ipsum labore vero autem consequuntur deleniti minus sequi reprehenderit, a placeat. Velit minus consectetur quaerat at animi nemo, illum vel iusto rem ab ullam totam.</p>
        <p className="text-base p-2">Hii, welcom to this frontend development Bootcamp, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ut ducimus illo sint blanditiis tenetur perferendis, ex est, impedit quibusdam rerum perspiciatis qui placeat voluptatibus veritatis earum culpa dicta facilis voluptas nulla nemo. Voluptate modi ad, dolor adipisci aspernatur ullam accusamus et voluptatum quis. Consequuntur, est voluptatem. Dolorum, numquam autem.</p>
      </section>
    </div>
  );
};

export default Product;

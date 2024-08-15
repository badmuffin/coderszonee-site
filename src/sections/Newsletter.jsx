import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter submission logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <section className="bg-orange-200 text-black py-12">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Content on the left */}
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-4">
            Stay Updated with Our Latest Courses
          </h2>
          <p className="text-lg w-[80%]">
            Subscribe to our newsletter and never miss an update on new courses,
            events, and offers.
          </p>
        </div>

        {/* Input and Button on the right */}
        <form onSubmit={handleSubmit} className="w-full lg:w-auto flex">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 rounded-l-xl w-full lg:w-80 text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-r-xl transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

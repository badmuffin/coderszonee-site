import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-semibold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 mb-12">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg focus:outline-none transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

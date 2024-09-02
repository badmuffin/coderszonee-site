import React from "react";
import course2 from "../assets/course2.png";

const CourseDetailPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between p-6 lg:p-12 bg-white">
      {/* Main Content */}
      <div className="lg:w-2/3">
        <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
          The Frontend Development Bootcamp with React 2024
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Created by{" "}
          <span className="font-semibold text-black">Tom Holland</span>
        </p>
        <p className="text-gray-500 mb-8">
          Last updated: August 2024 · Language: Hindi
        </p>

        {/* Course Description */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
            Course Description
          </h2>
          <p className="text-gray-700 mb-4">
            This course is designed to take you from a beginner to an advanced
            level in React, one of the most popular JavaScript libraries for
            building user interfaces. Learn how to build dynamic web
            applications, manage state effectively, and leverage React's
            ecosystem to become a proficient developer.
          </p>
        </div>

        {/* What you'll learn */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
            What you'll learn
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Build modern web applications using React</li>
            <li>Understand component-based architecture</li>
            <li>Manage state with React hooks and Redux</li>
            <li>Deploy applications with modern tools and workflows</li>
          </ul>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
            Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Basic understanding of HTML, CSS, and JavaScript</li>
            <li>A computer with internet access</li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3 lg:ml-10 mt-8 lg:mt-0 lg:sticky lg:top-40 lg:self-start">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <img
            src={course2}
            alt="Course Cover"
            className="w-full mb-4 rounded-lg"
          />
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-orange-500">$49.99</span>
            <span className="line-through text-gray-500">$99.99</span>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-200">
            Enroll Now
          </button>
          <p className="text-gray-600 text-center mt-4">
            30-Day Money-Back Guarantee
          </p>
        </div>

        {/* Course includes */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-semibold mb-4">This course includes:</h3>
          <ul className="list-none text-gray-700 space-y-2">
            <li>15 hours of video content</li>
            <li>10 downloadable resources</li>
            <li>Full lifetime access</li>
            <li>Access on mobile and TV</li>
            <li>Certificate of completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;

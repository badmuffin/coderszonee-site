import React from "react";
import img from "../assets/profile1.png";

const Profile = () => {
  return (
    <section className=" bg-red-400 p-4 w-full">
      <h1 className="p-10 text-center text-5xl font-bold">My Profile</h1>
      {/* image, name, professions */}
      <div className="flex justify-start items-center rounded-2xl mx-10 bg-white shadow-xl">
        <img
          src={img}
          alt="profile"
          width={200}
          className="m-10 p-4 object-cover rounded-full"
        />
        <div className="p-4 text-left">
          <p className="p-2 font-bold text-3xl">Tom Holland</p>
          <p className="p-2 font-semibold text-xl">MERN expert</p>
        </div>
      </div>
      {/* personal information */}
      <div className="bg-white m-10 p-4 rounded-xl shadow-xl">
        <h1 className="py-10 px-4 text-left text-3xl font-bold">
          Personal Information
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="p-4">
            <p className="font-medium text-gray-700">First Name</p>
            <p className="font-semibold text-lg">Tom</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700">last Name</p>
            <p className="font-semibold text-lg">Holland</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700">Email address</p>
            <p className="font-semibold text-lg">tomholland@example.com</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700">Phone Number</p>
            <p className="font-semibold text-lg">+91 9876543210</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700">Bio</p>
            <p className="font-semibold text-lg">Student Mentor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

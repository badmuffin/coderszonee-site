import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ed from "../assets/ed.png"
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", user);

      console.log("User registered successfully:", response.data);

      // Show success message and redirect
      navigate("/profile");
      alert("Successfully registered!");
    } catch (err) {
      console.error("Error registering:", err.response?.data?.msg || err.message);
    }
  };

  return (
    <div className="flex w-full bg-blue-100">
      <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
        <p className="text-left text-5xl font-bold">Hi there!</p>
        <p className="mt-2 text-left text-gray-500">Please enter your details.</p>
        <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
          <img
            className="mr-2 h-5"
            src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
            alt="Google Icon"
          />
          Register with Google
        </button>
        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
          <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 text-center text-xl text-gray-500">
            or
          </div>
        </div>
        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col pt-4">
            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
              <input
                type="text"
                name="name"
                className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Full Name"
                value={user.name}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
              <input
                type="text"
                name="phone"
                className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Phone Number"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
              <input
                type="email"
                name="email"
                className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Email"
                value={user.email}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-12 flex flex-col pt-4">
            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
              <input
                type="password"
                name="password"
                className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Password"
                value={user.password}
                onChange={handleInput}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
          >
            Register
          </button>
        </form>
        <div className="py-12 text-center">
          <p className="whitespace-nowrap text-gray-600">
            Already have an account?
            <span className="cursor-pointer underline-offset-4 font-semibold text-gray-900 underline">
              <Link to="/login">Click here to login</Link>.
            </span>
          </p>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <img
          className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
          src={ed}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
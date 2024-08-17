import React, { useRef } from "react";
import { useState } from "react";

const SignForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  // creating references from input tags
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

// function to check the validation of the inputs
  const checkValidate = (username, email, password) => {

    // regex equations/syntax
    const isUsernameValid = /^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/.test(username);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isUsernameValid) return "Invalid Username";
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Choose a Strong Password";
    return null;
  };

  const handleButtonClick = () => {
    // validate the form data
    const msg = checkValidate(
      username.current.value,
      email.current.value,
      password.current.value
    );
    setErrMsg(msg);
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" flex flex-col justify-center items-center text-black my-36 mx-auto w-1/3 p-10 border-2 border-black rounded-xl"
      >
        <h1 className="font-bold text-4xl py-4 px-2">
          {isSignInForm ? " Sign In " : " Sign Up "}
        </h1>
        <input
          ref={username}
          type="text"
          placeholder="Full Name"
          className={` p-3 m-4 w-full border-2 border-black
            ${isSignInForm ? "hidden" : ""}
          `}
        />
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" p-3 m-4 w-full border-2 border-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-3 m-4 w-full border-2 border-black"
        />
        <p className="text-red-600 font-bold">{errMsg}</p>
        <button
          className="p-2 m-4 w-full text-lg font-semibold bg-red-500 hover:bg-red-600"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-900">
          {isSignInForm ? "New User?" : "Already Registered?"}
          <span className="cursor-pointer hover:underline text-black font-bold" onClick={toggleForm}>
            {isSignInForm ? " Sign Up Now " : " Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignForm;

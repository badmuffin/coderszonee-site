

// const SignForm = () => {
//   const [errMsg, setErrMsg] = useState(null);

//   // creating references from input tags
//   const username = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);

// // function to check the validation of the inputs
//   const checkValidate = (username, email, password) => {

//     // regex equations/syntax
//     const isUsernameValid = /^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/.test(username);
//     const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
//     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//     if (!isUsernameValid) return "Invalid Username";
//     if (!isEmailValid) return "Email ID is not valid";
//     if (!isPasswordValid) return "Choose a Strong Password";
//     return null;
//   };

//   const handleButtonClick = () => {
//     // validate the form data
//     const msg = checkValidate(
//       username.current.value,
//       email.current.value,
//       password.current.value
//     );
//     setErrMsg(msg);
//   };


//   return (
//     <div>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <h1 className="font-bold text-4xl py-4 px-2">
//           {isSignInForm ? " Sign In " : " Sign Up "}
//         </h1>
//         <input
//           ref={username}
//           type="text"
//           placeholder="Full Name"
//           className={` p-3 m-4 w-full border-2 border-black
//             ${isSignInForm ? "hidden" : ""}
//           `}
//         />
//         <input
//           ref={email}
//           type="text"
//           placeholder="Email Address"
//           className=" p-3 m-4 w-full border-2 border-black"
//         />
//         <input
//           ref={password}
//           type="password"
//           placeholder="Password"
//           className=" p-3 m-4 w-full border-2 border-black"
//         />
//         <p className="text-red-600 font-bold">{errMsg}</p>
//         <button
//           className="p-2 m-4 w-full text-lg font-semibold bg-red-500 hover:bg-red-600"
//           onClick={handleButtonClick}
//         >
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </button>

//         <p className="text-gray-900">
//           {isSignInForm ? "New User?" : "Already Registered?"}
//           <span className="cursor-pointer hover:underline text-black font-bold" onClick={toggleForm}>
//             {isSignInForm ? " Sign Up Now " : " Sign In Now"}
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignForm;

import React, { useState } from "react";
import ed from "../assets/ed.png";

const SignForm = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2 bg-blue-100">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-5xl font-bold"> {isSignInForm ? "Welcome back!" : "Hi there!"}</p>
          <p className="mt-2 text-left text-gray-500">
            please enter your details.
          </p>
          <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
            <img
              className="mr-2 h-5"
              src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
              alt="Google Icon"
            />
            { isSignInForm ? "Log in with Google" : "Sign up with Google" }
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 text-center text-xl text-gray-500">
              or
            </div>
          </div>
          <form className="flex flex-col pt-3 md:pt-8">

          <div className="flex flex-col pt-4">
              <div className={`${isSignInForm ? "hidden" : ""} focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition`}>
                <input
                  type="text"
                  id="name"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="email"
                  id="email"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-12 flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  id="password"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <button onClick={e => e.preventDefault()} className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2">
              { isSignInForm ? "Sign in" : "Sign up"}
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600" onClick={toggleForm} >
              {isSignInForm ? "Don't" : "Already" } have an account?
              <span className="cursor-pointer underline-offset-4 font-semibold text-gray-900 underline">
                { isSignInForm ? "Sign up for free" : "Click here for login"}.
              </span>
            </p>
          </div>
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

export default SignForm;

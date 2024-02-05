import React, { useRef, useState } from "react";
import { Header } from "./index";
import { formValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [toggle, setToggle] = useState(false);

  const emailref = useRef(null);
  const passwordref = useRef(null);

  const [error, setError] = useState(null);
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };
  // console.log(toggle);
  const handleSubmit = () => {
    const message = formValidate(
      emailref.current.value,
      passwordref.current.value
    );
    setError(message);

    // if (!message) return;

    if (!toggle) {
      console.log("sign up");
      createUserWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordref.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    } else {
      console.log("sign in");
      signInWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordref.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
          alt="bg img"
        />
        {/* Form */}
        <div className="bg-opacity-85 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-10 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-white mb-6">
            {toggle ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {!toggle && (
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                  placeholder="Enter you name"
                />
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                ref={emailref}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="Enter you Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-white text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                ref={passwordref}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                placeholder="Enter you Password"
              />
            </div>
            <p className="text-red-500 font-bold">{error}</p>
            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 focus:outline-none"
            >
              {toggle ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-white cursor-pointer mt-4"
              onClick={handleToggle}
            >
              {!toggle ? `Already a User? Sign In` : `New User? Sign Up`}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

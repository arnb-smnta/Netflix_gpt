import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const toggleFeature = (e) => {
    e.preventDefault();
    setSignInForm(!SignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="body image"
          className="absolute"
        />
      </div>
      <form
        action=""
        className="absolute py-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 mx-8">
          {SignInForm ? "Sign In" : "Sign Up"} Folks
        </h1>

        {SignInForm ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="py-2 mx-8 w-10/12 my-4"
          />
        )}
        <input
          type="text"
          placeholder="UserName or Mobile Number"
          className="py-2 mx-8 w-10/12 my-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 mx-8 w-10/12 my-4"
        />
        <button className="py-4 mx-8 w-4/12 my-4 bg-red-600 rounded-lg">
          {SignInForm ? "Sign In" : "Sign Up"} god damn it!!
        </button>

        <p className="mx-8 my-4">
          {SignInForm ? "New to Netflix ? What the hell r u doing " : ""}
          <button className="text-blue-500" onClick={toggleFeature}>
            {SignInForm
              ? "Sign Up now .... "
              : "Already a user ? What are u doing here go back"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/validate";
import { auth } from "./utils/firebase";
import { addUser } from "./utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [SignInForm, setSignInForm] = useState(true);
  const toggleFeature = (e) => {
    e.preventDefault();
    setSignInForm(!SignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMsg, seterrorMsg] = useState(null);
  const validationfn = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMsg(message);

    if (message) return;

    if (!SignInForm) {
      //Sign upLogic from firebase Docs

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // ...

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.log(error);
            });

          console.log(user);
          seterrorMsg("User Succesfully signed up");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "  " + errorMessage);
          seterrorMsg(errorCode + "  " + errorMessage);
        });
    } else {
      //Sign in Code from firebase docs

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          seterrorMsg("User succesfully signed in");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "  " + errorMessage);
          seterrorMsg(errorCode + "  " + errorMessage);
        });
    }
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
            ref={name}
            type="text"
            placeholder="Enter your Full Name"
            className="py-2 mx-8 w-10/12 my-4 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="UserName or Mobile Number"
          className="py-2 mx-8 w-10/12 my-4  bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-2 mx-8 w-10/12 my-4  bg-gray-700"
        />
        {errorMsg ? (
          <p className="text-red-700 py-4 mx-8 font-bold text-lg">
            {errorMsg} !! Common Man
          </p>
        ) : (
          ""
        )}
        <button
          className="py-4 mx-8 w-4/12 my-4 bg-red-600 rounded-lg"
          onClick={validationfn}
        >
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

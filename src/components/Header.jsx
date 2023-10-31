import React from "react";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...

        //redirect to browse page on signup
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
        navigate("/");
      }
    });

    //unsubscribe when component unmounts read firebase docs
  }, []);
  const handleSignout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between absolute px-12 py-2 bg-gradient-to-b from-black z-10 w-screen">
      <div>
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix-logo"
        />
      </div>
      <div>
        <img
          className="w-14"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt=""
        />
        <button className="bg-blue-500 m-auto my-4" onClick={handleSignout}>
          Signout
        </button>
      </div>
    </div>
  );
};

export default Header;

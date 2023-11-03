import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  useNowPlayingMovies();
  const gpt = useSelector((store) => store?.gpt?.gptToggle);
  return (
    <div>
      <Header />
      {gpt ? (
        <GptSearchPage />
      ) : (
        <>
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

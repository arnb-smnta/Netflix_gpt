import React from "react";
import { imgurl } from "./utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={imgurl} alt="logo" />
      </div>
      <GptSearchBar />;
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;

import React from "react";
import { posterPath } from "./utils/constants";

const MovieCard = (path) => {
  return (
    <div className="w-8px h-8px px-4 z-20">
      <img src={posterPath + path.path} alt="picture" />
    </div>
  );
};

export default MovieCard;

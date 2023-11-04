import React from "react";
import { posterPath } from "./utils/constants";

const MovieCard = (path) => {
  if (!path.path) {
    return null;
  }
  return (
    <div className="w-36 px-4 py-2">
      <img src={posterPath + path.path} alt="picture" />
    </div>
  );
};

export default MovieCard;

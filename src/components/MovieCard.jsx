import React from "react";
import { posterPath } from "./utils/constants";

const MovieCard = (path) => {
  console.log(path);
  return (
    <div className="w-8px h-8px">
      <img src={posterPath + path.path} alt="picture" />
    </div>
  );
};

export default MovieCard;

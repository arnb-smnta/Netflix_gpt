import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div>
      <h1>{title}</h1>

      <div className="flex overflow">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

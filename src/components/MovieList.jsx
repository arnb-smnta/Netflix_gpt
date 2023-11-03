import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title);
  console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-white font-bold text-2xl italic py-4 pl-4 ">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie?.poster_path} path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

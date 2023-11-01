import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie?.newmovie);
  if (movies)
    return (
      <div>
        <div className="bg-black">
          <div className="-mt-45">
            <MovieList title={"now Playing"} movies={movies} />
            <MovieList title={"FIrey Hot"} movies={movies} />
            <MovieList title={"Hot"} movies={movies} />
            <MovieList title={"Trending"} movies={movies} />
          </div>
        </div>
      </div>
    );
};

export default SecondaryContainer;

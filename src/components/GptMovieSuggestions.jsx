import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { moviename, movieresults } = useSelector((store) => store.gpt);

  if (!movieresults) {
    return null;
  }

  return (
    <div className="bg-black text-white opacity-80 px-4 mx-4">
      {moviename.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={movieresults[index].results}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;

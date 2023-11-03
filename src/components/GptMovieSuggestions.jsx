import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { moviename, movieresults } = useSelector((store) => store.gpt);

  if (!movieresults) {
    return null;
  }

  return (
    <div>
      <MovieList
        key={moviename[0]}
        title={moviename[0]}
        movies={movieresults[0].results}
      />
    </div>
  );
};

export default GptMovieSuggestions;

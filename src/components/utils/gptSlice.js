import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggle: false,
    moviename: null,
    movieresults: null,
  },
  reducers: {
    GptToggleFeature: (state) => {
      state.gptToggle = !state.gptToggle;
    },
    gptAddMovies: (state, action) => {
      const { moviename, movieresults } = action.payload;
      state.moviename = moviename;
      state.movieresults = movieresults;
    },
  },
});

export const { GptToggleFeature, gptAddMovies } = gptSlice.actions;
export default gptSlice.reducer;

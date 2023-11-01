import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    newmovie: null,
    newtrailer: null,
  },
  reducers: {
    addPlayingmovie: (state, action) => {
      state.newmovie = action.payload;
    },
    addTrailer: (state, action) => {
      state.newtrailer = action.payload;
    },
  },
});
export const { addPlayingmovie, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;

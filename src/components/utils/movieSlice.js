import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    newmovie: null,
  },
  reducers: {
    addPlayingmovie: (state, action) => {
      state.newmovie = action.payload;
    },
  },
});
export const { addPlayingmovie } = movieSlice.actions;
export default movieSlice.reducer;

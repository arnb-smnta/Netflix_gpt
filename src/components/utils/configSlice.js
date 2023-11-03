import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    languagepreferance: "en",
  },
  reducers: {
    updatelanguagepreferance: (state, action) => {
      state.languagepreferance = action.payload;
    },
  },
});
export const { updatelanguagepreferance } = configSlice.actions;
export default configSlice.reducer;

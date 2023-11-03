import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggle: false,
  },
  reducers: {
    GptToggleFeature: (state) => {
      state.gptToggle = !state.gptToggle;
    },
  },
});

export const { GptToggleFeature } = gptSlice.actions;
export default gptSlice.reducer;

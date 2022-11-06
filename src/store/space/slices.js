import { createSlice } from "@reduxjs/toolkit";
//frontend SetUp 1. add a new slice "spaces"
const initialState = {
  spaces: null,
  spaceDetails: null,
};
//F1 step4: write a slice that will update the store (allSpaces)
export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    allSpaces: (state, action) => {
      state.spaces = action.payload;
    },
  },
});

export const { allSpaces } = spaceSlice.actions;
export default spaceSlice.reducer;

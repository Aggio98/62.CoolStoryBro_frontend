import { createSlice } from "@reduxjs/toolkit";
//frontend SetUp 1. add a new slice "spaces"
const initialState = {
  spaces: null,
  spaceDetails: null,
};
//F1 step4: write a slice that will update the store (allSpaces)
//F2 write a slice that will update the store
export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    allSpaces: (state, action) => {
      state.spaces = action.payload;
    },
    detailsSpace: (state, action) => {
      state.spaceDetails = action.payload;
    },
  },
});

export const { allSpaces, detailsSpace } = spaceSlice.actions;
export default spaceSlice.reducer;

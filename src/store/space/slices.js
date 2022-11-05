import { createSlice } from "@reduxjs/toolkit";
//frontend SetUp 1. add a new slice "spaces"
const initialState = {
  spaces: null,
  spaceDetails: null,
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {},
});

export const {} = spaceSlice.actions;
export default spaceSlice.reducer;

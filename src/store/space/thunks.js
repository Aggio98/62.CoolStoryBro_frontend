import { apiUrl } from "../../config/constants";
import axios from "axios";
import { allSpaces, detailsSpace } from "./slices";
import { appDoneLoading, appLoading } from "../appState/slice";
//check curly brackets

//F1 step1: write a thunk
export const fetchSpaces = () => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/spaces`);
    //F1 step2: console.log(and dispatch the thunk to the component)
    //console.log(response.data);
    //F1 step5 dispatch the action from the reducer and then check the redux store
    dispatch(allSpaces(response.data));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log("error fetching spaces", e.message);
  }
};

//F2 Step1: write a thunk
export const fetchStories = (id) => async (dispatch, getState) => {
  try {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    console.log("this is the details for the spaces", response.data);
    dispatch(detailsSpace(response.data));
  } catch (e) {
    console.log("error fetching details", e.message);
  }
};

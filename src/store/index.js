import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import spaceReducer from "./space/slices";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    spaces: spaceReducer,
  },
});

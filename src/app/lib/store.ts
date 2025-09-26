import { configureStore } from "@reduxjs/toolkit";
import variableReducer from "./feature/datafeacture/dataSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      variable: variableReducer,
    },
  });
};

// Types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/couter/counter-slice";

export const store = configureStore({
  // automatically call the combined reducers
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

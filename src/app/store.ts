import { apiSlice } from "./../features/dogs/dog-api-slice";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/couter/counter-slice";

export const store = configureStore({
  // automatically call the combined reducers
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

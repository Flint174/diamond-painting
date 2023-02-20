import { configureStore } from "@reduxjs/toolkit";
import { imageReducer } from "./slices/image-slice";

export const store = configureStore({
  reducer: { imageReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

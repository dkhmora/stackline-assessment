import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

export const store = configureStore({
  reducer: rootReducer,
  // Disable serializableCheck middleware to allow for nested objects
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

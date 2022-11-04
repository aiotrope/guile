import { configureStore } from "@reduxjs/toolkit";
import anecdotesApp from "../reducers/anecdoteReducer";

export const store = configureStore({
  reducer: anecdotesApp,
});

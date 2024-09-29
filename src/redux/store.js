import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { filtersReducer } from "./filters/slice";
import { favouritesReducer } from "./favourites/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favourites: favouritesReducer,
  },
});

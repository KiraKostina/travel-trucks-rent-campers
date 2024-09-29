import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const camperId = action.payload;
      if (state.favourites.includes(camperId)) {
        state.favourites = state.favourites.filter((id) => id !== camperId);
      } else {
        state.favourites.push(camperId);
      }
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;

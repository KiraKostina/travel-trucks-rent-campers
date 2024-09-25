import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getCamperById, getCampers } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    // campers: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getCampers.rejected, handleRejected)

      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.isLoading = false;
      })
      .addCase(getCamperById.rejected, handleRejected);
  },
});
export const campersReducer = campersSlice.reducer;

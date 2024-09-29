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
    camper: {},
    total: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        const newItems = action.payload.items.filter(
          (newItem) =>
            !state.items.some((existingItem) => existingItem.id === newItem.id)
        );
        state.items = [...state.items, ...newItems];
        // [...state.items, ...newItems];
        state.total = action.payload.total;
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
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;

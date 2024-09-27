// import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.camper;
export const selectIsLoading = (state) => state.campers.IsLoading;
export const selectError = (state) => state.campers.error;
export const selectTotalCampers = (state) => state.campers.total;

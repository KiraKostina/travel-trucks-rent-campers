import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    equipment: [],
  },
  reducers: {
    setLocationFilter(state, action) {
      state.location = action.payload;
    },
    setVehicleTypeFilter(state, action) {
      state.form = action.payload;
    },
    setEquipmentFilter(state, action) {
      state.equipment = action.payload;
    },
    resetFilters(state) {
      state.location = "";
      state.form = "";
      state.equipment = [];
    },
  },
});

export const {
  setLocationFilter,
  setVehicleTypeFilter,
  setEquipmentFilter,
  resetFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// import { createSelector } from "@reduxjs/toolkit";

import { createSelector } from "@reduxjs/toolkit";
import { selectLocationFilter } from "../filters/selectors";

export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.camper;
export const selectIsLoading = (state) => state.campers.IsLoading;
export const selectError = (state) => state.campers.error;
export const selectTotalCampers = (state) => state.campers.total;

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectLocationFilter],
//   (campers, filter) => {
//     if (!filter) {
//       return campers;
//     }
//     return campers.filter((camper) =>
//       camper.location.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

export const selectFilteredCampers = (state) => state.campers.items;

// Пример селектора с дополнительной фильтрацией на клиенте, если требуется
export const selectFilteredCampersWithFilters = createSelector(
  [selectCampers, (state) => state.filters],
  (campers, filters) => {
    const { locationFilter, vehichleTypeFilter } = filters;
    return campers.filter((camper) => {
      const matchesLocation = locationFilter
        ? camper.location.toLowerCase().includes(locationFilter.toLowerCase())
        : true;
      const matchesVehicleType = vehichleTypeFilter
        ? camper.form.toLowerCase() === vehichleTypeFilter.toLowerCase()
        : true;
      return matchesLocation && matchesVehicleType;
    });
  }
);

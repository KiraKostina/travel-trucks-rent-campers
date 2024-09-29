import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async ({ filters, page, limit }, thunkAPI) => {
    try {
      const { locationFilter, vehichleTypeFilter } = filters;
      const params = {
        page,
        limit,
      };

      if (locationFilter) params.location = locationFilter;
      if (vehichleTypeFilter) params.form = vehichleTypeFilter;

      const response = await axios.get("/campers", { params });
      console.log("Response data:", response.data);
      return response.data;

      // return {
      //   items: response.data.items,
      //   total: response.data.total,
      // };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET /campers/:id для отримання деталей оголошення за його ID
export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// фильтра
// const equipmentParams = equipmentFilters.reduce((params, filter) => {
//   if (filters.equipment.includes(filter)) {
//     params[filter] = true; // Если выбрано, устанавливаем true
//   }
//   return params;
// }, {});

// const queryParams = {
//   // location: filters.location,
//   // form: filters.form,
//   // ...equipmentParams, // Добавляем динамически созданные фильтры
//   page,
//   limit,
// };

//альтернативный код
// export const getCampers = createAsyncThunk(
//   "campers/getAll",
//   async ({ filters, page, limit }, thunkAPI) => {

//     try {
//       const equipmentParams = equipmentFilters.reduce((params, filter) => {
//         if (filters.equipment.includes(filter)) {
//           params[filter] = true; // Если выбрано, устанавливаем true
//         }
//         return params;
//       }, {});

//       const queryParams = {
//         location: filters.location,
//         form: filters.form,
//         ...equipmentParams, // Добавляем динамически созданные фильтры
//         page,
//         limit,
//       };

// const response = await axios.get("/campers", {
//   params: queryParams,
// params: {
//   location: filters.location,
//   form: filters.form,
// equipment: filters.equipment.join(","),
//   AC: filters.equipment.includes("AC") ? true : undefined, // Если AC выбрано
//   kitchen: filters.equipment.includes("kitchen") ? true : undefined, // Если kitchen выбрано
//   page: page,
//   limit: limit,
// },
// });
// return response.data;
// {
//   items: response.data.items,
//   total: response.data.total,
// response.data.items;
// };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

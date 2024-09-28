import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async ({ filters, page, limit }, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: {
          page: page,
          limit: limit,
          location: filters.location,
          form: filters.form,
          equipment: filters.equipment.join(","),
        },
      });
      return {
        items: response.data.items, // массив айтемов
        total: response.data.total, // общее количество айтемов}
        // response.data.items;
      };
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

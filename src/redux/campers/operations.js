import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET /campers/:id для отримання деталей оголошення за його ID
export const getCamperById = createAsyncThunk(
  "campers/fetchCamper",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camperId}`);
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

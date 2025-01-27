import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customTypes/product";

type TResponce = TProduct[];

export const actGetProductsByCatPrifix = createAsyncThunk(
  "products/actGetProductsByCatPrifix",
  async (prefix:string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponce>(
`http://localhost:5005/products?cat_prefix=${prefix}`      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("an unexpected error occurred");
      }
    }
  }
);
export default actGetProductsByCatPrifix;

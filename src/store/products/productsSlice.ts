import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrifix   from "./act/actGetProductsByCatPrifix";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";
interface ICategoriesState {
    records:TProduct[];
    loading:TLoading;
    error:string|null;
}

const initialState : ICategoriesState ={
    records:[],
    loading:"idle",
    error:null,

 }

 const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    ProductsCleanUp(state) {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCatPrifix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrifix.fulfilled, (state, action) => {
      state.records = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(actGetProductsByCatPrifix.rejected, (state, action) => {
      state.loading = "failed";
        state.error = action.payload as string;
    });
  },        
});
export const { ProductsCleanUp } = productsSlice.actions;
export{actGetProductsByCatPrifix};
export default productsSlice.reducer;
 

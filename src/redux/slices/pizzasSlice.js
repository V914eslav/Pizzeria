import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (params) => { 
    const {
      search, 
      sortProperty,
      categoryId,
      currentPage}= params;
    const res = await axios(
      `https://62c15821eff7f7856f0c8821.mockapi.io/pizzas?&page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortProperty.sortProperty}&order=desc${search}`
    );
    return res.data
  }
)

const initialState = {
    items:[],
    status: "loading" //loading || success || error
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state,action) => {
     state.items = action.payload
     state.items = [];
    },
  },
  extraReducers:  {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPizzas.fulfilled]: (state,action) => {
      state.items = action.payload
      state.status = "success";
    }, 
    [fetchPizzas.rejected]: (state,action) => {
      state.status = "error";
      state.items = [];

    }
  },
});
export const { setItems, } =
pizzasSlice.actions;
export default pizzasSlice.reducer;

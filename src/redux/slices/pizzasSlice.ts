import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { sortBy, search, order, category, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://62c15821eff7f7856f0c8821.mockapi.io/pizzas?&page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, //loading || success || error
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Pizza[]>) => {
      state.items = action.payload;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});
export const selectPizzaData = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;

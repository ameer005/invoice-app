import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const { data } = await axios.get("/data.json");

    return data;
  }
);

const initialState = {
  invoices: [],
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchInvoices.fulfilled]: (state, { payload }) => {
      state.invoices = payload;
    },
  },
});

export default invoiceSlice.reducer;

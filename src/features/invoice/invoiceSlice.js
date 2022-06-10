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
  reducers: {
    deleteInvoice: (state, { payload }) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== payload
      );
    },
    MarkAsPaid: (state, { payload }) => {
      state.invoices.forEach((invoice) => {
        if (invoice.id === payload) invoice.status = "paid";
      });
    },
  },
  extraReducers: {
    [fetchInvoices.fulfilled]: (state, { payload }) => {
      state.invoices = payload;
    },
  },
});

export const { deleteInvoice, MarkAsPaid } = invoiceSlice.actions;
export default invoiceSlice.reducer;

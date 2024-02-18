import { createSlice } from "@reduxjs/toolkit";
import { getClients } from "./ourclientsThunk.ts";

const initialState: Slice.IClientsData = {
   data: [],
   getLoading: false,
};

const clients = createSlice({
   name: "clients",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getClients.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getClients.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getClients.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersClients = clients.reducer;

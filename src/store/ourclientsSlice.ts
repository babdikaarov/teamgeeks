import { createSlice } from "@reduxjs/toolkit";
import { getClients } from "./thunkCollection.ts";

const initialState: Slice.IClientsData = {
   data: [],
   getLoading: false,
};

const clients = createSlice({
   name: "clients",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getClients.fulfilled, (state, { payload }) => {
         if (payload) {
            state.getLoading = true;
            state.data = payload;
         }
      });
      builder.addCase(getClients.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersClients = clients.reducer;

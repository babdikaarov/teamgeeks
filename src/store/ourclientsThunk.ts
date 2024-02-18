import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getClients = createAsyncThunk("getClients", async () => {
   const getData = await axiosApi<Slice.IClients[]>("/partners_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});

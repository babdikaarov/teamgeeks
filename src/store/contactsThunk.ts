import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getContacts = createAsyncThunk("getContacts", async () => {
   const getData = await axiosApi<Slice.IGetContacts>("/contacts");
   const data = getData.data;

   if (data) {
      return data;
   }
});

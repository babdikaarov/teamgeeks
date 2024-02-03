import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetContacts } from "../types.ts";
import axiosApi from "../axiosApi.ts";

export const getContacts = createAsyncThunk(
   "getContacts",
   async () => {
      const getData = await axiosApi<IGetContacts>("/contacts");
      const data = getData.data;

      if (data) {
         return data;
      }

   }
);
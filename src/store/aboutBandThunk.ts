import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import { IAboutData } from "../types.ts";

export const getAboutBand = createAsyncThunk("getAboutBand", async () => {
   const getData = await axiosApi<IAboutData>("/about_us_band");
   const data = getData.data;

   if (data) {
      return data;
   }
});

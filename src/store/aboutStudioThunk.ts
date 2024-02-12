import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";

export const getCoolStudio = createAsyncThunk("getCoolStudio", async () => {
   const getData = await axiosApi<Slice.GetCoolStudioVideo>("/about_us_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import { GetCoolStudioVideo } from "../types.ts";

export const getCoolStudio = createAsyncThunk("getCoolStudio", async () => {
   const getData = await axiosApi<GetCoolStudioVideo>("/about_us_studio");
   const data = getData.data;

   if (data) {
      return data;
   }
});
